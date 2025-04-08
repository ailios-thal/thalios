import { fileURLToPath } from 'url';
import path from 'path';

export function getDirname(importMetaUrl: string): string {
  return path.dirname(fileURLToPath(importMetaUrl));
}

export function resolvePath(...paths: string[]): string {
  const baseDir = getDirname(import.meta.url);
  return path.resolve(baseDir, ...paths);
}

export function toFileURL(filePath: string): string {
  // Convert Windows backslashes to forward slashes
  const normalizedPath = filePath.replace(/\\/g, '/');
  // Ensure the path starts with a forward slash
  const pathWithLeadingSlash = normalizedPath.startsWith('/') ? normalizedPath : `/${normalizedPath}`;
  return `file://${pathWithLeadingSlash}`;
} 