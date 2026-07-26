import React from 'react'

const StatCard = ({title,subtitle}) => {
  return (
    <div className="flex-1 border border-zinc-700 rounded-3xl py-8 text-center">
      <h2 className="text-4xl font-bold text-lime-400">
        {title}
      </h2>

     <p className="text-zinc-500 mt-2">
        {subtitle}
      </p>

    </div>
  )
}

export default StatCard
