import path from "path";
import { mkdir, rm, copyFile, readdir } from "node:fs/promises";
import { fileURLToPath } from "url";

const copy = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  const filesFolder = path.resolve(__dirname, "files");
  const filesCopyFolder = path.resolve(__dirname, "files_copy");

  try {
    await mkdir(filesCopyFolder, { recursive: true });
    const files = await readdir(filesFolder, { withFileTypes: true });
    const filesInCopyFolder = await readdir(filesCopyFolder);

    for (const file of filesInCopyFolder) {
      await rm(path.join(filesCopyFolder, file));
    }

    for (const file of files) {
      if (file.isFile()) {
        await copyFile(
          path.join(filesFolder, file.name),
          path.join(filesCopyFolder, file.name)
        );
      }
    }
  } catch (err) {
    throw new Error("FS operation failed");
  }
};

await copy();
