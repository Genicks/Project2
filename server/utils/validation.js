const { findUser } = require("./database");
const bcrypt = require("bcrypt");

// Functions will take username and password validate against database and return boolean and potentially JWT
async function valid(username, password) {
  const response = await findUser(username);
  if (!response || response.length === 0) return false;

  for (let i = 0; i < response.length; i++) {
    const match = await bcrypt.compare(password, response[i].Password);
    if (match) {
      console.log("Password matches!");
      return true;
    }
  }

  console.log("Password does not match.");
  return false;
}

module.exports = { valid };
