


module.exports = {
  ...(typeof createLoginTracker !== 'undefined' && { createLoginTracker })
};
function createLoginTracker (user) {
  let attempts = 0;
  let locked = false;
  return (password) => {
    if (locked) {
      return 'Account locked due to too many failed login attempts';
    }
    if (password === user.password) {
      attempts = 0; // reset attempts on successful login
      return 'Login successful';
    } else {
      attempts++;
      if (attempts >= 3) {
        locked = true;
        return 'Account locked due to too many failed login attempts';
      }
      return `Attempt ${attempts}: Login failed`;
    }
  };
}
const mockUser = {
  "username": "user1",
  "password": "password123"
}
const user1Login = createLoginTracker(mockUser);
console.log(user1Login("wrongPassword")); // Attempt 1: Login failed
console.log(user1Login("wrongPassword")); // Attempt 2: Login failed
console.log(user1Login("wrongPassword")); // Attempt 3: Login failed
console.log(user1Login("lastWrongPassword")); // Account locked due to too many failed login attempts
const user1LoginNew = createLoginTracker(mockUser);
console.log (user1LoginNew("password123")); // Login successful
const mockUser2 = {
  "username": "john_smith_24",
  "password": "securePassword"
}
const user2Login = createLoginTracker(mockUser2);
console.log(user2Login("securePassword")); // Login successful
const mockUser3 = {
  "username": "Jane_Smith_4",
  "password": "password45!"
}
const user3Login = createLoginTracker(mockUser3);
console.log(user3Login("wrongpassword")); // Attempt 1: Login failed
console.log(user3Login("password45!")); // Login successful
