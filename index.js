
// Outer function
const createLoginSystem = () => {
    const attempts = {};
    
    // Arrow function
    return (userInfo) => {
        const {username, password} = userInfo;
        
        attempts[username] = (attempts[username] || 0) + 1;
        
        if (attempts[username] > 3) return "Account locked!";
        if (password === "secret") {
            attempts[username] = 0;
            return "Login successful!";
        }
        return `Wrong! ${3 - attempts[username]} attempts left`;
    };
};

// Usage
const login = createLoginSystem();
console.log(login({username: "john", password: "wrong"}));
console.log(login({username: "john", password: "wrong"}));
console.log(login({username: "john", password: "wrong"}));
console.log(login({username: "john", password: "secret"}));

module.exports = {
  ...(typeof createLoginTracker !== 'undefined' && { createLoginTracker })

};
