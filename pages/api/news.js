export default async (req, res) => {
  const url = "";
  const response = await fetch(url);
  const json = await response.json();

  return res.status(200).json({json});
}
