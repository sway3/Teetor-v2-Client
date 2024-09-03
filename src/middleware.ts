import { NextRequest, NextResponse } from 'next/server';

export async function middleware(request: NextRequest) {
  try {
    const response = await fetch('http://localhost:3001/v2/auth', {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
        Cookie: request.headers.get('cookie') || '',
      },
    });

    if (response.ok) {
      if (request.nextUrl.pathname === '/') {
        return NextResponse.redirect(new URL('/dashboard', request.url));
      }

      console.log('Authenticated successfully, allowing access');
      return NextResponse.next();
    }

    if (request.nextUrl.pathname !== '/') {
      console.log('User not authenticated, redirecting to login...');
      return NextResponse.redirect(new URL('/', request.url));
    } else {
      return NextResponse.next();
    }
  } catch (error) {
    return NextResponse.redirect(new URL('/', request.url));
  }
}

export const config = {
  matcher: ['/', '/dashboard'],
};
