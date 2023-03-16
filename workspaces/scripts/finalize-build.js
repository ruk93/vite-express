const fs = require("fs-extra");
const path = require("path");

const getPath = (relativePath) => path.join(__dirname, "../", relativePath);

const clearDistFolder = () => {
  try {
    fs.statSync(getPath("server/standalone-dist/client"));
    fs.removeSync(getPath("server/standalone-dist/client"));
  } catch (e) {}
};
const copyClient = () => {
  fs.moveSync(getPath("client/dist"), getPath("server/standalone-dist/client"));
};

const exec = () => {
  clearDistFolder();
  copyClient();
};

const execServerless = () => {
  fs.copySync(getPath("client/dist"), getPath("server/dist"));
};

if (process.env.SERVERLESS) {
  execServerless();
} else {
  exec();
}
