const settings = require("./settings"); // settings.json

module.exports = {

  development: {
    client: 'pg',
    connection: {
      user: settings.user,
      password: settings.password,
      database: settings.database,
      host: settings.hostname,
      port: settings.port
    },
    migrations: {
        directory: __dirname + '/knex/migrations',
    },
    seeds: {
      directory: __dirname + '/knex/seeds'
    }
  }
  // staging: {
  //   client: 'postgresql',
  //   connection: {
  //     database: 'my_db',
  //     user:     'username',
  //     password: 'password'
  //   },
  //   pool: {
  //     min: 2,
  //     max: 10
  //   },
  //   migrations: {
  //     tableName: 'knex_migrations'
  //   }
  // },

  // production: {
  //   client: 'postgresql',
  //   connection: {
  //     database: 'my_db',
  //     user:     'username',
  //     password: 'password'
  //   },
  //   pool: {
  //     min: 2,
  //     max: 10
  //   },
  //   migrations: {
  //     tableName: 'knex_migrations'
  //   }
  // }

};
