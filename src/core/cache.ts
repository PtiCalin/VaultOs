// src/core/cache.ts

import * as fs from 'fs';
import * as path from 'path';
import { ensureDir } from '../utils/file';

const CACHE_FILE = path.resolve('data/module-metadata.json');
let cache: Record<string, any> | null = null;

function loadCache() {
  if (cache === null) {
    if (fs.existsSync(CACHE_FILE)) {
      try {
        cache = JSON.parse(fs.readFileSync(CACHE_FILE, 'utf-8'));
      } catch {
        cache = {};
      }
    } else {
      cache = {};
    }
  }
}

export function updateModuleCache(module: string, data: Record<string, any>) {
  loadCache();
  if (!cache) cache = {};
  if (!cache[module]) cache[module] = {};
  Object.assign(cache[module], data);
  ensureDir(path.dirname(CACHE_FILE));
  fs.writeFileSync(CACHE_FILE, JSON.stringify(cache, null, 2));
}

export function getModuleMetadata(): Record<string, any> {
  loadCache();
  return cache || {};
}
