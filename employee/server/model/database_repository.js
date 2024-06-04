const mysql = require('mysql2');
const dotenv = require('dotenv');
dotenv.config();

const pool = mysql.createPool({
    host: '127.0.0.1',
    user: 'root',
    password: '',
    database: 'project',
}).promise()


async function getEmployee() {
    const [rows] = await pool.query(`SELECT * FROM employee`)
    return rows
}


async function create(Fname,Lname,dept) {
    const result = await pool.query(`
    INSERT INTO employee (fname, lname, Department)
    VALUES (?,?,?)
    `, [Fname, Lname, dept])
    return result
}

async function deleteByID(id) {
    const result = await pool.query(`
    DELETE FROM employee
    WHERE ID = ?
    `, [id])
    return result
}

async function updateByID(id, fname, lname, dept) {
    const result = await pool.query(`
    UPDATE employee
    SET fname = '${fname}', lname = '${lname}' , Department = '${dept}'
    WHERE ID = ${id};
    `, [fname], [lname], [dept],  [id]);
    return result
}

module.exports = {
    getEmployee,
    create,
    deleteByID,
    updateByID
};