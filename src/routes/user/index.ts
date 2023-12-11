import express from "express";

import { userCreate } from "./UserCreate";

const router = express.Router();

router.post("/register", userCreate);

export const UserController = router;
