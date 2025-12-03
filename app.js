import expess from "express";
import cors from "cors";
import { server } from "./server.js";

const PORT = 3311;
const app = expess();

app.use(cors());
app.use(expess.json());

app.use("/", server);

app.listen(PORT, () => {
  console.log("Fut a szerver!");
});
