<<<<<<< HEAD


=======
function createLoginTracker(userinfo) {
  let attempts = 0;
 
  function passwordAttempts(attempt) {
        if (attempts >= 3) {
          return "Too many attempts account locked.";
        }
          // no input provided, user just presses enter
          if (!attempt) {
            return "Error invalid attempt";
          }
          attempts++;
          if (attempt === userinfo.Password){
              return "Access granted";
          } else { 
            return "Access denied";
          }
        }


  return {
     Username : "user1",
     Password : "Password123",
     passwordAttempts
  };
}
>>>>>>> feature-branch

module.exports = {
  ...(typeof createLoginTracker !== 'undefined' && { createLoginTracker })
};