import { test } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'fs';
import os from 'os';
import path from 'path';
import { validateModuleStructure } from '../src/ops/validator';

function setupTempModule(files: Record<string, string>): string {
  const tmpDir = fs.mkdtempSync(path.join(os.tmpdir(), 'vaultos-test-'));
  for (const [rel, content] of Object.entries(files)) {
    const full = path.join(tmpDir, rel);
    fs.mkdirSync(path.dirname(full), { recursive: true });
    fs.writeFileSync(full, content);
  }
  return tmpDir;
}

test('reports missing files', () => {
  const mod = setupTempModule({
    'index.ts': '',
    'README.md': '',
    // intentionally omit wizzard.ts and config/config.json
  });

  const missing = validateModuleStructure(mod).sort();
  assert.deepStrictEqual(missing, ['config/config.json', 'wizzard.ts']);

  fs.rmSync(mod, { recursive: true, force: true });
});

test('passes when all files exist', () => {
  const mod = setupTempModule({
    'index.ts': '',
    'wizzard.ts': '',
    'README.md': '',
    'config/config.json': '{}',
  });

  const missing = validateModuleStructure(mod);
  assert.deepStrictEqual(missing, []);

  fs.rmSync(mod, { recursive: true, force: true });
});
