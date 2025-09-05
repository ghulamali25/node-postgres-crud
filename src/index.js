import express from "express";
import dotenv from "dotenv";
import userRoutes from "./routes/userRoutes.js";
import pool from "./config/db.js";

dotenv.config();
const app = express();

app.use(express.json());

// test DB connection
pool.query("SELECT NOW()", (err, res) => {
  if (err) console.error("❌ DB Connection Error:", err);
  else console.log("✅ DB Connected:", res.rows[0]);
});

// routes
app.use("/users", userRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
