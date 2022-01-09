// Parse CLI arguments
const operation = process.argv[2];
if (operation != "encrypt" && operation != "decrypt") {
  console.log("Invalid operation argument: Expected 'encrypt' or 'decrypt");
  process.exitCode = 1;
}
const inputText = process.argv[3];
if (!inputText) {
  console.log("No cipher text argument provided");
  process.exitCode = 1;
}

// Validate letters
const isLetter = (str) => {
  return str.length === 1 && str.match(/[a-zA-Z]/i);
};

// Chcek if uppercase
const isUpperCase = (char) => {
  if (char === char.toUpperCase()) {
    return true;
  }
  if (char === char.toLowerCase()) {
    return false;
  }
};

// Placeholder encryption key
let key = "NnLh4k3QGYYN";

const encrypt = (text) => {
  let result = "";

  for (let i = 0, j = 0; i < text.length; i++) {
    const c = text.charAt(i);
    if (isLetter(c)) {
      if (isUpperCase(c)) {
        result += String.fromCharCode(
          ((c.charCodeAt(0) + key.toUpperCase().charCodeAt(j) - 2 * 65) % 26) +
            65
        );
      } else {
        result += String.fromCharCode(
          ((c.charCodeAt(0) + key.toLowerCase().charCodeAt(j) - 2 * 97) % 26) +
            97
        );
      }
    } else {
      result += c;
    }
    j = ++j % key.length;
  }
  return result;
};

const decrypt = (text) => {
  let result = "";
  for (let i = 0, j = 0; i < text.length; i++) {
    const c = text.charAt(i);
    if (isLetter(c)) {
      if (isUpperCase(c)) {
        result += String.fromCharCode(
          90 - ((25 - (c.charCodeAt(0) - key.toUpperCase().charCodeAt(j))) % 26)
        );
      } else {
        result += String.fromCharCode(
          122 -
            ((25 - (c.charCodeAt(0) - key.toLowerCase().charCodeAt(j))) % 26)
        );
      }
    } else {
      result += c;
    }
    j = ++j % key.length;
  }
  return result;
};

// Handle ops
if (operation == "encrypt") {
  console.log(encrypt(inputText));
} else if (operation == "decrypt") {
  console.log(decrypt(inputText));
}
