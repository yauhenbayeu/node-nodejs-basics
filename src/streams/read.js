import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const read = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);

  const filePath = path.join(__dirname, "./files/fileToRead.txt");
  const fileStream = fs.createReadStream(filePath);

  fileStream.pipe(process.stdout);

  fileStream.on("error", (err) => {
    throw new Error("FS operation failed");
  });
};

await read();
