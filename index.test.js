const { createLoginTracker } = require("./index");

describe("Login Tracker", () => {
  test("grants access with correct password", () => {
    const tracker = createLoginTracker({ Password: "Password123" });
    expect(tracker.passwordAttempts("Password123")).toBe("Access granted");
  });

  test("denies access with wrong password", () => {
    const tracker = createLoginTracker({ Password: "Password123" });
    expect(tracker.passwordAttempts("wrong")).toBe("Access denied");
  });

  test("returns error on empty input", () => {
    const tracker = createLoginTracker({ Password: "Password123" });
    expect(tracker.passwordAttempts("")).toBe("Error invalid attempt");
  });

  test("locks after 3 failed attempts", () => {
    const tracker = createLoginTracker({ Password: "Password123" });
    tracker.passwordAttempts("wrong");
    tracker.passwordAttempts("wrong");
    tracker.passwordAttempts("wrong");
    expect(tracker.passwordAttempts("wrong")).toBe("Too many attempts account locked.");
  });
});