import express from 'express'
import { v4 as uuidv4 } from 'uuid';
uuidv4(); // ⇨ '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'

const router = express.Router();

const users = [];
/*[
{
    "firstName": "Paul",
    "lastName": "Dungca",
    "age": 22
},
{
    "firstName": 'Franz Jomar',
    lastName: 'Dungca',
    "age" : 23
},
{
    firstName: 'Angel Cyril',
    lastName: 'Dungca',
    "age" : 15
},
    {
        firstName: "Gabriel",
        lastName: "Dungca",
        age: 17
    }
    ]
*/


// all routes in here are starting with (--/--) users
router.get('/', (req,res) => {
    console.log(users);

    res.send(users);
});

router.post('/', (req, res) => {
    const user = req.body;

    //const userId = uuidv4(); // ⇨ '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'
    //const userWithId = { ...user, id: uuidv4() }
    //users.push(user); // PUSH METHOD
    users.push({ ...user, id: uuidv4() });


    res.send(`User with the name ${user.firstName} added to the database!`);                 // It send to the client side 
})

export default router; 

//30:07


