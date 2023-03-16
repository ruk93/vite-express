const fs = require("fs-extra");
const path = require("path");

const getPath = (relativePath) => path.join(__dirname, "../", relativePath);

const clearDistFolder = () => {
  try {
    fs.statSync(getPath("server/dist/client"));
    fs.removeSync(getPath("server/dist/client"));
  } catch (e) {}
};
const copyClient = () => {
  fs.moveSync(getPath("client/dist"), getPath("server/dist/client"));
};

const exec = () => {
  clearDistFolder();
  copyClient();
};

exec();
