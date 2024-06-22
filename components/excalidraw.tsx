"use client"
import {
  Excalidraw,
  convertToExcalidrawElements,
  WelcomeScreen,
} from "@excalidraw/excalidraw"
import { Image } from "lucide-react"
import { Children } from "react"

// import "@excalidraw/excalidraw/index.css"

const ExcalidrawWrapper: React.FC = () => {
  return (
    <div style={{ height: "100vh", width: "100vw" }}>
      <Excalidraw>
        <WelcomeScreen></WelcomeScreen>
      </Excalidraw>
    </div>
  )
}
export default ExcalidrawWrapper
