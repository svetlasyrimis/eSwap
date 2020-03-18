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
            name: 'Salad',
            description: 'Salad description',
            link: 'https://images.pexels.com/photos/5938/food-salad-healthy-lunch.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
            user_id: user1[0].username
        },
        {
            name: 'Car',
            description: 'Car description',
            link: 'https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
            user_id: user2[0].username
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
