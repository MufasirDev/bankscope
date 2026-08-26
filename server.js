import express from "express";
import cors from "cors";

import {
  accounts,
  availableBanks,
  expenses,
  transactions,
} from "./src/components/data.js";

const app = express();
const port = Number(process.env.PORT || 3000);

app.use(cors());
app.use(express.json());

app.get("/api/health", (_request, response) => {
  response.json({ status: "ok" });
});

app.get("/api/finances", (_request, response) => {
  response.json({ accounts, availableBanks, expenses, transactions });
});

app.listen(port, () => {
  console.log(`FinView API running at http://localhost:${port}`);
});
