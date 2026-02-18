import { Injectable, NestInterceptor, ExecutionContext, CallHandler } from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Response } from 'express';

@Injectable()
export class CookieInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const ctx = context.switchToHttp();
    const response = ctx.getResponse<Response>();
    
    return next.handle().pipe(
      map((data) => {
        // Set secure cookie headers for all responses
        if (data.accessToken) {
          response.cookie('accessToken', data.accessToken, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'strict',
            maxAge: 15 * 60 * 1000, // 15 minutes
            path: '/',
          });
          
          // Remove token from response body for security
          delete data.accessToken;
        }
        
        if (data.refreshToken) {
          response.cookie('refreshToken', data.refreshToken, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'strict',
            maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
            path: '/',
          });
          
          // Remove token from response body for security
          delete data.refreshToken;
        }
        
        return data;
      }),
    );
  }
}
