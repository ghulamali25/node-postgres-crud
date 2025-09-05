import { getUsers, createUser } from "../models/userModel.js";

export async function fetchUsers(req, res) {
  try {
    const users = await getUsers();
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

export async function addUser(req, res) {
  try {
    const { name, email } = req.body;
    const newUser = await createUser(name, email);
    res.status(201).json(newUser);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}
