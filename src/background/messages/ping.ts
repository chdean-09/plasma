import type { PlasmoMessaging } from "@plasmohq/messaging"

const handler: PlasmoMessaging.MessageHandler = async (req, res) => {
  const message = await fetch(
    `https://whitelists-two.vercel.app/api/check-status/${req.body.email}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json"
    }
  })

  const data: {
    whitelisted: boolean,
    message: string
  } = await message.json()

  res.send({
    data
  })
}

export default handler