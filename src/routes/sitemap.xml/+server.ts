import type { RequestHandler } from './$types';

const routes = ['/', '/about', '/get-help', '/help-someone', '/churches', '/contact'];

export const GET: RequestHandler = ({ url }) => {
	const urls = routes
		.map((path) => `  <url><loc>${new URL(path, url.origin).href}</loc></url>`)
		.join('\n');
	const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;

	return new Response(body, {
		headers: { 'Content-Type': 'application/xml; charset=utf-8' }
	});
};
