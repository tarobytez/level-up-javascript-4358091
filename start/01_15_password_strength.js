function checkPassword(password) {
  // Lookahead "x(?=y) matches "x" if "x" is followed by "y".", essentially an if true i think? Then . mean "matches any single character except for a newline". + means "Matches at least one", and [a-z] means "Matches all characters in the range from a to z"
  let oneLowerCase = /(?=.+[a-z])/;
  let oneUpperCase = /(?=.+[A-Z])/;
  let oneDigit = /(?=.+[0-9])/;
  let oneSpecialCharacter = /(?=.+[!@#$%^&*])/;
  let leastEight = /(?=.{8,})/;

  let isValid = 
    oneLowerCase.test(password) &&
    oneUpperCase.test(password) &&
    oneDigit.test(password) &&
    oneSpecialCharacter.test(password) &&
    leastEight.test(password);

  return isValid ? "Your password is valid." : "Your password is invalid."
}

console.log(checkPassword("Th1sIs4G00dP4ssw0rd"));