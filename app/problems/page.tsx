"use client"
import { ProfileForm } from "@/components/custom/lc-form"
import { useEffect } from "react"

export default function Home({ params }: { params: { ProblemID: string } }) {
  useEffect(() => {
    document.title = "LeetCode Board"
    console.log(document.title)
  }, [])
  return (
    <div className="relative flex min-h-screen flex-col justify-center overflow-hidden py-6 sm:py-12">
      <div className="absolute inset-0 bg-[url(/img/grid.svg)] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>

      <div className="relative px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-lg sm:rounded-lg sm:px-10">
        <div className="flex">
          <ProfileForm></ProfileForm>
        </div>
      </div>
    </div>
  )
}
