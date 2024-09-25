update push="true":
	#!/usr/bin/env bash
	set -euo pipefail

	dir="$(mktemp -d)"
	echo >&2 "[INFO] Grabbing compendium markdown..."
	git clone git@github.com:SteelCompendium/draw-steel-compendium.git "$dir"
	(
		compendium_dir="$(pwd)"
		cd "$dir"
		echo >&2 "[INFO] Copying compendium markdown to website docs..."
		cp -R *.md "${compendium_dir}/docs"
		cp -R Rules "${compendium_dir}/docs"
		cp -R Adventures "${compendium_dir}/docs"
		cp -R Abilities "${compendium_dir}/docs"
		cp -R Ancestries "${compendium_dir}/docs"
		cp -R Kits "${compendium_dir}/docs"
		cp -R Careers "${compendium_dir}/docs"
		cp -R Cultures "${compendium_dir}/docs"
		cp -R Skills "${compendium_dir}/docs"
		cp -R Conditions "${compendium_dir}/docs"
		cp -R Media "${compendium_dir}/docs"
		
		rm "${compendium_dir}/docs/README.md" || true
		
		sha="$(git rev-parse --short HEAD)"
		echo >&2 "[INFO] Committing and pushing updates..."
		cd "$compendium_dir"
		git add docs/*
		git commit -am "Updates from compendium ($sha)"
		if [ "{{push}}" == "true" ]; then
			git push
		fi
	)
	echo >&2 "[INFO] Done!"
