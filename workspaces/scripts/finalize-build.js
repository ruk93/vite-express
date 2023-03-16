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
  fs.removeSync(getPath("server/dist/api/index.js"));
  fs.renameSync(getPath("server/dist/api/serverless.js"),getPath("server/dist/api/index.js"));
};

if (process.env.SERVERLESS) {
  execServerless();
} else {
  exec();
}
