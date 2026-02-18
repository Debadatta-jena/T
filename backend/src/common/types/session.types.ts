import { Request } from 'express';
import * as session from 'express-session';

declare module 'express-session' {
  interface SessionData {
    csrfToken?: string;
  }
}

declare global {
  namespace Express {
    interface Request {
      session: session.Session & Partial<session.SessionData>;
    }
  }
}
