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


 //** check if lastName exists


// // const subquery = knex('famous_people').where({ first_name: firstName, last_name: lastName })

// knex('famous_people')
//     .whereIn('last_name', [lastName])
//     .then(result => {
//       console.log(result[0])
//       return result;      
//     })
//     .catch(() => {
//       console.log(`No records of: ${lastName}`)
//     })
//     .then(() => knex.destroy());


 //** print each row of table:

// knex('famous_people')
//   .then(result => {
//     result.forEach(celeb => console.log(celeb))
//     return result;
//   })
//   .catch((e) => {
//     console.error(e)
//   })
//   .then(() => knex.destroy());


//** print each row of table:

// knex('famous_people')
//     .whereIn('last_name', ['Hanks']).del()
//     .then(
//       knex('famous_people')
//         .insert({first_name: 'Tom', last_name: 'Hanks', birthdate: '1956-08-09' })
//             .then(
//               knex('famous_people')
//               .then(result => {
//                 result.forEach(celeb => console.log(celeb))
//                 return result;
//               }))
//     )

//     .catch(() => console.log('Nope'))
//     .finally(() => knex.destroy());



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
  console.log("hello")
  knex.destroy()
})

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