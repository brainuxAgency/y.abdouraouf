'use client'
import { Button } from "../ui/button";



export function MyWork() {
  return (
    <section className=" bg-gradient-to-b flex items-center justify-center from-gray-900 via-[#0f1729] to-gray-900 overflow-hidden  px-6 py-20">
      <div className="container max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 items-center justify-center">
        <div className="space-y-8">
          <h1 className="text-4xl md:text-8xl font-bold text-white leading-tight">
            Mon bijou
          </h1>
          <p className="text-gray-400 font-mono max-w-xl leading-relaxed">
            Le lien en bio tout-en-un dont vous avez besoin ! 🚀 Centralisez votre audience, boostez vos conversions grâce à une collecte de données personnalisable, vendez plus facilement avec des campagnes d’emailing efficaces et analysez vos performances en toute simplicité. 🎯📊
          </p>
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <svg width="100" height="50" viewBox="0 0 100 50" className="text-purple-500">
                <path d="M0 25 Q 50 0, 100 25" fill="none" stroke="currentColor" strokeWidth="2" />
                <polygon points="95,20 100,25 95,30" fill="currentColor" />
              </svg>
              <span className="text-gray-400">Projet saas en cours</span>
            </div>
            <h2 className="text-4xl font-bold text-white">Aylinker</h2>
            <Button className="bg-purple-600 hover:bg-purple-700 text-white rounded-md px-8">View Project</Button>
          </div>
        </div>
        <div className="relative rounded-lg bg-red-500">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full rounded-lg shadow-2xl"
          >
            <source src="/aylinker.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>

        </div>
      </div>
    </section>
  );
}