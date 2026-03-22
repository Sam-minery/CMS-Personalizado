import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "pages_blocks_multi_form_senda" ADD COLUMN "use_font_group" boolean DEFAULT false;
  ALTER TABLE "pages_blocks_multi_form_senda" ADD COLUMN "font_group_id" integer;
  ALTER TABLE "imc_senda" ADD COLUMN "use_font_group" boolean DEFAULT false;
  ALTER TABLE "imc_senda" ADD COLUMN "font_group_id" integer;
  ALTER TABLE "pages_blocks_app_senda" ADD COLUMN "use_font_group" boolean DEFAULT false;
  ALTER TABLE "pages_blocks_app_senda" ADD COLUMN "font_group_id" integer;
  ALTER TABLE "_pages_v_blocks_multi_form_senda" ADD COLUMN "use_font_group" boolean DEFAULT false;
  ALTER TABLE "_pages_v_blocks_multi_form_senda" ADD COLUMN "font_group_id" integer;
  ALTER TABLE "_imc_senda_v" ADD COLUMN "use_font_group" boolean DEFAULT false;
  ALTER TABLE "_imc_senda_v" ADD COLUMN "font_group_id" integer;
  ALTER TABLE "_pages_v_blocks_app_senda" ADD COLUMN "use_font_group" boolean DEFAULT false;
  ALTER TABLE "_pages_v_blocks_app_senda" ADD COLUMN "font_group_id" integer;
  ALTER TABLE "footer" ADD COLUMN "footer_senda_config_use_font_group" boolean DEFAULT false;
  ALTER TABLE "footer" ADD COLUMN "footer_senda_config_font_group_id" integer;
  ALTER TABLE "pages_blocks_multi_form_senda" ADD CONSTRAINT "pages_blocks_multi_form_senda_font_group_id_font_groups_id_fk" FOREIGN KEY ("font_group_id") REFERENCES "public"."font_groups"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "imc_senda" ADD CONSTRAINT "imc_senda_font_group_id_font_groups_id_fk" FOREIGN KEY ("font_group_id") REFERENCES "public"."font_groups"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_app_senda" ADD CONSTRAINT "pages_blocks_app_senda_font_group_id_font_groups_id_fk" FOREIGN KEY ("font_group_id") REFERENCES "public"."font_groups"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_multi_form_senda" ADD CONSTRAINT "_pages_v_blocks_multi_form_senda_font_group_id_font_groups_id_fk" FOREIGN KEY ("font_group_id") REFERENCES "public"."font_groups"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_imc_senda_v" ADD CONSTRAINT "_imc_senda_v_font_group_id_font_groups_id_fk" FOREIGN KEY ("font_group_id") REFERENCES "public"."font_groups"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_app_senda" ADD CONSTRAINT "_pages_v_blocks_app_senda_font_group_id_font_groups_id_fk" FOREIGN KEY ("font_group_id") REFERENCES "public"."font_groups"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "footer" ADD CONSTRAINT "footer_footer_senda_config_font_group_id_font_groups_id_fk" FOREIGN KEY ("footer_senda_config_font_group_id") REFERENCES "public"."font_groups"("id") ON DELETE set null ON UPDATE no action;
  CREATE INDEX "pages_blocks_multi_form_senda_font_group_idx" ON "pages_blocks_multi_form_senda" USING btree ("font_group_id");
  CREATE INDEX "imc_senda_font_group_idx" ON "imc_senda" USING btree ("font_group_id");
  CREATE INDEX "pages_blocks_app_senda_font_group_idx" ON "pages_blocks_app_senda" USING btree ("font_group_id");
  CREATE INDEX "_pages_v_blocks_multi_form_senda_font_group_idx" ON "_pages_v_blocks_multi_form_senda" USING btree ("font_group_id");
  CREATE INDEX "_imc_senda_v_font_group_idx" ON "_imc_senda_v" USING btree ("font_group_id");
  CREATE INDEX "_pages_v_blocks_app_senda_font_group_idx" ON "_pages_v_blocks_app_senda" USING btree ("font_group_id");
  CREATE INDEX "footer_footer_senda_config_footer_senda_config_font_grou_idx" ON "footer" USING btree ("footer_senda_config_font_group_id");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "pages_blocks_multi_form_senda" DROP CONSTRAINT "pages_blocks_multi_form_senda_font_group_id_font_groups_id_fk";
  
  ALTER TABLE "imc_senda" DROP CONSTRAINT "imc_senda_font_group_id_font_groups_id_fk";
  
  ALTER TABLE "pages_blocks_app_senda" DROP CONSTRAINT "pages_blocks_app_senda_font_group_id_font_groups_id_fk";
  
  ALTER TABLE "_pages_v_blocks_multi_form_senda" DROP CONSTRAINT "_pages_v_blocks_multi_form_senda_font_group_id_font_groups_id_fk";
  
  ALTER TABLE "_imc_senda_v" DROP CONSTRAINT "_imc_senda_v_font_group_id_font_groups_id_fk";
  
  ALTER TABLE "_pages_v_blocks_app_senda" DROP CONSTRAINT "_pages_v_blocks_app_senda_font_group_id_font_groups_id_fk";
  
  ALTER TABLE "footer" DROP CONSTRAINT "footer_footer_senda_config_font_group_id_font_groups_id_fk";
  
  DROP INDEX "pages_blocks_multi_form_senda_font_group_idx";
  DROP INDEX "imc_senda_font_group_idx";
  DROP INDEX "pages_blocks_app_senda_font_group_idx";
  DROP INDEX "_pages_v_blocks_multi_form_senda_font_group_idx";
  DROP INDEX "_imc_senda_v_font_group_idx";
  DROP INDEX "_pages_v_blocks_app_senda_font_group_idx";
  DROP INDEX "footer_footer_senda_config_footer_senda_config_font_grou_idx";
  ALTER TABLE "pages_blocks_multi_form_senda" DROP COLUMN "use_font_group";
  ALTER TABLE "pages_blocks_multi_form_senda" DROP COLUMN "font_group_id";
  ALTER TABLE "imc_senda" DROP COLUMN "use_font_group";
  ALTER TABLE "imc_senda" DROP COLUMN "font_group_id";
  ALTER TABLE "pages_blocks_app_senda" DROP COLUMN "use_font_group";
  ALTER TABLE "pages_blocks_app_senda" DROP COLUMN "font_group_id";
  ALTER TABLE "_pages_v_blocks_multi_form_senda" DROP COLUMN "use_font_group";
  ALTER TABLE "_pages_v_blocks_multi_form_senda" DROP COLUMN "font_group_id";
  ALTER TABLE "_imc_senda_v" DROP COLUMN "use_font_group";
  ALTER TABLE "_imc_senda_v" DROP COLUMN "font_group_id";
  ALTER TABLE "_pages_v_blocks_app_senda" DROP COLUMN "use_font_group";
  ALTER TABLE "_pages_v_blocks_app_senda" DROP COLUMN "font_group_id";
  ALTER TABLE "footer" DROP COLUMN "footer_senda_config_use_font_group";
  ALTER TABLE "footer" DROP COLUMN "footer_senda_config_font_group_id";`)
}
