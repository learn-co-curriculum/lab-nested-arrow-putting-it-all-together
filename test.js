const { createLoginTracker } = require("./index");

// Create a tracker with the correct password
const tracker = createLoginTracker({ Password: "Password123" });

console.log(tracker.passwordAttempts(""));            // → Error invalid attempt
console.log(tracker.passwordAttempts("wrong"));       // → Access denied
console.log(tracker.passwordAttempts("Password123")); // → Access granted
console.log(tracker.passwordAttempts("wrong"));       // → Access denied
console.log(tracker.passwordAttempts("wrong"));       // → Too many attempts account locked.