import { redirect } from '@sveltejs/kit';
import { desc } from 'drizzle-orm';
import { db } from '$lib/server/db';
import { submission } from '$lib/server/db/schema';

export const load = async ({ locals, url }) => {
	if (!locals.user) {
		throw redirect(302, `/login?redirectTo=${encodeURIComponent(url.pathname)}`);
	}

	return {
		submissions: await db.select().from(submission).orderBy(desc(submission.createdAt))
	};
};
