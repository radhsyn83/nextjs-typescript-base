import { authRoutes, protectedRoutes } from '@/routes';
import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  const token = request.cookies.get('token')?.value;

  if (protectedRoutes.includes(request.nextUrl.pathname) && !token) {
    const response = NextResponse.redirect(new URL('/login', request.url));
    return response;
  }

  if (authRoutes.includes(request.nextUrl.pathname) && token) {
    return NextResponse.redirect(new URL('/', request.url));
  }
}
