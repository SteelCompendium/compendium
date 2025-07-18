update push="true":
    #!/usr/bin/env bash
    set -euo pipefail

    just clean_docs

    dir="$(mktemp -d)"
    echo >&2 "[INFO] Grabbing compendium markdown..."
    git clone git@github.com:SteelCompendium/data-md.git "$dir"
    (
        compendium_dir="$(pwd)"
        cd "$dir"
        echo >&2 "[INFO] Copying compendium markdown (data-md) to website docs..."

        # Copy all content over
        cp -R * "${compendium_dir}/docs"

        # Clean out the extras
        rm -rf "${compendium_dir}/docs/.github" || true
        rm -rf "${compendium_dir}/docs/LICENSE" || true
        rm -rf "${compendium_dir}/docs/README.md" || true

        # Move static content overrides over
        cp -R "${compendium_dir}/static_content/docs" "${compendium_dir}"

        sha="$(git rev-parse --short HEAD)"
        echo >&2 "[INFO] Committing and pushing updates..."
        if [ "{{push}}" == "true" ]; then
            cd "$compendium_dir"
            git add docs/*
            git commit -am "Updates from compendium ($sha)"
            git push
        fi
    )
    echo >&2 "[INFO] Done!"

clean_docs:
    #!/usr/bin/env bash
    set -euo pipefail
    cd docs
    find . -maxdepth 1 -mindepth 1 \
      ! -name 'javascripts' \
      ! -name 'stylesheets' \
      ! -name 'Media' \
      ! -name 'index.md' \
      -exec rm -rf -- {} +