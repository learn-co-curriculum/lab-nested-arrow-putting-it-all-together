




// Create outer function
function createLoginTracker(userInfo) {
  // Start attempt count
  let attemptCount = 0;

  // Create inner arrow function
  const loginAttempt = (passwordAttempt) => {
    // Increase count on every login attempt
    attemptCount++;

    // Check if account is locked
    if (attemptCount > 3) {
      return "Account locked due to too many failed login attempts";
    }

    // Check if password matches
    if (passwordAttempt === userInfo.password) {
      return "Login successful";
    } else {
      return `Attempt ${attemptCount}: Login failed`;
    }
  };

  // Return inner arrow function
  return loginAttempt;

}
module.exports = {
  ...(typeof createLoginTracker !== 'undefined' && { createLoginTracker })
};
