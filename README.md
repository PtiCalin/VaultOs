# 🧠 VaultOS – Plugin for Obsidian

> VaultOS is a modular plugin orchestration system for [Obsidian](https://obsidian.md) – designed to manage, compile, and control an ecosystem of VaultOS-powered subplugins right from your vault.

[![MIT License](https://img.shields.io/badge/License-MIT-green?style=flat-square)](./LICENSE)
[![Built with Obsidian](https://img.shields.io/badge/Built%20With-Obsidian-blueviolet?style=flat-square)](https://obsidian.md)
[![Version](https://img.shields.io/badge/version-0.1.0-blue?style=flat-square)](./manifest.json)
[![Made by PtiCalin](https://img.shields.io/badge/Made%20by-PtiCalin-8a2be2?style=flat-square)](https://github.com/PtiCalin)

---

### ✨ What is VaultOS?

VaultOS is the beating heart of a modular dev environment inside Obsidian. It watches your plugin folder, auto-registers and compiles VaultOS submodules, and provides an elegant control panel for managing your extended vault OS.

Whether you're building a single subplugin or orchestrating dozens, VaultOS gives you a solid foundation.

---

### 🔧 Core Features

- 🧩 **Auto-detect `vaultos_*` folders** and treat them as managed subplugins
- ⚙️ **Subplugin scaffolder** to generate all required files and folders
- 📦 **Converter, Relocator, Validator, and Compilator** utilities to streamline module deployment
- 💾 **Module metadata cache** for tracking status, structure, and logs
- 🪟 **VaultOS UI Panel** inside Obsidian's workspace (left or right dock)
- 📁 **Manifest builder** for compiling subplugin metadata into the main manifest
- 📑 **Logging system** to track plugin events and actions

---

### 📁 Folder Structure

```
vaultos/
├── main.ts                # The plugin entry point
├── src/
│   ├── core/              # Watcher, logger, cache, UI panel view
│   ├── modules/           # Module manager and subplugin scaffolder
│   ├── ops/               # Converter, validator, relocator, compiler
│   └── templates/         # Handlebars scaffolding templates
├── dist/                  # Finalized plugin builds and JSON configs
├── data/                  # Cache, logs, backups
└── config/                # vaultos_config_extended.json and variants
```

---

### 📦 Getting Started

```bash
# 1. Clone this repo into your Obsidian vault plugin folder
cd .obsidian/plugins
git clone https://github.com/PtiCalin/vaultos

# 2. Install dependencies
cd vaultos
npm install

# 3. Build plugin
npm run build

# 4. Reload Obsidian – VaultOS will boot automatically ✨
```

---

### 🚀 Powered By

- [Obsidian API](https://docs.obsidian.md/)
- [TypeScript](https://www.typescriptlang.org/)
- [Handlebars](https://handlebarsjs.com/) for template scaffolding
- ❤️ Curiosity and caffeine

---

### 🤝 Contributing

Contributions welcome! Check out [`CONTRIBUTING.md`](./CONTRIBUTING.md) to learn more.

---

### 🧪 Status

This is an alpha kernel release of VaultOS. Expect improvements to:
- Configuration parsing
- UI panel features
- Plugin lifecycle automation

> Built by [@PtiCalin](https://github.com/PtiCalin) · Join the [Discord](https://discord.gg/dX8ZPDrN)

---

<p align="center"><i>🌌 A modular engine for a modular mind.</i></p>
