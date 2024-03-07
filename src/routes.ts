import { Router } from "express";
import { Request, Response } from "express";
import { UserController } from "./controller/UserController";
export const router = Router();

const userController = new UserController();

router.post("/user", userController.CreateUser);

router.get("/GetAllUsers", userController.GetAllUsers);
router.get("/GetUserByEmail", userController.GetUserByEmail);
router.delete("/user", (req: Request, res: Response) => {
  const user = req.body;
  console.log(user);
  return res.status(200).json({ message: "Usuario deletado com sucesso" });
});
