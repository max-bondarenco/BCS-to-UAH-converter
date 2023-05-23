const fs = require("fs");
const util = require("util");

exports.readEmails = async () => {
  return (await util.promisify(fs.readFile)(`${__dirname}/../data/emails.txt`))
    .toString()
    .split(",");
};

exports.writeEmails = async (emails) => {
  await util.promisify(fs.writeFile)(
    `${__dirname}/../data/emails.txt`,
    `${emails}`
  );
};
