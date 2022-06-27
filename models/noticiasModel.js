var pool = require('./bd');

// sirve para listar las noticias
async function getNoticias() {
    var query = 'select * from noticias';
    var rows = await pool.query(query);
    return rows;
}

//Para borrar noticias
async function deleteNoticiasById(id) {
    var query = 'delete from noticias where id =?';
    var rows = await pool.query(query, [id]);
    return rows;
}

//Para agregar noticias
async function insertNoticias(obj) {
    try {
        var query = 'insert into noticias set ?';
        var rows = await pool.query(query, [obj]);
        return rows;

    } catch (error) {
        console.log(error);
        throw error;
    }
}

// Traer noticias para modificar
async function getNoticiasById(id) {
    var query = 'select * from noticias where id=?';
    var rows = await pool.query(query, [id]);
    return rows[0];
}

// update noticias
async function modificarNoticiasById(obj, id) {
    try {
        var query = 'update noticias set ? where id=?';
        var rows = await pool.query(query, [obj, id]);
        return rows;

    } catch (error) {
        console.log(error);
        throw error;
    }
}

module.exports = {
    getNoticias,
    deleteNoticiasById,
    insertNoticias,
    getNoticiasById,
    modificarNoticiasById
}