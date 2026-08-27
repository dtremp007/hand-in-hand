import { error } from '@sveltejs/kit';
import { eq } from 'drizzle-orm';
import { db } from '$lib/server/db';
import { submission } from '$lib/server/db/schema';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params }) => {
	const [item] = await db.select().from(submission).where(eq(submission.id, params.id)).limit(1);

	if (!item) {
		error(404, 'Submission not found');
	}

	return { submission: item };
};
