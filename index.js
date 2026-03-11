function createLoginTracker(userInfo) {
  let attemptCount = 0;

  return (loginAttempt) => {
    attemptCount++;

    if (attemptCount > 3) {
      return "Account locked";
    }

    if (
      loginAttempt.username === userInfo.username &&
      loginAttempt.password === userInfo.password
    ) {
      return "Login successful";
    } else {
      return "Invalid credentials";
    }
  };
}
module.exports = {
  ...(typeof createLoginTracker !== 'undefined' && { createLoginTracker })
};
