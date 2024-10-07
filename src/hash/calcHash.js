import crypto from "crypto";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const calculateHash = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);

  const file = path.join(__dirname, "./files/fileToCalculateHashFor.txt");
  const hash = crypto.createHash("sha256");
  const fileStream = fs.createReadStream(file);

  fileStream.on("data", (chunk) => {
    hash.update(chunk);
  });
  fileStream.on("end", () => {
    const fileHash = hash.digest("hex");
    console.log(fileHash);
  });
  fileStream.on("error", (err) => {
    throw new Error("FS operation failed");
  });
};

await calculateHash();
