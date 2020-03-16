const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const User = require('../models/user')
const Item = require('../models/item')
const db = require('../db')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const SALT_ROUNDS = 11
const TOKEN_KEY = 'areallylonggoodkey'

//authentication functions

const signUp = async (req, res) => {
    try {
        const { username, email, password } = req.body
        const password_digest = await bcrypt.hash(password, SALT_ROUNDS)
        const user = await new User({
            username,
            email,
            password_digest
        })

        await user.save()

        const payload = {
            id: user._id,
            username: user.username,
            email: user.email
        }

        const token = jwt.sign(payload, TOKEN_KEY)
        return res.status(201).json({ user, token })
    } catch (error) {
        console.log(
            'You made it to the signUp controller, but there was an error :('
        )
        return res.status(400).json({ error: error.message })
    }
}

const signIn = async (req, res) => {
    try {
        const { username, password } = req.body
        const user = await User.findOne({ username: username })
        if (await bcrypt.compare(password, user.password_digest)) {
            const payload = {
                id: user._id,
                username: user.username,
                email: user.email
            }

            const token = jwt.sign(payload, TOKEN_KEY)
            return res.status(201).json({ user, token })
        } else {
            res.status(401).send('Invalid Credentials')
        }
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
}

const changePassword = async (req, res) => { }

//item functions

const createItem = async (req, res) => {
    try {
        const item = await new Item(req.body)
        await item.save()
        return res.status(201).json(item)
    } catch (error) {
        console.log(error)
        return res.status(500).json({ error: error.message })
    }
}

const getAllItems = async (req, res) => {
    try {
        const items = await Item.find()
        return res.status(200).json({ items })
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

const getItemById = async (req, res) => {
    try {
        const { id } = req.params
        const item = await Item.findById(id)
        if (item) {
            return res.status(200).json({ item })
        }
        return res.status(404).send('Item with the specified ID does not exists')
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

const updateItem = async (req, res) => {
    try {
        const { id } = req.params;
        await Item.findByIdAndUpdate(id, req.body, { new: true }, (err, item) => {
            if (err) {
                res.status(500).send(err);
            }
            if (!item) {
                res.status(500).send('Item not found!');
            }
            return res.status(200).json(item)
        })
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const deleteItem = async (req, res) => {
    try {
        const { id } = req.params;
        const deleted = await Item.findByIdAndDelete(id)
        if (deleted) {
            return res.status(200).send("Item deleted");
        }
        throw new Error("Item not found");
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

//users + items

const getItemByUserId = async (req, res) => {
    try {
        const { user_id, item_id } = req.params
        const item = await Item.findOne({ user_id: user_id, _id: item_id })
        if (item) {
            return res.status(200).json({ item })
        }
        return res.status(404).send('Item with the specified ID does not exists')
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

const getItemsFromUser = async (req, res) => {
    try {
        const { user_id } = req.params
        const items = await Item.find({ user_id: user_id })
        if (items) {
            return res.status(200).json({ items })
        }
        return res.status(404).send('User with the specified ID does not exists')
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

//user functions --- may need to edit this later re: auth
//no unit tests have been written for the below functions yet


const createUser = async (req, res) => {
    try {
        const user = await new User(req.body)
        await user.save()
        return res.status(201).json(user)
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
}

const getAllUsers = async (req, res) => {
    try {
        const users = await User.find()
        return res.status(200).json(users)
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const getUserById = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await User.findById(id)
        if (user) {
            return res.status(200).json(user)
        }
        return res.status(404).send('User with the specified ID does not exist');
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const updateUser = async (req, res) => {
    try {
        const { id } = req.params;
        await User.findByIdAndUpdate(id, req.body, { new: true }, (err, user) => {
            if (err) {
                res.status(500).send(err);
            }
            if (!user) {
                res.status(500).send('User not found!');
            }
            return res.status(200).json(user);
        })
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const deleteUser = async (req, res) => {
    try {
        const { id } = req.params;
        const deleted = await User.findByIdAndDelete(id)
        if (deleted) {
            return res.status(200).send("User deleted");
        }
        throw new Error("User not found");
    } catch (error) {
        return res.status(500).send(error.message);
    }
}


module.exports = {
    signUp,
    signIn,
    changePassword,
    createItem,
    getAllItems,
    getItemById,
    updateItem,
    deleteItem,
    getItemsFromUser,
    getItemByUserId,
    createUser,
    getAllUsers,
    getUserById,
    updateUser,
    deleteUser
}
