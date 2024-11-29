const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/students-api', {
    // Use the new server discovery and monitoring engine
})
.then(() => {
    console.log('Connection successful');
})
.catch((error) => {
    console.log('Connection unsuccessful:', error);
});
