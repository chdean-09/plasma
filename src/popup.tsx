import { sendToBackground } from "@plasmohq/messaging"
import { CountButton } from "~features/count-button"

import "~style.css"

function IndexPopup() {
  return (
    <div className="flex flex-col items-center justify-center h-16 w-40">
      <button className="rounded w-[80%] bg-slate-300" onClick={async () => {
        const resp: {
          data: {
            whitelisted: boolean,
            message: string
          }
        } = await sendToBackground({
          name: "ping",
          body: {
            email: 'test@test.com'
          }
        })
        console.log(resp.data, 'from button')
      }}>
        hi
      </button>
      <CountButton />
    </div>
  )
}

export default IndexPopup
