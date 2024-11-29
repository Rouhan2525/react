const express = require('express');
const app = express();

// Database connection
require('./database/conn');  // Ensure that your MongoDB connection is set up in this file
const User1 = require('./database/user');  // Import the User model

const port = process.env.PORT || 5000;

app.use(express.json());  // Middleware to parse JSON bodies

// POST route to create a new student/user
app.post('/students', async (req, res) => {
  try {
    // Log the incoming request body
    console.log(req.body);
    
    // Create a new User instance with the data from the request body
    const userD = new User(req.body);
    
    // Save the user to the database
    const create = await userD.save();
    
    // Log the saved user and respond with a success message
    console.log(create);
    res.status(201).send(create);  // Respond with the created user and 201 status code
  } catch (error) {
    // Log and respond with an error message if something goes wrong
    console.error(error);
    res.status(400).send(error.message);
  }
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
