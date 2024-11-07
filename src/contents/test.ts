import { sendToBackground } from "@plasmohq/messaging"
import type { PlasmoCSConfig } from "plasmo"
 
export const config: PlasmoCSConfig = {
  matches: ["https://www.youtube.com/"],
  world: "MAIN"
}

async function pingMessage() {
  const resp = await sendToBackground({
    name: "ping",
    body: {
      email: "test@email.com"
    },
    extensionId: "5d7f22637eed3d649ce16cd807f08049c762964d@temporary-addon"
  })
  
  console.log(resp)
}
      
pingMessage()