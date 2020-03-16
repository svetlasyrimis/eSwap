const db = require('../db')
const Item = require('../models/item')
const User = require('../models/user')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))
const faker = require('faker')
const main = async () => {
    const user1 = await User.find({ username: 'Joe'})
    const user2 = await User.find({ username: 'Schmo'})
    const items = [
        {
            name: faker.commerce.product(),
            description: faker.lorem.sentence(),
            link: faker.internet.url(),
            user_id: user1[0]._id
        },
        {
            name: faker.commerce.product(),
            description: faker.lorem.sentence(),
            link: faker.internet.url(),
            user_id: user2[0]._id
        }
      ]

    await Item.insertMany(items)
    console.log("Created items!")
    console.log(user1[0]._id);
    console.log(user2[0]._id);
}

const run = async () => {
    await main()
    db.close()
}

run()
