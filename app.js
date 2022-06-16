import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());

const users = [{
    username: 'bobesponja',
    avatar: "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info"
}];

const tweets = [{
    username: "bobesponja",
    tweet: "eu amo o hub",
}];


app.post("/sign-up", (req, res) => {
    users.push({
        username: req.body.username,
        avatar: req.body.avatar
    });
    res.send("OK");
});

app.post("/tweets", (req, res) => {
    tweets.push({
        username: req.body.username,
        tweet: req.body.tweet
    });
    res.send("OK");
});

app.get("/tweets", (req, res) => {
    const last10 = tweets.slice(-10);
    res.send(last10);
})


app.listen(5000);