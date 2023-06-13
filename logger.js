const fs = require('fs');
const path = require('path');

function logError(error) {
  const logDirectory = 'logs';
  const logFilePath = path.join(logDirectory, 'error.log');
  const errorMessage = `${new Date().toISOString()} - ${error}\n`;

  if (!fs.existsSync(logDirectory)) {
    fs.mkdirSync(logDirectory);
  }

  fs.appendFile(logFilePath, errorMessage, (err) => {
    if (err) {
      console.error('Failed to write error to log file:', err);
    }
  });
}

module.exports = {
  logError
}