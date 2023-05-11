import { pool as db } from "./index.js"

export const deleteOne = async ({
  table, // students | courses | professors
  where, // { id: string, ... }
}) => {
  const query = `DELETE FROM ${table} WHERE ${Object.keys(where).join(
    " = ?,"
  )} = ?`

  try {
    const [results] = await db.query(query, Object.values(where))

    return results?.affectedRows
      ? `${results?.affectedRows} record(s) Deleted Successfully.`
      : `Already Deleted.`
  } catch (err) {
    console.log(err.message)
    throw Error("Error in deleting data within Database.")
  }
}
