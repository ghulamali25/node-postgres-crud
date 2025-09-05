import { getUsers, createUser, updateUser, deleteUser } from "../models/userModel.js";

// GET all users
export async function fetchUsers(req, res) {
  try {
    const users = await getUsers();
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

// CREATE new user
export async function addUser(req, res) {
  try {
    const { name, email } = req.body;
    const newUser = await createUser(name, email);
    res.status(201).json(newUser);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

// UPDATE user
export async function editUser(req, res) {
  try {
    const { id } = req.params;
    const { name, email } = req.body;
    const updatedUser = await updateUser(id, name, email);
    if (!updatedUser) return res.status(404).json({ error: "User not found" });
    res.json(updatedUser);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

// DELETE user
export async function removeUser(req, res) {
  try {
    const { id } = req.params;
    const deletedUser = await deleteUser(id);
    if (!deletedUser) return res.status(404).json({ error: "User not found" });
    res.json({ message: "User deleted", user: deletedUser });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}
