var pool = require('./bd');

// sirve para listar las imagenes
async function getGaleria() {
    var query = 'select * from galeria';
    var rows = await pool.query(query);
    return rows;
}

//Para borrar galeria
async function deleteGaleriaById(id) {
    var query = 'delete from galeria where id =?';
    var rows = await pool.query(query, [id]);
    return rows;
}

//Para agregar galeria
async function insertGaleria(obj) {
    try {
        var query = 'insert into galeria set ?';
        var rows = await pool.query(query, [obj]);
        return rows;

    } catch (error) {
        console.log(error);
        throw error;
    }
}

// Traer galeria para modificar
async function getGaleriaById(id) {
    var query = 'select * from galeria where id=?';
    var rows = await pool.query(query, [id]);
    return rows[0];
}

// update galeria
async function modificarGaleriaById(obj, id) {
    try {
        var query = 'update galeria set ? where id=?';
        var rows = await pool.query(query, [obj, id]);
        return rows;

    } catch (error) {
        console.log(error);
        throw error;
    }
}

module.exports = {
    getGaleria,
    deleteGaleriaById,
    insertGaleria,
    getGaleriaById,
    modificarGaleriaById
}