const { Router } = require('express')
const controllers = require('../controllers')
const router = Router()
const restrict = require('../helpers')

router.get('/', (req, res) => res.send('This is root!'))

router.post('/sign-up', controllers.signUp)
router.post('/sign-in', controllers.signIn)
router.post('/change-password', controllers.changePassword)

router.get('/items', controllers.getAllItems)
router.get('/items/:id', controllers.getItemById)
router.post('/items', restrict, controllers.createItem)
router.put('/items/:id', restrict, controllers.updateItem)
router.delete('/items/:id', restrict, controllers.deleteItem)

//user + items
router.get('/users/:user_id/items/:item_id', controllers.getItemByUserId)
router.get('/users/:user_id/items', controllers.getItemsFromUser)
router.get('/users/:id/items', controllers.getItemsFromUser)

//user controllers, may need to edit/delete re: auth;
router.get('/users', controllers.getAllUsers)
router.get('/users/:id', controllers.getUserById)
router.post('/users', restrict, controllers.createUser)
router.put('/users/:id', restrict, controllers.updateUser)
router.delete('/users/:id', restrict, controllers.deleteUser)

module.exports = router
