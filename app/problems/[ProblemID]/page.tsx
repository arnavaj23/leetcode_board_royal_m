import ExcalidrawWrapper from "@/components/excalidraw"
import { ProfileForm } from "@/components/custom/lc-form"
import { string } from "zod"
export default function Home() {
  return (
    <div className=" relative z-40 flex">
      <ExcalidrawWrapper />
    </div>
  )
}
