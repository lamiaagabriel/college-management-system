import mysql from "mysql2/promise"
import dotenv from "dotenv";

dotenv.config();

// Database Connection
export const pool = mysql.createPool(process.env.DATABASE_URL);
import { findMany, findOne } from "./_read.js"
import { createOne } from "./_create.js"
import { deleteOne } from "./_delete.js"
import { updateOne } from "./_update.js"

const db = { findMany, findOne, createOne, updateOne, deleteOne }

export default db
