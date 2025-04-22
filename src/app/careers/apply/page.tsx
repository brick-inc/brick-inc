'use client'

import { useSearchParams } from 'next/navigation'
import Image from "next/image"
import Link from "next/link"
import CareerForm from "../../components/CareerForm"
import Footer from "../../components/Footer"
import { Suspense } from 'react'

function ApplyPageContent() {
  const searchParams = useSearchParams()
  const position = searchParams.get('position')
  
  // Format position title (convert from URL format)
  const formatPosition = (pos: string | null) => {
    if (!pos) return 'Job'
    return pos
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ')
  }

  return (
    <div className="w-full min-h-screen flex flex-col">
      <div className="mx-auto flex w-full max-w-4xl flex-col px-4 py-8">
        <div className="mb-8">
          <Link href="/" className="flex items-center gap-2 mb-12">
            <Image src="/next.svg" alt="Brick Logo" width={30} height={30} />
            <span className="text-2xl font-sans font-bold">Brick</span>
          </Link>
          
          <Link 
            href="/careers"
            className="text-sm text-muted-foreground hover:text-foreground font-sans mb-2 inline-block"
          >
            ← Back to careers
          </Link>
          
          <h1 className="text-3xl font-bold font-sans mb-2">
            Apply for {formatPosition(position)}
          </h1>
          
          <p className="text-muted-foreground font-sans mb-6">
            We&apos;re excited to learn more about you. Please fill out the form below to apply.
          </p>
        </div>
        
        <div className="bg-card p-6 rounded-lg shadow-sm">
          <CareerForm position={position || undefined} />
        </div>
      </div>
      
      <div className="mt-auto">
        <Footer />
      </div>
    </div>
  )
}

export default function ApplyPage() {
  return (
    <Suspense fallback={
      <div className="w-full h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-xl font-sans">Loading application form...</p>
        </div>
      </div>
    }>
      <ApplyPageContent />
    </Suspense>
  )
} 