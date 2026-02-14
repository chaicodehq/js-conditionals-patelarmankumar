/**
 * 🔒 SecureApp Password Checker
 *
 * You're building the signup page for SecureApp, a new productivity tool.
 * The product manager wants a password strength meter that gives users
 * real-time feedback as they type their password.
 *
 * The checker evaluates 5 criteria:
 *   1. At least 8 characters long
 *   2. Contains at least one uppercase letter (A-Z)
 *   3. Contains at least one lowercase letter (a-z)
 *   4. Contains at least one number (0-9)
 *   5. Contains at least one special character (!@#$%^&*()_+-=[]{}|;:,.<>?)
 *
 * Strength levels based on how many criteria are met:
 *   - 0–1 criteria → "weak"
 *   - 2–3 criteria → "medium"
 *   - 4 criteria   → "strong"
 *   - All 5        → "very strong"
 *
 * Rules:
 *   - Empty string → "weak"
 *   - Non-string input → "weak"
 *
 * @param {string} password - The password to evaluate
 * @returns {string} "weak", "medium", "strong", or "very strong"
 */
export function checkPasswordStrength(password) {
  // Your code here
  if (typeof password != "string") {
    return "weak";
  }

  let isCriteria1True = Boolean(password.length >= 8);
  let isCriteria2True = Boolean(password.match(/[A-Z]/));
  let isCriteria3True = Boolean(password.match(/[a-z]/));
  let isCriteria4True = Boolean(password.match(/[0-9]/));
  let isCriteria5True = Boolean(
    password.match(/[!@#$%^&*()_+\-=\[\]{}|;:,.<>?]/),
  );

  let numberOfCriteriasFulfilled =
    isCriteria1True +
    isCriteria2True +
    isCriteria3True +
    isCriteria4True +
    isCriteria5True;

  if (numberOfCriteriasFulfilled === 5) {
    return "very strong";
  } else if (numberOfCriteriasFulfilled === 4) {
    return "strong";
  } else if (numberOfCriteriasFulfilled >= 2) {
    return "medium";
  } else {
    return "weak";
  }
}
