"use client"

import { useEffect } from "react"

export default function DemoPage() {
  useEffect(() => {
    // Load the Typeform embed script
    const script = document.createElement("script")
    script.src = "//embed.typeform.com/next/embed.js"
    script.async = true
    document.body.appendChild(script)

    return () => {
      // Cleanup script when component unmounts
      document.body.removeChild(script)
    }
  }, [])

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Typeform Embed Section */}
      <section className="py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl shadow-sm overflow-hidden" style={{ minHeight: "600px" }}>
            <div data-tf-live="01JWQBK9Q7Y0RVGQD8Q391P8DD" style={{ width: "100%", height: "600px" }}></div>
          </div>
        </div>
      </section>
    </div>
  )
}
