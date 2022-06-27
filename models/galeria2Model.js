var pool = require('./bd');

// sirve para listar las imagenes
async function getGaleria2() {
    var query = 'select * from galeria2';
    var rows = await pool.query(query);
    return rows;
}

//Para borrar galeria2
async function deleteGaleria2ById(id) {
    var query = 'delete from galeria2 where id =?';
    var rows = await pool.query(query, [id]);
    return rows;
}

//Para agregar galeria2
async function insertGaleria2(obj) {
    try {
        var query = 'insert into galeria2 set ?';
        var rows = await pool.query(query, [obj]);
        return rows;

    } catch (error) {
        console.log(error);
        throw error;
    }
}

// Traer galeria para modificar
async function getGaleria2ById(id) {
    var query = 'select * from galeria2 where id=?';
    var rows = await pool.query(query, [id]);
    return rows[0];
}

// update galeria2
async function modificarGaleria2ById(obj, id) {
    try {
        var query = 'update galeria2 set ? where id=?';
        var rows = await pool.query(query, [obj, id]);
        return rows;

    } catch (error) {
        console.log(error);
        throw error;
    }
}

module.exports = {
    getGaleria2,
    deleteGaleria2ById,
    insertGaleria2,
    getGaleria2ById,
    modificarGaleria2ById
}