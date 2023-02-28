import dayjs from "dayjs";
import path from "path";
import process from "process";
import fs from "fs";
import yaml from "js-yaml";

export function isInThePast(date: string) {
  const today = dayjs();
  return dayjs(date).diff(today) < 0;
}

export function getFileContent(filePath: string) {
  const homeFile = path.join(process.cwd(), filePath);
  const fileContents = fs.readFileSync(homeFile, 'utf8');
  return yaml.load(fileContents);
}