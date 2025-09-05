import express from "express";
import { fetchUsers, addUser, editUser, removeUser } from "../controllers/userController.js";

const router = express.Router();

router.get("/", fetchUsers);      // GET /users
router.post("/", addUser);        // POST /users
router.put("/:id", editUser);     // PUT /users/:id
router.delete("/:id", removeUser); // DELETE /users/:id

export default router;
