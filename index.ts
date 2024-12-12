import express, { Request, Response } from "express";
import dotenv from "dotenv";
import { userRouter } from "./users";
import { errorHandler } from "./middlewares/error.middleware";
import { authGuard } from "./middlewares/auth.middleware";

// configures dotenv to work in your application
dotenv.config();
const app = express();
const PORT = process.env.PORT;

app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use(authGuard);
app.use(errorHandler);

// router should be /users
app.use('/', userRouter);


app.get("/", (request: Request, response: Response) => { 
  response.status(200).send("Hello World");
}); 

app.listen(PORT, () => { 
  console.log("Server running at PORT: ", PORT); 
}).on("error", (error) => {
  // gracefully handle error
  throw new Error(error.message);
});