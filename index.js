import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();

const port = 5000;

app.get("/", (rq, res) => {
  const d = new Date("June 26, 2023 11:13:00");
  const day = d.getDay();
  console.log(day);

  let type = "weekday";
  let Advice = "Its time to work Siddharth";
  if (day === 0 || day === 6) {
    type = "Weekend";
    Advice = "Its time to enjoy Siddharth";
  }
  res.render("index.ejs", { type: type, Advice: Advice });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
// adding this to anothetr repo
