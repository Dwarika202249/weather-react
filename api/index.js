module.exports = (req, res) => {
  res.status(200).send(`Hello ${req} ${req.query}!`)
}
