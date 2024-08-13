import { defineConfig } from 'astro/config';
import chalk from 'chalk';
import { hostname } from 'os';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
	integrations: [tailwind()],
	vite: {
		plugins: [
			{
				name: 'custom-startup-message',
				configureServer(server) {
					server.httpServer?.on('listening', () => {
						const address = server.httpServer?.address();
						const theme = chalk.hex('48bd6b');
						const host = chalk.hex('8F00FF');

						console.log(
							chalk.bold(
								theme(`
  ╔══════════════════════════════════════════════════════════════════════════╗
  ║  ░▒▓██████▓▒░ ░▒▓███████▓▒░▒▓███████▓▒░░▒▓█▓▒░▒▓███████▓▒░░▒▓████████▓▒░ ║ ╗
  ║ ░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░      ░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░        ║ ║
  ║ ░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░      ░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░        ║ ║
  ║ ░▒▓████████▓▒░░▒▓██████▓▒░░▒▓███████▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓██████▓▒░   ║ ║
  ║ ░▒▓█▓▒░░▒▓█▓▒░      ░▒▓█▓▒░▒▓█▓▒░      ░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░        ║ ║
  ║ ░▒▓█▓▒░░▒▓█▓▒░      ░▒▓█▓▒░▒▓█▓▒░      ░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░        ║ ║
  ║ ░▒▓█▓▒░░▒▓█▓▒░▒▓███████▓▒░░▒▓█▓▒░      ░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓████████▓▒░ ║ ║
  ╚══════════════════════════════════════════════════════════════════════════╝ ║
    ╚══════════════════════════════════════════════════════════════════════════╝
  `)
							)
						);
						console.log(
							`  ${chalk.bold(host('Local System:'))}            http://${
								address.family === 'IPv6'
									? `[${address.address}]`
									: address.address
							}${address.port === 80 ? '' : ':' + chalk.bold(address.port)}`
						);

						console.log(
							`  ${chalk.bold(host('Local System:'))}            http://localhost${
								address.port === 8080
									? ''
									: ':' + chalk.bold(address.port)
							}`
						);

						try {
							console.log(
								`  ${chalk.bold(host('On Your Network:'))}  http://${hostname()}${
									address.port === 8080
										? ''
										: ':' + chalk.bold(address.port)
								}`
							);
						} catch (err) {
							// can't find LAN interface
						}

						if (process.env.REPL_SLUG && process.env.REPL_OWNER) {
							console.log(
								`  ${chalk.bold(host('Replit:'))}           https://${
									process.env.REPL_SLUG
								}.${process.env.REPL_OWNER}.repl.co`
							);
						}

						if (
							process.env.HOSTNAME &&
							process.env.GITPOD_WORKSPACE_CLUSTER_HOST
						) {
							console.log(
								`  ${chalk.bold(host('Gitpod:'))}           https://${process.env.PORT}-${
									process.env.HOSTNAME
								}.${process.env.GITPOD_WORKSPACE_CLUSTER_HOST}`
							);
						}

						if (
							process.env.CODESPACE_NAME &&
							process.env.GITHUB_CODESPACES_PORT_FORWARDING_DOMAIN
						) {
							console.log(
								`  ${chalk.bold(host('Github Codespaces:'))}           https://${
									process.env.CODESPACE_NAME
								}-${
									address.port === 80 ? '' : address.port
								}.${process.env.GITHUB_CODESPACES_PORT_FORWARDING_DOMAIN}`
							);
						}
					});
				}
			}
		]
	}
});
