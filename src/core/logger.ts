// src/core/logger.ts

import * as fs from 'fs';
import * as path from 'path';
import { ensureDir } from '../utils/file';

const LOG_FILE = path.resolve('data/vaultos.log');

export interface ModuleLogEntry {
  action: string;
  module: string;
  result: string;
  [key: string]: any;
}

export function logModuleAction(entry: ModuleLogEntry) {
  ensureDir(path.dirname(LOG_FILE));
  const line = JSON.stringify({ timestamp: new Date().toISOString(), ...entry });
  fs.appendFileSync(LOG_FILE, line + '\n');
}
