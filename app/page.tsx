import GuestForm from '@/components/GuestForm'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <header className="mb-8 text-center">
        <h1 className="text-3xl font-bold text-primary">Welcome to Our Office</h1>
        <p className="mt-2 text-gray-600">
          Please let us know you've arrived
        </p>
      </header>
      
      <GuestForm />
      
      <footer className="mt-8 text-sm text-gray-500 text-center">
        © {new Date().getFullYear()} Allesgood Inc.
      </footer>
    </div>
  )
} 