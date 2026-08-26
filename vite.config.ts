import { paraglideVitePlugin } from '@inlang/paraglide-js';
import tailwindcss from '@tailwindcss/vite';
import adapter from '@sveltejs/adapter-vercel';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	envDir: './.env',
	plugins: [
		tailwindcss(),
		sveltekit({
			compilerOptions: {
				// Force runes mode for the project, except for libraries. Can be removed in svelte 6.
				runes: ({ filename }) =>
					filename.split(/[/\\]/).includes('node_modules') ? undefined : true
			},
			adapter: adapter({ runtime: 'nodejs22.x' }),
			typescript: {
				config: (config) => ({
					...config,
					include: [...config.include, '../drizzle.config.ts']
				})
			}
		}),

		paraglideVitePlugin({
			project: './project.inlang',
			outdir: './src/lib/paraglide',
			emitTsDeclarations: true,
			strategy: ['url', 'baseLocale'],
			urlPatterns: [
				{
					pattern: '/login/:path(.*)?',
					localized: [
						['en', '/login/:path(.*)?'],
						['es', '/login/:path(.*)?'],
						['de', '/login/:path(.*)?']
					]
				},
				{
					pattern: '/admin/:path(.*)?',
					localized: [
						['en', '/admin/:path(.*)?'],
						['es', '/admin/:path(.*)?'],
						['de', '/admin/:path(.*)?']
					]
				},
				{
					pattern: '/sitemap.xml',
					localized: [
						['en', '/sitemap.xml'],
						['es', '/sitemap.xml'],
						['de', '/sitemap.xml']
					]
				},
				{
					pattern: '/robots.txt',
					localized: [
						['en', '/robots.txt'],
						['es', '/robots.txt'],
						['de', '/robots.txt']
					]
				},
				{
					pattern: '/',
					localized: [
						['en', '/en'],
						['es', '/es'],
						['de', '/de']
					]
				},
				{
					pattern: '/:path(.*)?',
					localized: [
						['en', '/en/:path(.*)?'],
						['es', '/es/:path(.*)?'],
						['de', '/de/:path(.*)?']
					]
				}
			],
			routeStrategies: [
				{ match: '/login/:path(.*)?', strategy: ['baseLocale'] },
				{ match: '/admin/:path(.*)?', strategy: ['baseLocale'] },
				{ match: '/api/:path(.*)?', exclude: true },
				{ match: '/sitemap.xml', exclude: true },
				{ match: '/robots.txt', exclude: true }
			]
		})
	]
});
