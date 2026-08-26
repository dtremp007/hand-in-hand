import type { RequestHandler } from './$types';
import { locales } from '$lib/paraglide/runtime';

const canonicalRoutes = ['/', '/about', '/get-involved', '/churches', '/contact', '/zoom-schedule'];

export const GET: RequestHandler = ({ url }) => {
	const urls = locales
		.flatMap((locale) =>
			canonicalRoutes.map((path) => {
				const localized = path === '/' ? `/${locale}` : `/${locale}${path}`;
				const alternates = locales
					.map((alt) => {
						const href = path === '/' ? `/${alt}` : `/${alt}${path}`;
						return `    <xhtml:link rel="alternate" hreflang="${alt}" href="${new URL(href, url.origin).href}" />`;
					})
					.join('\n');

				return `  <url>
    <loc>${new URL(localized, url.origin).href}</loc>
${alternates}
    <xhtml:link rel="alternate" hreflang="x-default" href="${new URL(path === '/' ? '/en' : `/en${path}`, url.origin).href}" />
  </url>`;
			})
		)
		.join('\n');

	const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls}
</urlset>`;

	return new Response(body, {
		headers: { 'Content-Type': 'application/xml; charset=utf-8' }
	});
};
