import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "pages_blocks_svg_mask_effect" ADD COLUMN "additional_text" varchar DEFAULT 'with native CSS variables and container queries with';
  ALTER TABLE "_pages_v_blocks_svg_mask_effect" ADD COLUMN "additional_text" varchar DEFAULT 'with native CSS variables and container queries with';`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "pages_blocks_svg_mask_effect" DROP COLUMN "additional_text";
  ALTER TABLE "_pages_v_blocks_svg_mask_effect" DROP COLUMN "additional_text";`)
}
