import { integer, sqliteTable, text } from 'drizzle-orm/sqlite-core';

export const task = sqliteTable('task', {
	id: text('id')
		.primaryKey()
		.$defaultFn(() => crypto.randomUUID()),
	title: text('title').notNull(),
	priority: integer('priority').notNull().default(1)
});

export const submission = sqliteTable('submission', {
	id: text('id')
		.primaryKey()
		.$defaultFn(() => crypto.randomUUID()),
	kind: text('kind', { enum: ['get_help', 'help_someone', 'contact'] }).notNull(),
	name: text('name').notNull(),
	contactInfo: text('contact_info').notNull(),
	location: text('location'),
	churchName: text('church_name'),
	role: text('role'),
	experience: text('experience'),
	readiness: text('readiness'),
	prompt: text('prompt'),
	message: text('message'),
	confirmed: integer('confirmed', { mode: 'boolean' }).notNull().default(false),
	createdAt: integer('created_at', { mode: 'timestamp' })
		.notNull()
		.$defaultFn(() => new Date())
});
