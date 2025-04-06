import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const inputPath = path.join(__dirname, "enable.txt");
const outputPath = path.join(__dirname, "words.json");

try {
  const wordsText = await fs.promises.readFile(inputPath, "utf-8");

  const wordsArray = wordsText.split(/\r?\n/);

  await fs.promises.writeFile(outputPath, JSON.stringify(wordsArray));

  console.log("File JSON generato con successo!");
} catch (err) {
  console.error("Errore:", err.message);
}
