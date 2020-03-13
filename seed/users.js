const db = require('../db')
const User = require('../models/user')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

// const faker = require('faker')

const main = async () => {

    const users = [
        { username: 'Joe',
          email: 'joe@schmo.com',
          password_digest: 'joeschmo'
        },

        { username: 'Schmo',
          email: 'schmo@joe.com',
          password_digest: 'schmojoe'
        }
      ]

    await User.insertMany(users)
    console.log("Created users!")
}

const run = async () => {
    await main()
    db.close()
}

run()
