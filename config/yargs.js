const descripcion = {
    demand: true,
    alias: "d",
    desc: "Descripcion de la tarea por hacer"
}

const completado = {
    alias: "c",
    default: true,
    desc: "Marca como completado o pendiente la tarea",
}

const argv = require("yargs")
    .command("crear", "Crear un elemento por hacer", {
        descripcion
    })
    // .command("listar", "Listar todos los elementos por hacer", )
    .command("actualizar", "Actualiza un elemento por hacer", {
        descripcion,
        completado
    })
    .command("borrar", "Elimina un elemento por hacer", {
        descripcion
    })
    .help().argv;

module.exports = {
    argv
};