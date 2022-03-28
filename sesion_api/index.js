const express = require('express');
const session = require('express-session');
const redis = require('redis');
const connectRedis = require('connect-redis');
const cors = require('cors');
const app = express();
const port = process.env.SESION_API_PORT;

app.use(cors());
app.use(express.json());
app.set('trust proxy', 1);

const RedisStore = connectRedis(session)
const redisClient = redis.createClient({
    host: process.env.REDIS_HOST,
    port: 6379
})
redisClient.on('error', function (err) {
    console.log('Could not establish a connection with redis. ' + err);
});
redisClient.on('connect', function (err) {
    console.log('Connected to redis successfully');
});

app.use(session({
    store: new RedisStore({ client: redisClient }),
    secret: process.env.REDIS_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
        secure: false,
        httpOnly: false,
        maxAge: 1000 * 60 * 10
    }
}))

app.get("/", (req, res) => {
    res.send("HELLO SESION API");
});

app.post("/login", (req, res) => {
    const sess = req.session;
    const { username, password } = req.body
    sess.username = username
    res.end("success")
});

app.post("/logout", (req, res) => {
    req.session.destroy(err => {
        if (err) {
            res.send("SESSION ELIMINADA CON EXITO");
        } else {
            res.send("ERROR BORRANDO SESSION");
        }
    });
});

app.listen(port, () => {
    console.log(`http://localhost:${port}`);
});