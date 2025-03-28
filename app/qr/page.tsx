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
      // Use QRServer.com API to generate a QR code (Google Charts API is deprecated)
      const encodedUrl = encodeURIComponent(url)
      setQrCodeUrl(`https://api.qrserver.com/v1/create-qr-code/?data=${encodedUrl}&size=300x300`)
    }
  }, [url])

  const handlePrint = () => {
    window.print()
  }

  return (
    <div className="flex flex-col items-center min-h-screen p-4">
      <h1 className="mb-6 text-2xl sm:text-3xl font-bold text-primary text-center">QR Code Generator</h1>
      
      <div className="w-full max-w-md p-4 sm:p-6 bg-white rounded-lg shadow-md">
        <div className="mb-5">
          <label htmlFor="url" className="block mb-2 text-base font-medium text-gray-700">
            URL for QR Code
          </label>
          <input
            type="text"
            id="url"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            className="w-full px-3 py-3 text-base border border-gray-300 rounded-md focus:outline-none focus:ring-primary focus:border-primary"
          />
        </div>
        
        {qrCodeUrl && (
          <div className="mt-6 text-center">
            <div className="p-4 bg-white">
              <img 
                src={qrCodeUrl} 
                alt="QR Code" 
                className="mx-auto max-w-full h-auto"
              />
              <p className="mt-3 text-base text-gray-500">Scan me to notify your team!</p>
            </div>
            
            <button
              onClick={handlePrint}
              className="mt-5 w-full sm:w-auto px-6 py-3 text-base font-medium text-white bg-primary rounded-md hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
            >
              Print QR Code
            </button>
          </div>
        )}
      </div>
    </div>
  )
} 