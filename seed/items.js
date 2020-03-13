const db = require('../db')
const Item = require('../models/item')
const User = require('../models/user')
db.on('error', console.error.bind(console, 'MongoDB connection error:'))
const main = async () => {
///	try{
    //const user1 = await User.find({ username: 'Lia'})
	  //const user2 = await User.find({username:'Pink'})
    //console.log('user1', user1)
	  //console.log('user2', user2)
    //const items = ([
		//	{ username: 'Lia', user_id: user1[0]._id}
		//],
   // await db.Item.insertMany(items())
    //console.log("Created items!")
	//	)} catch(error){
//	console.log(error)
	}
}

const run = async () => {
    await main()
    db.close()
}
run()
