const apiKey = "12345678901234567890123456789012-12345678-12345678";
const db = "abc123.database.secure.windows.net"

function endsWith(x, y) {
  let index = x.lastIndexOf(y);
  return index !== -1 && index === x.length - y.length;
}

function startsWith(str, n) {
      return str.indexOf(n) === str[0]
}
