import { pool as db } from "./index.js"

export const findMany = async ({
  select = "*",
  table, // students | courses | professors
  where, // { id: string, ... } optional
}) => {
  const query = `SELECT ${select} FROM ${table}${
    where ? ` WHERE ${Object.keys(where).join(" = ?,")} = ?` : ""
  };`

  try {
    const [results] = await db.query(
      query,
      where ? Object.values(where) : undefined
    )

    return results
  } catch (err) {
    console.log(err.message)
    throw Error("Error in finding data within Database.")
  }
}

export const findOne = async ({
  select = "*",
  table, // students | courses | professors
  where, // { id: string, ... } optional
}) => {
  try {
    const results = await findMany({ select, table, where })
    return Array.isArray(results) && results.length === 1 ? results[0] : null
  } catch (err) {
    console.log(err.message)
    throw Error("Error in finding data within Database.")
  }
}
