import express from 'express'

const router = express.Router();

const users = [
    {
        "firstName": "Paul",
        "lastName": "Dungca",
        "age": 22
    },
    {
        firstName: 'Franz Jomar',
        lastName: 'Dungca',
        "age" : 23
    },
    {
        firstName: 'Angel Cyril',
        lastName: 'Dungca',
        "age" : 15
    }
]

// all routes in here are starting with / users
router.get('/', (req,res) => {
    console.log(users);

    res.send(users);
});

export default router; 
