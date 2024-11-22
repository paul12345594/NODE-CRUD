import express from 'express'
import bodyParser from 'body-parser'

import usersRoutes from './routes/users.js';

const app = express ();
const PORT = 5000; 

app.use(bodyParser.json());    //JavaScript Object Notation   ===== DOUBLE QUOTATION MARKS

app.use('/users', usersRoutes)


app.get('/', (req, res) => res.send('HELLO WELCOME TO THE HANN.'))    //VISITOR of this '/' 

app.listen(PORT, () => console.log(`Server running on port: http://localhost:${PORT}`));











