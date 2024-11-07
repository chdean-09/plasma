import type { PlasmoMessaging } from "@plasmohq/messaging"

const handler: PlasmoMessaging.MessageHandler = async (req, res) => {
  console.log("Received message", req.body)
  const message = await fetch(
    `https://whitelists-two.vercel.app/api/check-status/test@test.com`, {
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
    whitelisted: true,
    message: "You are whitelisted"
  })
}

export default handler