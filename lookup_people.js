const pg = require("pg");
const settings = require("./settings"); // settings.json

const client = new pg.Client({
  user: settings.user,
  password: settings.password,
  database: settings.database,
  host: settings.hostname,
  port: settings.port,
  ssl: settings.ssl
});

client.connect((err) => {
  if (err) {
    return console.error("Connection Error", err);
  }

  const person = process.argv[2];

  client.query("SELECT * FROM famous_people WHERE first_name = $1", [person], (err, result) => {
    if (err) {
      return console.error("error running query", err);
    }

    for (let celeb of (result.rows)){

      let firstName = celeb.first_name;
      let lastName = celeb.last_name;
      let bDate = new Date(celeb.birthdate).toISOString().split('T')[0];
      let result = `- Celeb: ${firstName} ${lastName}, born '${bDate}'`;

      console.log(result);
    }
    

    client.end();
  });
});