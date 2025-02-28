import { Request, Response, NextFunction } from 'express';

export function LoggerGlobal(req: Request, res: Response, next: NextFunction) {
  const now = new Date().toISOString(); // Fecha y hora en formato ISO
  console.log(`[${now}] You are execute a methood ${req.method} in the route ${req.url}`);
  console.log(`[${now}] Request body:`, req.body);
  next();
}