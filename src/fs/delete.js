import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const remove = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  const fileToRemove = path.join(__dirname, "./files/fileToRemove.txt");

  fs.access(fileToRemove, fs.constants.F_OK, (err) => {
    if (err) {
      throw new Error("FS operation failed");
    }
  });

  fs.unlink(fileToRemove, (err) => {
    if (err) {
      throw new Error("FS operation failed");
    }
  });
};

await remove();
