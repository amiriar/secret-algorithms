const path = require("path");
const fs = require("fs");
const moment = require("jalali-moment");

const isTrue = (value) => ["true", 1, true].includes(value);
const isFalse = (value) => ["false", 0, false].includes(value);

function deleteFileInPublic(fileAddress, date) {
  if (fileAddress && date) {
    const [year, month, day] = date.split("/");

    // Correctly compute the path relative to the current file's directory

    const pathFile = path.join(
      __dirname,
      "..",
      "..",
      "..",
      "public",
      "uploads",
      year,
      month,
      day,
      fileAddress
    );

    // Check if the file exists and delete it
    if (fs.existsSync(pathFile)) {
      fs.unlinkSync(pathFile);
      console.log(`File deleted: ${pathFile}`);
    } else {
      console.log(`File not found: ${pathFile}`);
    }
  } else {
    console.log("No file address or date provided.");
  }
}

module.exports = {
  isTrue,
  isFalse,
  deleteFileInPublic,
};
