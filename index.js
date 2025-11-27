const createLoginTracker = () => {
    const correctUsername = "admin";
    const correctPassword = "1234";
    let attempts = 0;
    const maxAttempts = 3;

    return (username, password) => {
        if (attempts >= maxAttempts) {
            return "Maximum login attempts exceeded.";
        }

        if (username === correctUsername && password === correctPassword) {
            return "Login successful!";
        } else {
            attempts++;
            return `Login failed. Attempts left: ${maxAttempts - attempts}`;
        }
    };
};

const login = createLoginTracker();

console.log(login("wrong", "pass")); 
console.log(login("wrong", "pass")); 
console.log(login("admin", "1234")); 



module.exports = {
  ...(typeof createLoginTracker !== 'undefined' && { createLoginTracker })

};
