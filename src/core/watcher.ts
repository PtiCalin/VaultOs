// src/core/watcher.ts

import { App, Plugin } from 'obsidian';
import * as fs from 'fs';
import * as path from 'path';
import { runModuleBuildPipeline } from './orchestrator';
import { ensureDir } from '../utils/file';

const SUBPLUGIN_PREFIX = 'vaultos_';

export function registerWatcher(app: App, plugin: Plugin) {
  const pluginsDir = path.join(app.vault.adapter.basePath, '.obsidian/plugins');
  ensureDir(pluginsDir);

  const watcher = fs.watch(pluginsDir, (event, filename) => {
    if (event === 'rename' && filename && filename.startsWith(SUBPLUGIN_PREFIX)) {
      const full = path.join(pluginsDir, filename);
      if (fs.existsSync(full) && fs.statSync(full).isDirectory()) {
        runModuleBuildPipeline(filename);
      }
    }
  });

  plugin.register(() => watcher.close());
}
