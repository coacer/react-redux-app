const express = require('express');
const app = express();

app.get('/api/v1/todos', (req, res) => {
  const todos = [
    {
      id: 1,
      title: "タイトルだお",
      content: "Express簡易サーバーだお",
    },
    {
      id: 2,
      title: "タイトルだおおおおおおおおおおお",
      content: "Express簡易サーバーだおおおおおおおおお",
    },
    {
      id: 3,
      title: "ねむみ",
      content: "ねむねむねねねねねねねねねむむむむむむむむむ",
    },
  ];
  res.header({
    "Access-Control-Allow-Origin": "*"
  });
  res.json(todos);
});
app.listen(8080, () => {
  console.log("starting server...");
});
