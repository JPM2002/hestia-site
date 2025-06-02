"use client"

import { useEffect } from "react"

export default function DemoPage() {
  useEffect(() => {
    // Load the Typeform embed script
    const typeformScript = document.createElement("script")
    typeformScript.src = "//embed.typeform.com/next/embed.js"
    typeformScript.async = true
    document.body.appendChild(typeformScript)

    // Load Facebook Meta Pixel
    const fbScript = document.createElement("script")
    fbScript.innerHTML = `
      !function(f,b,e,v,n,t,s)
      {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
      n.callMethod.apply(n,arguments):n.queue.push(arguments)};
      if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
      n.queue=[];t=b.createElement(e);t.async=!0;
      t.src=v;s=b.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t,s)}(window, document,'script',
      'https://connect.facebook.net/en_US/fbevents.js');
      fbq('init', '1353521165724090');
      fbq('track', 'PageView');
    `
    document.head.appendChild(fbScript)

    // NoScript fallback (optional for React)
    const noscript = document.createElement("noscript")
    noscript.innerHTML = `
      <img height="1" width="1" style="display:none"
      src="https://www.facebook.com/tr?id=1353521165724090&ev=PageView&noscript=1"/>
    `
    document.body.appendChild(noscript)

    return () => {
      document.body.removeChild(typeformScript)
      document.head.removeChild(fbScript)
      document.body.removeChild(noscript)
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
