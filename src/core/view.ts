// src/core/view.ts

import { App, ItemView, WorkspaceLeaf } from 'obsidian';

export const VAULTOS_PANEL_VIEW = 'VAULTOS_PANEL_VIEW';

export class VaultOSPanelView extends ItemView {
  constructor(leaf: WorkspaceLeaf) {
    super(leaf);
  }

  getViewType(): string {
    return VAULTOS_PANEL_VIEW;
  }

  getDisplayText(): string {
    return 'VaultOS';
  }

  async onOpen() {
    const container = this.containerEl.children[1];
    container.empty();
    container.createEl('h2', { text: 'VaultOS Module Manager' });
  }

  async onClose() {
    // nothing
  }
}

export function registerModuleManagerView(app: App) {
  app.workspace.registerView(VAULTOS_PANEL_VIEW, (leaf) => new VaultOSPanelView(leaf));
}
