import { pool as db } from "./index.js"

export const updateOne = async ({
  table, // students | courses | professors
  values, // { id: string, ... }
  where, // { id: string, ... }
}) => {
  const query = `UPDATE ${table} SET ${Object.keys(values).join(
    " = ?, "
  )} = ? WHERE ${Object.keys(where).join(" = ?,")} = ?;`

  try {
    const [results] = await db.query(query, [
      ...Object.values(values),
      ...Object.values(where),
    ])

    return results?.affectedRows
      ? `${results?.affectedRows} record(s) Updated Successfully.`
      : `Already Updated.`
  } catch (err) {
    console.log(err.message)
    throw Error("Error in updating data within Database.")
  }
}
