import { NextResponse } from 'next/server'
import { auth } from './lib/auth'
import { headers } from 'next/headers'
 
// This function can be marked `async` if using `await` inside
export async function proxy(request) {

    // get session
    const session = await auth.api.getSession({
        headers: await headers()
    })
   
    
    if (session) {
        return NextResponse.next()
    }
    else {
        return NextResponse.redirect(new URL('/signin', request.url))
    }

}
 
export const config = {
  matcher: ['/animals/animal/:path*', '/profile']
}