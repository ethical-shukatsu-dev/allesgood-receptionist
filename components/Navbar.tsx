'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Navbar() {
  const pathname = usePathname()
  
  const isActive = (path: string) => {
    return pathname === path
  }

  return (
    <nav className="bg-primary text-white p-4">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="text-xl font-bold mb-4 md:mb-0">
          <Link href="/" className="hover:text-gray-200">
            Slack QR Guest Notification
          </Link>
        </div>
        
        <div className="flex space-x-4">
          <Link
            href="/"
            className={`px-3 py-2 rounded-md text-sm font-medium ${
              isActive('/') ? 'bg-primary-dark text-white' : 'hover:bg-opacity-75'
            }`}
          >
            Home
          </Link>
          
          <Link
            href="/qr"
            className={`px-3 py-2 rounded-md text-sm font-medium ${
              isActive('/qr') ? 'bg-primary-dark text-white' : 'hover:bg-opacity-75'
            }`}
          >
            QR Code
          </Link>
          
          <Link
            href="/admin"
            className={`px-3 py-2 rounded-md text-sm font-medium ${
              isActive('/admin') ? 'bg-primary-dark text-white' : 'hover:bg-opacity-75'
            }`}
          >
            Admin
          </Link>
        </div>
      </div>
    </nav>
  )
} 