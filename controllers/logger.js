const fs = require("fs");
const path = require("path");

const logError = (error) => {
  const logDirectory = "logs";
  const logFilePath = path.join(logDirectory, "error.log");
  const errorMessage = `${new Date().toISOString()} - ${error}\n`;

  try {
    if (!fs.existsSync(logDirectory)) {
      fs.mkdirSync(logDirectory);
    }

    fs.appendFileSync(logFilePath, errorMessage);
  } catch (err) {
    console.error("Failed to write error to log file:", err);
  }
};

module.exports = {
  logError,
};
