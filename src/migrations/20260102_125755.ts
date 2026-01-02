import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "footer" ALTER COLUMN "footer_template_config_footer_text" SET DEFAULT '© 2026 Agenforce AI. All rights reserved.';`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "footer" ALTER COLUMN "footer_template_config_footer_text" SET DEFAULT '© 2025 Agenforce AI. All rights reserved.';`)
}
