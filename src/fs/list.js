import path from "path";
import { readdir } from "node:fs/promises";
import { fileURLToPath } from "url";

const list = async () => {
  try {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);

    const filesFolder = path.join(__dirname, "./files");
    const files = await readdir(filesFolder, { withFileTypes: true });
    const namesArr = [];

    for (const file of files) {
      if (file.isFile()) {
        namesArr.push(file.name);
      }
    }
    console.log(namesArr);
  } catch (err) {
    throw new Error("FS operation failed");
  }
};

await list();
