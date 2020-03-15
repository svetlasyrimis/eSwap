const db = require('../db')
const Item = require('../models/item')
const User = require('../models/user')
db.on('error', console.error.bind(console, 'MongoDB connection error:'))
const faker = require('faker')
const main = async () => {
    const user1 = await User.find({ username: 'Joe'})
    const user2 = await User.find({ username: 'Schmo'})
//this only uses user1...testing
    // const items = [...Array(100)].map(item => (
    const items = [
        {
            name: faker.lorem.word(),
            description: faker.lorem.sentence(),
            link: faker.lorem.sentence(),
            user_id: user1._id
        },
        {
            name: faker.lorem.word(),
            description: faker.lorem.sentence(),
            link: faker.lorem.sentence(),
            user_id: user2._id
        }
      ]

    await Item.insertMany(items)
    console.log("Created items!")
}

const run = async () => {
    await main()
    db.close()
}

run()
