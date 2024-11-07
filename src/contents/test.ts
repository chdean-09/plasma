import { sendToBackground } from "@plasmohq/messaging"
import type { PlasmoCSConfig } from "plasmo"
 
export const config: PlasmoCSConfig = {
  matches: ["https://www.youtube.com/"],
  world: "MAIN"
}

console.log("should only run on youtube")