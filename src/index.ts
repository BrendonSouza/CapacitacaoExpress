import { AppDataSource } from './db_connection';
import "reflect-metadata"
import express from "express";

import { router } from "./routes";

const app = express();
const port = 3000;

AppDataSource.initialize()
  .then(() => {
    console.log("Database connected");
  })
  .catch((error) => console.log(error));

app.use(router)
app.use(express.json());

app.listen(port, () => {
  console.log(`Server is run in ${port}`);
});
