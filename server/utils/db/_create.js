import { pool as db } from "./index.js"

export const createOne = async ({
  table, // students | courses | professors
  record, // { id: string, ... }
}) => {
  const query = `INSERT INTO ${table}(${Object.keys(record).join(
    ", "
  )}) VALUES (?${Array(Object.keys(record).length).fill("").join(", ?")});`

  try {
    const [results] = await db.query(query, Object.values(record))

    return results?.affectedRows
      ? `${results?.affectedRows} record Inserted Successfully.`
      : `Nothing Inserted.`
  } catch (err) {
    console.log(err)
    throw Error("Error in creating data within Database.")
  }
}
