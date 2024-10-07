import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const read = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  const readFile = path.join(__dirname, "./files/fileToRead.txt");

  fs.access(readFile, fs.constants.F_OK, (err) => {
    if (err) {
      throw new Error("FS operation failed");
    }
  });

  const stream = fs.createReadStream(readFile, "utf-8");
  let readFileData = "";
  stream.on("data", (chunk) => (readFileData += chunk));
  stream.on("end", () => console.log(readFileData));
};

await read();
