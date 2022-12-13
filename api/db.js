import mysql from "mysql"

export const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "20243576808690Ti@",
    database: "crud"
})