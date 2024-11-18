// import { NextResponse } from 'next/server'
// import { PrismaClient } from '@prisma/client'
// import bcrypt from 'bcryptjs'
// import jwt from 'jsonwebtoken'

// const prisma = new PrismaClient()

// export async function POST(request: Request) {
//   const { email, password } = await request.json()

//   if (!email || !password) {
//     return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
//   }

//   try {
//     const user = await prisma.user.findUnique({ where: { email } })
//     if (!user) {
//       return NextResponse.json({ error: 'User not found' }, { status: 404 })
//     }

//     const isPasswordValid = await bcrypt.compare(password, user.password)
//     if (!isPasswordValid) {
//       return NextResponse.json({ error: 'Invalid password' }, { status: 401 })
//     }

//     const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET!, { expiresIn: '1h' })

//     return NextResponse.json({ token, user: { id: user.id, name: user.name, email: user.email, role: user.role } })
//   } catch (error) {
//     console.error('Login error:', error)
//     return NextResponse.json({ error: 'An error occurred during login' }, { status: 500 })
//   }
// }