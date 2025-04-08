import React from 'react';
import { motion } from 'framer-motion';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { useMutation } from '@tanstack/react-query';
import { apiRequest } from '@/lib/queryClient';
import { useToast } from '@/hooks/use-toast';
import { Loader2 } from 'lucide-react';

import { 
  Form, 
  FormControl, 
  FormDescription, 
  FormField, 
  FormItem, 
  FormLabel 
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';

const formSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address" }),
  organization: z.string().optional(),
  updates: z.boolean().default(false),
});

type FormData = z.infer<typeof formSchema>;

export default function WaitlistForm() {
  const { toast } = useToast();
  
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      organization: '',
      updates: false,
    },
  });

  const mutation = useMutation({
    mutationFn: (data: FormData) => {
      return apiRequest('POST', '/api/waitlist', data);
    },
    onSuccess: () => {
      toast({
        variant: "success",
        title: "Success!",
        description: "You've been added to our waitlist!",
      });
      form.reset();
    },
    onError: (error) => {
      toast({
        variant: "destructive",
        title: "Error",
        description: error instanceof Error ? error.message : "Failed to join waitlist. Please try again.",
      });
    },
  });

  function onSubmit(data: FormData) {
    mutation.mutate(data);
  }

  return (
    <section id="waitlist" className="py-16 bg-gradient-to-b from-[#0f172a] to-[#1e293b] relative">
      <div className="absolute inset-0 bg-[#0f172a]/50 backdrop-blur-sm"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center mb-12"
        >
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            Join Our Waitlist
          </h2>
          <p className="mt-4 text-lg text-gray-300">
            Join our waitlist for organizations interested in monitoring cetacean movement. 
            Thalios.ai empowers researchers, conservationists, and marine industries with adaptable, 
            customizable solutions that work in energy-constrained environments.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="max-w-md mx-auto"
        >
          <div className="bg-[#1e293b]/80 rounded-xl p-8 shadow-xl border border-gray-700">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-300">
                        Email address <span className="text-red-400">*</span>
                      </FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="you@example.com" 
                          className="px-4 py-3 bg-[#0f172a]/90 border border-gray-600 rounded-md shadow-sm focus:ring-[#14b8a6] focus:border-[#14b8a6] text-gray-200" 
                          {...field} 
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="organization"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-300">
                        Organization/Company (optional)
                      </FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="Your organization" 
                          className="px-4 py-3 bg-[#0f172a]/90 border border-gray-600 rounded-md shadow-sm focus:ring-[#14b8a6] focus:border-[#14b8a6] text-gray-200" 
                          {...field} 
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="updates"
                  render={({ field }) => (
                    <FormItem className="flex items-start space-x-3 space-y-0">
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                          className="h-4 w-4 text-[#0d9488] focus:ring-[#14b8a6] border-gray-500 rounded bg-[#0f172a]/90"
                        />
                      </FormControl>
                      <FormLabel className="font-medium text-gray-300">
                        Receive product updates and newsletters
                      </FormLabel>
                    </FormItem>
                  )}
                />

                <Button 
                  type="submit" 
                  className="w-full py-3 px-4 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-[#0d9488] hover:bg-[#0f766e] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#14b8a6] transition-colors"
                  disabled={mutation.isPending}
                >
                  {mutation.isPending ? (
                    <div className="flex items-center">
                      <Loader2 className="animate-spin mr-2 h-4 w-4" />
                      Processing...
                    </div>
                  ) : (
                    "Join Waitlist"
                  )}
                </Button>
              </form>
            </Form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
