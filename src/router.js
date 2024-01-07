import { readdir } from 'node:fs/promises';
import * as path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'url';

const _filename = fileURLToPath(import.meta.url);
const _dirname = path.dirname(_filename);

export const router = new Map();
const baseDir = path.join(_dirname, '/router');

const loadRoutesDir = async (dirName, base) => {
  const relativePath = path.join(base, dirName);
  const workDir = path.join(baseDir, relativePath);

  const dir = await readdir(workDir, { withFileTypes: true });
  for (const directory of dir) {
    if (directory.isDirectory()) {
      await loadRoutesDir(directory.name, path.join(base, dirName));
    } else if (
      directory.isFile() &&
      path.extname(directory.name) === '.js' &&
      path.basename(directory.name, '.js') === 'index'
    ) {
      const modulePath = pathToFileURL(path.join(workDir, directory.name));
      const module = await import(modulePath);
      router.set(relativePath.replaceAll(path.sep, '/'), { ...module });
    }
  }
};

await loadRoutesDir('', path.sep);
