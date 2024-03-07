import { Request, Response } from "express";
import { UserService } from "../services/userService";

export class UserController {
  CreateUser(req: Request, res: Response) {
    const userService = new UserService();
    const user = req.body;
    if (!user || !user.name || !user.email)
      return res
        .status(400)
        .json({ message: "Bad Request: Dados do usuario inválidos" });
    userService.createUser(user.name, user.email);
    return res.status(201).json({ message: "Usuário Criado" });
  }

  GetAllUsers = (req: Request, res: Response) => {
    const userService = new UserService();
    const users = userService.getAllUsers();
    return res.status(200).json({ users: users });
  };

  GetUserByEmail = (req: Request, res: Response) => {
    const userService = new UserService();
    const { email } = req.body;
    console.log(" email dentro do controlador ",email);
    const user = userService.getUserByEmail(email);
    return res.status(200).json({ user: user });
  };
}
