CREATE TABLE `site_settings` (
	`id` text PRIMARY KEY NOT NULL,
	`notification_emails` text DEFAULT '[]' NOT NULL,
	`updated_at` integer NOT NULL
);
