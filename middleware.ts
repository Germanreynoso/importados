import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const host = request.headers.get('host') || ''

  // Redirige www.importadostafi.com → importadostafi.com
  if (host.startsWith('www.importadostafi.com')) {
    const url = request.nextUrl.clone()
    url.hostname = 'importadostafi.com'
    return NextResponse.redirect(url, { status: 308 })
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/:path*'],
}
