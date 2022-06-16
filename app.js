import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

const users = [{
    username: 'bobesponja',
    avatar: "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info"
}];

const tweets = [{
    username: "bobesponja",
    tweet: "eu amo o hub",
    avatar: "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info",
}];


app.post("/sign-up", (req, res) => {
    users.push({
        username: req.body.username,
        avatar: req.body.avatar
    });
    res.send(console.log(users));
    res.send(console.log("OK"));
});

app.post("/tweets", (req, res) => {
    let name = req.body.username
    let currentUser = users.find(element => element.username === name)
    tweets.push({
        username: name,
        tweet: req.body.tweet,
        avatar: currentUser.avatar
    });
    res.send("OK");
});

app.get("/tweets", (req, res) => {
    const last10 = tweets.slice(-10);
    res.send(last10);
})


app.listen(5000);