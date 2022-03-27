const express = require("express");
const pool = require("./db");
const app = express();
const cors = require('cors');
const port = process.env.BACKEND_PORT;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/register", async (req, res) => {
  const { user, pass } = req.body;
  const getUser = await pool.query("SELECT usuario FROM Usuario where usuario = $1::text", [user]);
  if (getUser.rows.length){
    res.json({
      status: 0
    })
    return;
  } else{
    await pool.query("INSERT INTO Usuario(usuario, clave) VALUES ($1::text, $2::text)", [user, pass]);
    res.json({
      status: 1,
      user: user
    })
    return;
  }
});

app.post("/login", async (req, res) => {
  const { user, pass } = req.body;
  const getUser = await pool.query("SELECT id FROM Usuario where usuario = $1::text AND clave = $2::text", [user, pass]);
  if (getUser.rows.length){
    res.json({
      status: 1,
      token: getUser.rows[0].id
    })
    return;
  } else{
    res.json({
      status: 0
    })
    return;
  }
});

app.post("/create", async (req, res) => {
  const { token, title, desc } = req.body;
  const crear = await pool.query("INSERT INTO Todo(user_id, titulo, descrip) VALUES ($1, $2::text, $3::text)", [token, title, desc]);
  res.json({
    status: 1
  })
});

app.post("/delete", async (req, res) => {
  const { token, id } = req.body;
  await pool.query("DELETE FROM Todo WHERE id = $1 AND user_id = $2", [id, token]);
  res.json({
    status: 1
  });
});

app.post("/todos", async (req, res) => {
  const { id } = req.body;
  const getTodo = await pool.query("SELECT id, titulo, descrip FROM Todo WHERE user_id = $1", [id]);
  res.json({
    status: 1,
    data: getTodo.rows
  })
});

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});