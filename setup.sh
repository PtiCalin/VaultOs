#!/usr/bin/env bash
set -e

if [ "$ENABLE_NET" = "1" ]; then
  echo "Network access requested for dependency installation..."
  # Add network setup commands here if needed
fi

npm ci
npm test
