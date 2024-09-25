update:
	#!/usr/bin/env bash
	set -euo pipefail

	dir="$(mktemp -d)"
	git clone git@github.com:SteelCompendium/draw-steel-compendium.git "$dir"
	(
		compendium_dir="$(pwd)"
		cd "$dir"
		cp -R *.md "${compendium_dir}/docs"
	)
	rm "docs/README.md"
