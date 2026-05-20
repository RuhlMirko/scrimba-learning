export async function handlePriceUpdate(req, res) {
  res.statusCode = 200

  res.setHeader("Content-Type", "text/event-stream")
  res.setHeader("Cache-Control", "no-cache")
  res.setHeader("Connection", "keep-alive")

  setInterval(() => {
    let newPrice = (Math.random() * 1000 + 1500).toFixed(2)

    res.write(
      `data: ${JSON.stringify({
        event: 'price-update',
        newPrice: newPrice
      })}\n\n`
    )

  }, 3000)

}
