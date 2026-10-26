// Lab: JavaScript Functions - login tracker using closures + arrow functions
 
const MAX_ATTEMPTS = 3;
function createLoginTracker(userInfo) {
  // attemptCount lives in the outer function's scope. Only the inner
  // arrow function (closure) can read or change it, so nothing outside
  // can reset or tamper with it.
  let attemptCount = 0;
const loginAttempt = (passwordAttempt) => {
    // Count every call, including ones made after the account is locked
    attemptCount++;
 
    // Locked: more than 3 attempts have been made
    if (attemptCount > MAX_ATTEMPTS) {
      return "Account locked due to too many failed login attempts";
    }
 
    // Correct password within the allowed attempts
    if (passwordAttempt === userInfo.password) {
      return "Login successful";
    }
 
    // Wrong password, still within the allowed attempts
    return `Attempt ${attemptCount}: Login failed`;
  };
    // Error handling (attempts): anything that isn't a string (undefined,
    // null, numbers, etc.) is treated as a failed login instead of crashing
    if (typeof passwordAttempt !== "string") {
      return `Attempt ${attemptCount}: Login failed`;
    }
 
  return loginAttempt;
}
module.exports = {
  ...(typeof createLoginTracker !== 'undefined' && { createLoginTracker })
};
