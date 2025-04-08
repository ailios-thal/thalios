import type { Express, Request, Response } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertWaitlistSchema } from "@shared/schema";
import { ZodError } from "zod";
import { fromZodError } from "zod-validation-error";

export async function registerRoutes(app: Express): Promise<Server> {
  // Waitlist API route - add a new entry to the waitlist
  app.post("/api/waitlist", async (req: Request, res: Response) => {
    try {
      const parsedData = insertWaitlistSchema.parse(req.body);
      
      // Add timestamp to the entry
      const data = {
        ...parsedData,
        createdAt: new Date().toISOString(),
      };
      
      const entry = await storage.addToWaitlist(data);
      res.status(201).json({ success: true, data: entry });
    } catch (error) {
      if (error instanceof ZodError) {
        const validationError = fromZodError(error);
        res.status(400).json({
          success: false,
          message: "Validation failed",
          errors: validationError.message,
        });
      } else if (error instanceof Error) {
        res.status(500).json({
          success: false,
          message: error.message,
        });
      } else {
        res.status(500).json({
          success: false,
          message: "An unknown error occurred",
        });
      }
    }
  });

  // Get all waitlist entries (for admin purposes)
  app.get("/api/waitlist", async (_req: Request, res: Response) => {
    try {
      const entries = await storage.getAllWaitlistEntries();
      res.status(200).json({ success: true, data: entries });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: error instanceof Error ? error.message : "An unknown error occurred",
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
