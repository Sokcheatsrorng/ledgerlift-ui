// 'use client'

// import { useState, useEffect } from 'react'
// import { useRouter } from 'next/navigation'
// import Link from 'next/link'
// import { Button } from '@/components/ui/button'

// export default function Dashboard() {
//   const [user, setUser] = useState(null)
//   const router = useRouter()

//   useEffect(() => {
//     const token = localStorage.getItem('token')
//     if (!token) {
//       router.push('/login')
//     } else {
//       // Fetch user data
//       fetch('/api/user', {
//         headers: {
//           'Authorization': `Bearer ${token}`
//         }
//       })
//       .then(res => res.json())
//       .then(data => setUser(data))
//       .catch(err => {
//         console.error(err)
//         router.push('/login')
//       })
//     }
//   }, [])

//   if (!user) return <div>Loading...</div>

//   return (
//     <div className="min-h-screen bg-navy-100">
//       <header className="bg-navy-600 text-white shadow">
//         <div className="container mx-auto py-6 px-4">
//           <h1 className="text-3xl font-bold">Dashboard</h1>
//         </div>
//       </header>
//       <main className="container mx-auto py-6 px-4">
//         <div className="bg-white shadow-md rounded-lg p-6">
//           <h2 className="text-2xl font-semibold text-navy-800">Welcome, {user.name}</h2>
//           <p className="mt-2 text-navy-600">Your role: {user.role}</p>
//           {user.role === 'DONOR' && (
//             <div className="mt-6">
//               <h3 className="text-xl font-medium text-navy-700">Your Donations</h3>
//               {/* Add donation list or creation form here */}
//               <Button asChild className="mt-4">
//                 <Link href="/donate" className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded">
//                   Make a New Donation
//                 </Link>
//               </Button>
//             </div>
//           )}
//           {user.role === 'RECIPIENT' && (
//             <div className="mt-6">
//               <h3 className="text-xl font-medium text-navy-700">Donation Requests</h3>
//               {/* Add donation request list or creation form here */}
//               <Button asChild className="mt-4">
//                 <Link href="/request-donation" className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded">
//                   Create Donation Request
//                 </Link>
//               </Button>
//             </div>
//           )}
//           {user.role === 'ADMIN' && (
//             <div className="mt-6">
//               <h3 className="text-xl font-medium text-navy-700">Admin Panel</h3>
//               {/* Add admin controls here */}
//               <Button asChild className="mt-4">
//                 <Link href="/admin/users" className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded">
//                   Manage Users
//                 </Link>
//               </Button>
//             </div>
//           )}
//         </div>
//       </main>
//     </div>
//   )
// }