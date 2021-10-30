// Update with your config settings.
const knex = require("knex");
const config = {
  development: {
    client: 'sqlite3',
    connection: {
      filename: './data/client-msj'
    },
    pool:{min:2,max:8},
    useNullAsDefault: true,
  },
}
const db = knex(config.development);

module.exports = db;