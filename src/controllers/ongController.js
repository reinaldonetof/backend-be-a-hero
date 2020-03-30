const connection = require("../database/connection");
const crypto = require("crypto");

async function createOng(req, res) {
  const { name, email, whatsapp, city, uf } = req.body;

  const id = crypto.randomBytes(4).toString("HEX");

  await connection("ongs").insert({
    id,
    name,
    email,
    whatsapp,
    city,
    uf
  });
  return res.json({ id });
}

async function listOngs(req, res) {
  const ongs = await connection("ongs").select("*");

  return res.json(ongs);
}

module.exports = {
  createOng,
  listOngs
};