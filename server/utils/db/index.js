import mysql from "mysql2/promise"

// Database Connection
export const pool = mysql.createPool(
  'mysql://ileucuvts7frv8w2vwl6:pscale_pw_IM5K6sBJHChVUvgd0VIoWJknK6nhbxDVpF6HjQWdb2v@aws.connect.psdb.cloud/collegesystem?ssl={"rejectUnauthorized":true}'
);

import { findMany, findOne } from "./_read.js"
import { createOne } from "./_create.js"
import { deleteOne } from "./_delete.js"
import { updateOne } from "./_update.js"

const db = { findMany, findOne, createOne, updateOne, deleteOne }

export default db
