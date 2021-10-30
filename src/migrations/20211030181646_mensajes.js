exports.up = function (knex) {
  knex.schema
    .createTable("mensajes", function (table) {
      table.increments("id").primary();
      table.string("name");
      table.string("email", 120);
      table.string("mensaje");
    })
    .then(() => {
      console.log("tabla creada con exito");
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.down = function (knex) {};
