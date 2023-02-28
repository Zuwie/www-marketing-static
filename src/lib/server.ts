import path from "path";
import process from "process";
import fs from "fs";
import yaml from "js-yaml";

export function getFileContent(filePath: string) {
  const homeFile = path.join(process.cwd(), filePath);
  const fileContents = fs.readFileSync(homeFile, 'utf8');
  return yaml.load(fileContents);
}