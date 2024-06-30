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
import { useParams } from "next/navigation"
import { useRouter } from "next/navigation"
import { getFirestore, doc, setDoc, getDoc } from "firebase/firestore"
import { db } from "@/components/FireBase/firebase"

const ExcalidrawWrapper: React.FC = () => {
  console.log("ExcalidrawWrapper")
  const router = useRouter()
  const { ProblemID } = useParams()

  const onchange = async (
    elements: readonly ExcalidrawElement[],
    appState: AppState,
    files: BinaryFiles
  ) => {
    console.log("change")
    const content = serializeAsJSON(elements, appState, files, "local")
    // localStorage.setItem("excalidraw" + ProblemID, content)
    try {
      await setDoc(doc(db, "excalidraw", ProblemID as string), {
        data: content,
      })
      console.log("Data saved to Firestore")
    } catch (error) {
      console.error("Error saving data to Firestore:", error)
    }
  }
  const init_data = async () => {
    // const content = localStorage.getItem("excalidraw" + ProblemID)
    //
    // if (content != null) {
    //   console.log("init data")
    //   return JSON.parse(content)
    // }

    const docref = doc(db, "excalidraw", ProblemID as string)
    const docSnap = await getDoc(docref)
    if (docSnap.exists()) {
      console.log("init data")
      return JSON.parse(docSnap.data().data)
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
