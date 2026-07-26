import React from 'react'
import {Zap} from "lucide-react"

const Logo = () => {
  return (
      <div className="flex items-center gap-4">
      <div className="bg-lime-400 p-3 rounded-2xl">
        <Zap className="w-7 h-7 text-black fill-black" />
      </div>

      <h1 className="text-5xl font-bold text-white">
        Sky<span className="text-lime-400">Mart</span>
      </h1>
    </div>
  )
}

export default Logo
