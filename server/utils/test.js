const bcyrpt = require('bcrypt')

bcyrpt.hash("pass", 10, (err, result) => {
  if (err) throw err;
  console.log("Hashed password:", result);
});