const createLoginTracker = () => {
    const correctUsername = "admin";
    const correctPassword = "1234";
    let attempts = 0;
    const maxAttempts = 3;

    return (username, password) => {
        if (attempts >= maxAttempts) {
            return "Account locked due to too many failed login attempts";
        }

        if (username === correctUsername && password === correctPassword) {
            return "Login successful";
        } else {
            attempts++;
            return `Attempt ${attempts}: Login failed`;
        }
    };
};

const login = createLoginTracker();

console.log(login("wrong", "pass")); 
console.log(login("wrong", "pass")); 
console.log(login("admin", "1234")); 
console.log(login("wrong", "pass")); 
console.log(login("wrong", "pass")); 



module.exports = {
  ...(typeof createLoginTracker !== 'undefined' && { createLoginTracker })

};
