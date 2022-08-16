export default async (req, res) => {
  const url = "https://newsdata.io/api/1/news?apikey=pub_100593ce8fd2dcd7978c6f3a7ca41b79576ac&q=neuroscience"
  const response = await fetch(url)
  const json = await response.json()

  return res.status(200).json({json})
}
