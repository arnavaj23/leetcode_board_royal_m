"use client"
import ExcalidrawWrapper from "@/components/excalidraw"
import { ProfileForm } from "@/components/custom/lc-form"
import { string } from "zod"
import { useParams, useRouter } from "next/navigation"
import { useEffect } from "react"

export default function Home() {
  const router = useRouter()
  const { ProblemID } = useParams()

  useEffect(() => {
    if (typeof ProblemID === "string") {
      document.title = "PB " + ProblemID
      console.log(ProblemID + " wrapper")
    }
  }, [ProblemID])
  return (
    <div className=" relative z-40 flex">
      <ExcalidrawWrapper />
    </div>
  )
}
