import express from 'express'
import { createUser, getUsers, getUser, deleteUser, updateUser } from '../controllers/users.js';
//uuidv4(); // ⇨ '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'

const router = express.Router();

//const users = [];  // FOR ADDING ID AND ETC...
//let users = []      // FOR DELETING  THE ID 
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
router.get('/', getUsers);

router.post('/', createUser);
        //const userId = uuidv4(); // ⇨ '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'
    //const userWithId = { ...user, id: uuidv4() }
    //users.push(user); // PUSH METHOD



//   /users/2 => re.params    (id:2)
router.get('/:id', getUser)

router.delete('/:id', deleteUser)

router.patch('/:id', updateUser)
export default router; 

