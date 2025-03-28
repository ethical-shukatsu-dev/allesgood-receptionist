'use client'

import { useState, useEffect } from 'react'

export default function QRCode() {
  const [url, setUrl] = useState('')
  const [qrCodeUrl, setQrCodeUrl] = useState('')

  useEffect(() => {
    // Set the default URL to the current host
    if (typeof window !== 'undefined') {
      setUrl(window.location.origin)
    }
  }, [])

  useEffect(() => {
    if (url) {
      // Use the Google Charts API to generate a QR code
      const encodedUrl = encodeURIComponent(url)
      setQrCodeUrl(`https://chart.googleapis.com/chart?cht=qr&chl=${encodedUrl}&chs=300x300&choe=UTF-8`)
    }
  }, [url])

  const handlePrint = () => {
    window.print()
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <h1 className="mb-8 text-3xl font-bold text-primary">QR Code Generator</h1>
      
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
        <div className="mb-4">
          <label htmlFor="url" className="block mb-2 text-sm font-medium text-gray-700">
            URL for QR Code
          </label>
          <input
            type="text"
            id="url"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-primary focus:border-primary"
          />
        </div>
        
        {qrCodeUrl && (
          <div className="mt-6 text-center">
            <div className="p-4 bg-white">
              <img 
                src={qrCodeUrl} 
                alt="QR Code" 
                className="mx-auto"
              />
              <p className="mt-2 text-sm text-gray-500">Scan me to notify your team!</p>
            </div>
            
            <button
              onClick={handlePrint}
              className="mt-4 px-4 py-2 text-sm font-medium text-white bg-primary rounded-md hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
            >
              Print QR Code
            </button>
          </div>
        )}
      </div>
    </div>
  )
} 