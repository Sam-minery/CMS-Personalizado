import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "cta1_alt" ADD COLUMN "videocall_section_quitar_seccion" boolean DEFAULT false;
  ALTER TABLE "_cta1_alt_v" ADD COLUMN "videocall_section_quitar_seccion" boolean DEFAULT false;`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "cta1_alt" DROP COLUMN "videocall_section_quitar_seccion";
  ALTER TABLE "_cta1_alt_v" DROP COLUMN "videocall_section_quitar_seccion";`)
}
