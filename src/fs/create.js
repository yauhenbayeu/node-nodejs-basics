import fs from "node:fs";
import path from "path";
import { fileURLToPath } from "url";

const create = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  const filePath = path.join(__dirname, "./files/fresh.txt");
  fs.writeFile(filePath, "I am fresh and young", { flag: "wx" }, (err) => {
    if (err) {
      throw new Error("FS operation failed");
    }
  });
};

await create();
