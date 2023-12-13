
// this file is generated — do not edit it


/// <reference types="@sveltejs/kit" />

/**
 * Environment variables [loaded by Vite](https://vitejs.dev/guide/env-and-mode.html#env-files) from `.env` files and `process.env`. Like [`$env/dynamic/private`](https://kit.svelte.dev/docs/modules#$env-dynamic-private), this module cannot be imported into client-side code. This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) _and do_ start with [`config.kit.env.privatePrefix`](https://kit.svelte.dev/docs/configuration#env) (if configured).
 * 
 * _Unlike_ [`$env/dynamic/private`](https://kit.svelte.dev/docs/modules#$env-dynamic-private), the values exported from this module are statically injected into your bundle at build time, enabling optimisations like dead code elimination.
 * 
 * ```ts
 * import { API_KEY } from '$env/static/private';
 * ```
 * 
 * Note that all environment variables referenced in your code should be declared (for example in an `.env` file), even if they don't have a value until the app is deployed:
 * 
 * ```
 * MY_FEATURE_FLAG=""
 * ```
 * 
 * You can override `.env` values from the command line like so:
 * 
 * ```bash
 * MY_FEATURE_FLAG="enabled" npm run dev
 * ```
 */
declare module '$env/static/private' {
	export const HYGRAPH_KEY: string;
	export const HYGRAPH_URL: string;
	export const npm_config_save_dev: string;
	export const npm_config_viewer: string;
	export const npm_config_browser: string;
	export const npm_package_gitHead: string;
	export const npm_package_devDependencies_prettier: string;
	export const MANPATH: string;
	export const npm_config_rollback: string;
	export const TERM_PROGRAM: string;
	export const npm_config_usage: string;
	export const NODE: string;
	export const npm_package_devDependencies_prettier_plugin_svelte: string;
	export const INIT_CWD: string;
	export const npm_config_globalignorefile: string;
	export const npm_package_devDependencies_vite: string;
	export const SHELL: string;
	export const TERM: string;
	export const npm_config_shell: string;
	export const npm_config_maxsockets: string;
	export const npm_config_init_author_url: string;
	export const npm_config_shrinkwrap: string;
	export const npm_config_parseable: string;
	export const TMPDIR: string;
	export const HOMEBREW_REPOSITORY: string;
	export const npm_config_init_license: string;
	export const npm_config_global_prefix: string;
	export const npm_package_scripts_lint: string;
	export const npm_config_if_present: string;
	export const TERM_PROGRAM_VERSION: string;
	export const npm_package_scripts_dev: string;
	export const npm_config_sign_git_tag: string;
	export const npm_config_init_author_email: string;
	export const npm_config_cache_max: string;
	export const MallocNanoZone: string;
	export const ORIGINAL_XDG_CURRENT_DESKTOP: string;
	export const ZDOTDIR: string;
	export const npm_config_long: string;
	export const npm_config_local_address: string;
	export const npm_config_git_tag_version: string;
	export const npm_config_cert: string;
	export const COLOR: string;
	export const npm_config_registry: string;
	export const npm_config_npat: string;
	export const npm_config_fetch_retries: string;
	export const npm_package_devDependencies__sveltejs_kit: string;
	export const npm_package_private: string;
	export const npm_config_local_prefix: string;
	export const npm_config_versions: string;
	export const npm_config_message: string;
	export const npm_config_key: string;
	export const npm_package_readmeFilename: string;
	export const npm_package_description: string;
	export const USER: string;
	export const COMMAND_MODE: string;
	export const npm_config_globalconfig: string;
	export const npm_package_devDependencies__sveltejs_adapter_static: string;
	export const npm_config_always_auth: string;
	export const npm_package_dependencies_graphql_request: string;
	export const SSH_AUTH_SOCK: string;
	export const npm_config_spin: string;
	export const __CF_USER_TEXT_ENCODING: string;
	export const npm_execpath: string;
	export const npm_config_cache_lock_retries: string;
	export const npm_package_dependencies_graphql: string;
	export const npm_config_cafile: string;
	export const npm_package_devDependencies_svelte: string;
	export const npm_config_heading: string;
	export const npm_config_proprietary_attribs: string;
	export const npm_config_fetch_retry_mintimeout: string;
	export const npm_config_json: string;
	export const npm_config_access: string;
	export const npm_config_argv: string;
	export const PATH: string;
	export const npm_config_https_proxy: string;
	export const npm_config_engine_strict: string;
	export const npm_config_description: string;
	export const LaunchInstanceID: string;
	export const _: string;
	export const npm_config_init_module: string;
	export const npm_config_userconfig: string;
	export const __CFBundleIdentifier: string;
	export const USER_ZDOTDIR: string;
	export const PWD: string;
	export const npm_config_user: string;
	export const npm_config_node_version: string;
	export const npm_package_scripts_preview: string;
	export const npm_lifecycle_event: string;
	export const EDITOR: string;
	export const npm_config_save: string;
	export const npm_config_editor: string;
	export const npm_package_name: string;
	export const LANG: string;
	export const npm_config_tag: string;
	export const npm_config_global: string;
	export const npm_package_scripts_build: string;
	export const npm_config_optional: string;
	export const npm_config_npm_version: string;
	export const XPC_FLAGS: string;
	export const npm_config_force: string;
	export const npm_config_bin_links: string;
	export const npm_config_searchopts: string;
	export const npm_config_depth: string;
	export const npm_config_node_gyp: string;
	export const npm_config_searchsort: string;
	export const npm_config_rebuild_bundle: string;
	export const npm_package_devDependencies__sveltejs_adapter_auto: string;
	export const npm_package_version: string;
	export const XPC_SERVICE_NAME: string;
	export const npm_config_unicode: string;
	export const VSCODE_INJECTION: string;
	export const npm_package_type: string;
	export const HOME: string;
	export const SHLVL: string;
	export const npm_config_fetch_retry_maxtimeout: string;
	export const npm_package_scripts_gh_pages: string;
	export const npm_config_tag_version_prefix: string;
	export const npm_config_strict_ssl: string;
	export const npm_config_save_prefix: string;
	export const npm_config_loglevel: string;
	export const npm_config_ca: string;
	export const npm_config_save_exact: string;
	export const npm_config_group: string;
	export const npm_config_fetch_retry_factor: string;
	export const npm_config_dev: string;
	export const npm_package_dependencies_gsap: string;
	export const HOMEBREW_PREFIX: string;
	export const npm_config_version: string;
	export const npm_config_cache_lock_stale: string;
	export const npm_config_cache_min: string;
	export const npm_config_searchexclude: string;
	export const npm_config_cache: string;
	export const npm_package_scripts_format: string;
	export const LOGNAME: string;
	export const npm_lifecycle_script: string;
	export const npm_config_color: string;
	export const npm_package_devDependencies_gh_pages: string;
	export const npm_config_proxy: string;
	export const npm_config_save_optional: string;
	export const npm_config_ignore_scripts: string;
	export const npm_config_user_agent: string;
	export const npm_config_cache_lock_wait: string;
	export const HOMEBREW_CELLAR: string;
	export const INFOPATH: string;
	export const npm_config_production: string;
	export const npm_config_save_bundle: string;
	export const npm_config_umask: string;
	export const npm_config_init_version: string;
	export const npm_config_scope: string;
	export const npm_config_init_author_name: string;
	export const npm_config_git: string;
	export const SECURITYSESSIONID: string;
	export const npm_config_unsafe_perm: string;
	export const npm_config_tmp: string;
	export const npm_config_onload_script: string;
	export const npm_node_execpath: string;
	export const npm_config_link: string;
	export const npm_config_prefix: string;
	export const COLORTERM: string;
	export const NODE_ENV: string;
}

/**
 * Similar to [`$env/static/private`](https://kit.svelte.dev/docs/modules#$env-static-private), except that it only includes environment variables that begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) (which defaults to `PUBLIC_`), and can therefore safely be exposed to client-side code.
 * 
 * Values are replaced statically at build time.
 * 
 * ```ts
 * import { PUBLIC_BASE_URL } from '$env/static/public';
 * ```
 */
declare module '$env/static/public' {
	
}

/**
 * This module provides access to runtime environment variables, as defined by the platform you're running on. For example if you're using [`adapter-node`](https://github.com/sveltejs/kit/tree/master/packages/adapter-node) (or running [`vite preview`](https://kit.svelte.dev/docs/cli)), this is equivalent to `process.env`. This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) _and do_ start with [`config.kit.env.privatePrefix`](https://kit.svelte.dev/docs/configuration#env) (if configured).
 * 
 * This module cannot be imported into client-side code.
 * 
 * ```ts
 * import { env } from '$env/dynamic/private';
 * console.log(env.DEPLOYMENT_SPECIFIC_VARIABLE);
 * ```
 * 
 * > In `dev`, `$env/dynamic` always includes environment variables from `.env`. In `prod`, this behavior will depend on your adapter.
 */
declare module '$env/dynamic/private' {
	export const env: {
		HYGRAPH_KEY: string;
		HYGRAPH_URL: string;
		npm_config_save_dev: string;
		npm_config_viewer: string;
		npm_config_browser: string;
		npm_package_gitHead: string;
		npm_package_devDependencies_prettier: string;
		MANPATH: string;
		npm_config_rollback: string;
		TERM_PROGRAM: string;
		npm_config_usage: string;
		NODE: string;
		npm_package_devDependencies_prettier_plugin_svelte: string;
		INIT_CWD: string;
		npm_config_globalignorefile: string;
		npm_package_devDependencies_vite: string;
		SHELL: string;
		TERM: string;
		npm_config_shell: string;
		npm_config_maxsockets: string;
		npm_config_init_author_url: string;
		npm_config_shrinkwrap: string;
		npm_config_parseable: string;
		TMPDIR: string;
		HOMEBREW_REPOSITORY: string;
		npm_config_init_license: string;
		npm_config_global_prefix: string;
		npm_package_scripts_lint: string;
		npm_config_if_present: string;
		TERM_PROGRAM_VERSION: string;
		npm_package_scripts_dev: string;
		npm_config_sign_git_tag: string;
		npm_config_init_author_email: string;
		npm_config_cache_max: string;
		MallocNanoZone: string;
		ORIGINAL_XDG_CURRENT_DESKTOP: string;
		ZDOTDIR: string;
		npm_config_long: string;
		npm_config_local_address: string;
		npm_config_git_tag_version: string;
		npm_config_cert: string;
		COLOR: string;
		npm_config_registry: string;
		npm_config_npat: string;
		npm_config_fetch_retries: string;
		npm_package_devDependencies__sveltejs_kit: string;
		npm_package_private: string;
		npm_config_local_prefix: string;
		npm_config_versions: string;
		npm_config_message: string;
		npm_config_key: string;
		npm_package_readmeFilename: string;
		npm_package_description: string;
		USER: string;
		COMMAND_MODE: string;
		npm_config_globalconfig: string;
		npm_package_devDependencies__sveltejs_adapter_static: string;
		npm_config_always_auth: string;
		npm_package_dependencies_graphql_request: string;
		SSH_AUTH_SOCK: string;
		npm_config_spin: string;
		__CF_USER_TEXT_ENCODING: string;
		npm_execpath: string;
		npm_config_cache_lock_retries: string;
		npm_package_dependencies_graphql: string;
		npm_config_cafile: string;
		npm_package_devDependencies_svelte: string;
		npm_config_heading: string;
		npm_config_proprietary_attribs: string;
		npm_config_fetch_retry_mintimeout: string;
		npm_config_json: string;
		npm_config_access: string;
		npm_config_argv: string;
		PATH: string;
		npm_config_https_proxy: string;
		npm_config_engine_strict: string;
		npm_config_description: string;
		LaunchInstanceID: string;
		_: string;
		npm_config_init_module: string;
		npm_config_userconfig: string;
		__CFBundleIdentifier: string;
		USER_ZDOTDIR: string;
		PWD: string;
		npm_config_user: string;
		npm_config_node_version: string;
		npm_package_scripts_preview: string;
		npm_lifecycle_event: string;
		EDITOR: string;
		npm_config_save: string;
		npm_config_editor: string;
		npm_package_name: string;
		LANG: string;
		npm_config_tag: string;
		npm_config_global: string;
		npm_package_scripts_build: string;
		npm_config_optional: string;
		npm_config_npm_version: string;
		XPC_FLAGS: string;
		npm_config_force: string;
		npm_config_bin_links: string;
		npm_config_searchopts: string;
		npm_config_depth: string;
		npm_config_node_gyp: string;
		npm_config_searchsort: string;
		npm_config_rebuild_bundle: string;
		npm_package_devDependencies__sveltejs_adapter_auto: string;
		npm_package_version: string;
		XPC_SERVICE_NAME: string;
		npm_config_unicode: string;
		VSCODE_INJECTION: string;
		npm_package_type: string;
		HOME: string;
		SHLVL: string;
		npm_config_fetch_retry_maxtimeout: string;
		npm_package_scripts_gh_pages: string;
		npm_config_tag_version_prefix: string;
		npm_config_strict_ssl: string;
		npm_config_save_prefix: string;
		npm_config_loglevel: string;
		npm_config_ca: string;
		npm_config_save_exact: string;
		npm_config_group: string;
		npm_config_fetch_retry_factor: string;
		npm_config_dev: string;
		npm_package_dependencies_gsap: string;
		HOMEBREW_PREFIX: string;
		npm_config_version: string;
		npm_config_cache_lock_stale: string;
		npm_config_cache_min: string;
		npm_config_searchexclude: string;
		npm_config_cache: string;
		npm_package_scripts_format: string;
		LOGNAME: string;
		npm_lifecycle_script: string;
		npm_config_color: string;
		npm_package_devDependencies_gh_pages: string;
		npm_config_proxy: string;
		npm_config_save_optional: string;
		npm_config_ignore_scripts: string;
		npm_config_user_agent: string;
		npm_config_cache_lock_wait: string;
		HOMEBREW_CELLAR: string;
		INFOPATH: string;
		npm_config_production: string;
		npm_config_save_bundle: string;
		npm_config_umask: string;
		npm_config_init_version: string;
		npm_config_scope: string;
		npm_config_init_author_name: string;
		npm_config_git: string;
		SECURITYSESSIONID: string;
		npm_config_unsafe_perm: string;
		npm_config_tmp: string;
		npm_config_onload_script: string;
		npm_node_execpath: string;
		npm_config_link: string;
		npm_config_prefix: string;
		COLORTERM: string;
		NODE_ENV: string;
		[key: `PUBLIC_${string}`]: undefined;
		[key: `${string}`]: string | undefined;
	}
}

/**
 * Similar to [`$env/dynamic/private`](https://kit.svelte.dev/docs/modules#$env-dynamic-private), but only includes variables that begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) (which defaults to `PUBLIC_`), and can therefore safely be exposed to client-side code.
 * 
 * Note that public dynamic environment variables must all be sent from the server to the client, causing larger network requests — when possible, use `$env/static/public` instead.
 * 
 * ```ts
 * import { env } from '$env/dynamic/public';
 * console.log(env.PUBLIC_DEPLOYMENT_SPECIFIC_VARIABLE);
 * ```
 */
declare module '$env/dynamic/public' {
	export const env: {
		[key: `PUBLIC_${string}`]: string | undefined;
	}
}
