export { default } from "next-auth/middleware"

export const config = { matcher: ["/dashboard"] }
// you can create all private routes