import { desc } from 'drizzle-orm';
import { db } from '$lib/server/db';
import { submission } from '$lib/server/db/schema';

export const load = async () => {
	return {
		submissions: await db.select().from(submission).orderBy(desc(submission.createdAt))
	};
};
