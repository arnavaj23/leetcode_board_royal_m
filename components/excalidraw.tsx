"use client"
import {
  Excalidraw,
  convertToExcalidrawElements,
  WelcomeScreen,
  serializeAsJSON,
} from "@excalidraw/excalidraw"
import Image from "next/image"
import { ExcalidrawElement } from "@excalidraw/excalidraw/types/element/types"
import { AppState, BinaryFiles } from "@excalidraw/excalidraw/types/types"
import { images } from "next/dist/build/webpack/config/blocks/images"
import { type } from "node:os"

const ExcalidrawWrapper: React.FC = () => {
  const onchange = (
    elements: readonly ExcalidrawElement[],
    appState: AppState,
    files: BinaryFiles
  ) => {
    console.log("change")
    const content = serializeAsJSON(elements, appState, files, "local")
    localStorage.setItem("excalidraw", JSON.stringify(content))
  }
  const init_data = () => {
    const content = localStorage.getItem("excalidraw")
    if (content != null) {
      console.log("init data")
      return JSON.parse(content)
    }
  }
  return (
    <div style={{ height: "100vh", width: "100vw" }}>
      <Excalidraw onChange={onchange} initialData={init_data()}>
        <WelcomeScreen>
          <WelcomeScreen.Hints.ToolbarHint></WelcomeScreen.Hints.ToolbarHint>
          <WelcomeScreen.Hints.MenuHint></WelcomeScreen.Hints.MenuHint>
          <WelcomeScreen.Hints.HelpHint></WelcomeScreen.Hints.HelpHint>
          <WelcomeScreen.Center>
            <WelcomeScreen.Center.Logo>
              <Image
                src="https://upload.wikimedia.org/wikipedia/commons/0/0a/LeetCode_Logo_black_with_text.svg"
                alt={"LeetCode"}
                width={458}
                height={111}
              />
            </WelcomeScreen.Center.Logo>
            <WelcomeScreen.Center.Heading>
              Your own canvas
            </WelcomeScreen.Center.Heading>
            <WelcomeScreen.Center.Menu>
              <WelcomeScreen.Center.MenuItemHelp></WelcomeScreen.Center.MenuItemHelp>
            </WelcomeScreen.Center.Menu>
          </WelcomeScreen.Center>
        </WelcomeScreen>
      </Excalidraw>
    </div>
  )
}
export default ExcalidrawWrapper
