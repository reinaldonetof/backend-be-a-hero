const connection = require("../database/connection");

async function listIncidentOng(req, res) {
  const ong_id = req.headers.authorization;


  const list = await connection("incidents")
    .select("*")
    .where({
      ong_id
    });

  return res.json(list);
}

module.exports = {
  listIncidentOng
};
