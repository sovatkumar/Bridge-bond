import React from 'react'
import Image from 'next/image'
import { Card, CardContent } from '../ui/card'

function RegisterCard() {
  return (
    <Card className="container !pb-0 relative h-full rounded-4xl bg-[url('/images/home-page-red-background.png')] bg-no-repeat bg-cover bg-center pt-10 z-10 grid grid-cols-1 md:grid-cols-2 gap-8">
      <CardContent className="flex flex-col justify-start md:gap-y-10 gap-y-7 xl:px-16 lg:py-12 ">
        <h2 className="text-3xl md:text-4xl lg:text-[42px] 2xl:text-7xl text-white font-bold leading-tight text-center md:text-start">
          Now in the station your next adventure
        </h2>
        <button className="max-w-fit bg-white primary-red px-8 py-3 rounded-full font-semibold hover:bg-opacity-90 transition-all text-base md:text-lg flex self-center md:self-start">
          Apply & Register Now
        </button>
      </CardContent>
      <div className="relative w-full h-[300px] lg:h-[400px] 2xl:h-[600px]">
        <Image
          src="/images/station-adventure.png"
          alt="Station Adventure"
          fill
          className="rounded-xl object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>
    </Card>
  )
}

export default RegisterCard