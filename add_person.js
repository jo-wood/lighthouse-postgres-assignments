const settings = require("./settings"); // settings.json
const knex = require("knex")({
  client: 'pg',
  connection: {
    user: settings.user,
    password: settings.password,
    database: settings.database,
    host: settings.hostname,
    port: settings.port
  }
});


const firstName = process.argv[2];
const lastName = process.argv[3];
const bDate = new Date(process.argv[4]); // need in YYYY-MM-DD form

knex('famous_people')
.insert({
  first_name: firstName,
  last_name: lastName,
  birthdate: bDate
})
.then(() => {
  return knex('famous_people')
})
.then(res => {console.log(res)})
.then(() => {
  console.log("Close Connection")
  knex.destroy()
})


//** KEEP PROMISE NOTES FROM HESHAM BELOW */

// function insert() {
//   return new Promise((resolve, reject) => {
//     connectToDatabase() // takes 5 seconds
//     const res = insertINtoDatabase() // takes 1 second
//     breakConnection() //takes 0.5s
//     resolve(res)
//   })
// }

// Promise.then()
// Promise.then()
// Promise.then()

// class Promise {
//   const shitToDoWhenImDone = [retKnexFamousPeople, consoleLogRes, destroyKnex]

//   function then(newShit) {
//     shitToDoWhenImDone.push(newShit)
//     if (newShit returns a promise)
//          return that promise 
//        else 
//     return this 
//   }

//   function resolve(originalArg) {
//     const argToPass = undefined
//     for (shitToDo in shitToDoWhenImDone) {
//       argToPass = destroyKnex(undefined)
//     }
//   }
// }

//** DELETE from table */

// const firstName = process.argv[2];
// const lastName = process.argv[3];
// const bDate = new Date(process.argv[4]); // need in YYYY-MM-DD form

// knex('famous_people')
//   .whereIn('last_name', ['Roberts']).del()
//   .insert({
//     first_name: firstName,
//     last_name: lastName,
//     birthdate: bDate
//   })
//   .then(() => {
//     return knex('famous_people')
//   })
//   .then(res => {
//     console.log(res)
//   })
//   .then(() => {
//     console.log("Close Connection")
//     knex.destroy()
//   })