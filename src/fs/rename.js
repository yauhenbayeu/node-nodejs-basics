import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const rename = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  const oldFile = path.join(__dirname, "./files/wrongFilename.txt");
  const newFile = path.join(__dirname, "./files/properFilename.md");

  fs.access(oldFile, fs.constants.F_OK, (err) => {
    if (err) {
      throw new Error("1 - FS operation failed");
    }
  });

  fs.access(newFile, fs.constants.F_OK, (err) => {
    if (!err) {
      throw new Error("2 - FS operation failed");
    }
  });

  fs.rename(oldFile, newFile, (err) => {
    if (err) {
      throw new Error("3 - FS operation failed");
    }
  });
};

await rename();
