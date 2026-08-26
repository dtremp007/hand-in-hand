import { integer, sqliteTable, text } from 'drizzle-orm/sqlite-core';

export const SITE_SETTINGS_ID = 'default';

export const siteSettings = sqliteTable('site_settings', {
	id: text('id').primaryKey(),
	notificationEmails: text('notification_emails', { mode: 'json' })
		.$type<string[]>()
		.notNull()
		.default([]),
	updatedAt: integer('updated_at', { mode: 'timestamp' })
		.notNull()
		.$defaultFn(() => new Date())
		.$onUpdate(() => new Date())
});
