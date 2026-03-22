import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "cta1_alt" ADD COLUMN "use_font_group" boolean DEFAULT false;
  ALTER TABLE "cta1_alt" ADD COLUMN "font_group_id" integer;
  ALTER TABLE "pages_blocks_cta2_senda" ADD COLUMN "use_font_group" boolean DEFAULT false;
  ALTER TABLE "pages_blocks_cta2_senda" ADD COLUMN "font_group_id" integer;
  ALTER TABLE "pages_blocks_cards_senda" ADD COLUMN "use_font_group" boolean DEFAULT false;
  ALTER TABLE "pages_blocks_cards_senda" ADD COLUMN "font_group_id" integer;
  ALTER TABLE "pages_blocks_layout_senda" ADD COLUMN "use_font_group" boolean DEFAULT false;
  ALTER TABLE "pages_blocks_layout_senda" ADD COLUMN "font_group_id" integer;
  ALTER TABLE "pages_blocks_layout_senda_sections" ADD COLUMN "use_font_group" boolean DEFAULT false;
  ALTER TABLE "pages_blocks_layout_senda_sections" ADD COLUMN "font_group_id" integer;
  ALTER TABLE "pages_blocks_faq_senda" ADD COLUMN "use_font_group" boolean DEFAULT false;
  ALTER TABLE "pages_blocks_faq_senda" ADD COLUMN "font_group_id" integer;
  ALTER TABLE "pages_blocks_testimonials_senda" ADD COLUMN "use_font_group" boolean DEFAULT false;
  ALTER TABLE "pages_blocks_testimonials_senda" ADD COLUMN "font_group_id" integer;
  ALTER TABLE "_cta1_alt_v" ADD COLUMN "use_font_group" boolean DEFAULT false;
  ALTER TABLE "_cta1_alt_v" ADD COLUMN "font_group_id" integer;
  ALTER TABLE "_pages_v_blocks_cta2_senda" ADD COLUMN "use_font_group" boolean DEFAULT false;
  ALTER TABLE "_pages_v_blocks_cta2_senda" ADD COLUMN "font_group_id" integer;
  ALTER TABLE "_pages_v_blocks_cards_senda" ADD COLUMN "use_font_group" boolean DEFAULT false;
  ALTER TABLE "_pages_v_blocks_cards_senda" ADD COLUMN "font_group_id" integer;
  ALTER TABLE "_pages_v_blocks_layout_senda" ADD COLUMN "use_font_group" boolean DEFAULT false;
  ALTER TABLE "_pages_v_blocks_layout_senda" ADD COLUMN "font_group_id" integer;
  ALTER TABLE "_pages_v_blocks_layout_senda_sections" ADD COLUMN "use_font_group" boolean DEFAULT false;
  ALTER TABLE "_pages_v_blocks_layout_senda_sections" ADD COLUMN "font_group_id" integer;
  ALTER TABLE "_pages_v_blocks_faq_senda" ADD COLUMN "use_font_group" boolean DEFAULT false;
  ALTER TABLE "_pages_v_blocks_faq_senda" ADD COLUMN "font_group_id" integer;
  ALTER TABLE "_pages_v_blocks_testimonials_senda" ADD COLUMN "use_font_group" boolean DEFAULT false;
  ALTER TABLE "_pages_v_blocks_testimonials_senda" ADD COLUMN "font_group_id" integer;
  ALTER TABLE "cta1_alt" ADD CONSTRAINT "cta1_alt_font_group_id_font_groups_id_fk" FOREIGN KEY ("font_group_id") REFERENCES "public"."font_groups"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_cta2_senda" ADD CONSTRAINT "pages_blocks_cta2_senda_font_group_id_font_groups_id_fk" FOREIGN KEY ("font_group_id") REFERENCES "public"."font_groups"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_cards_senda" ADD CONSTRAINT "pages_blocks_cards_senda_font_group_id_font_groups_id_fk" FOREIGN KEY ("font_group_id") REFERENCES "public"."font_groups"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_layout_senda" ADD CONSTRAINT "pages_blocks_layout_senda_font_group_id_font_groups_id_fk" FOREIGN KEY ("font_group_id") REFERENCES "public"."font_groups"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_layout_senda_sections" ADD CONSTRAINT "pages_blocks_layout_senda_sections_font_group_id_font_groups_id_fk" FOREIGN KEY ("font_group_id") REFERENCES "public"."font_groups"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_faq_senda" ADD CONSTRAINT "pages_blocks_faq_senda_font_group_id_font_groups_id_fk" FOREIGN KEY ("font_group_id") REFERENCES "public"."font_groups"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_testimonials_senda" ADD CONSTRAINT "pages_blocks_testimonials_senda_font_group_id_font_groups_id_fk" FOREIGN KEY ("font_group_id") REFERENCES "public"."font_groups"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_cta1_alt_v" ADD CONSTRAINT "_cta1_alt_v_font_group_id_font_groups_id_fk" FOREIGN KEY ("font_group_id") REFERENCES "public"."font_groups"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_cta2_senda" ADD CONSTRAINT "_pages_v_blocks_cta2_senda_font_group_id_font_groups_id_fk" FOREIGN KEY ("font_group_id") REFERENCES "public"."font_groups"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_cards_senda" ADD CONSTRAINT "_pages_v_blocks_cards_senda_font_group_id_font_groups_id_fk" FOREIGN KEY ("font_group_id") REFERENCES "public"."font_groups"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_layout_senda" ADD CONSTRAINT "_pages_v_blocks_layout_senda_font_group_id_font_groups_id_fk" FOREIGN KEY ("font_group_id") REFERENCES "public"."font_groups"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_layout_senda_sections" ADD CONSTRAINT "_pages_v_blocks_layout_senda_sections_font_group_id_font_groups_id_fk" FOREIGN KEY ("font_group_id") REFERENCES "public"."font_groups"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_faq_senda" ADD CONSTRAINT "_pages_v_blocks_faq_senda_font_group_id_font_groups_id_fk" FOREIGN KEY ("font_group_id") REFERENCES "public"."font_groups"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_testimonials_senda" ADD CONSTRAINT "_pages_v_blocks_testimonials_senda_font_group_id_font_groups_id_fk" FOREIGN KEY ("font_group_id") REFERENCES "public"."font_groups"("id") ON DELETE set null ON UPDATE no action;
  CREATE INDEX "cta1_alt_font_group_idx" ON "cta1_alt" USING btree ("font_group_id");
  CREATE INDEX "pages_blocks_cta2_senda_font_group_idx" ON "pages_blocks_cta2_senda" USING btree ("font_group_id");
  CREATE INDEX "pages_blocks_cards_senda_font_group_idx" ON "pages_blocks_cards_senda" USING btree ("font_group_id");
  CREATE INDEX "pages_blocks_layout_senda_font_group_idx" ON "pages_blocks_layout_senda" USING btree ("font_group_id");
  CREATE INDEX "pages_blocks_layout_senda_sections_font_group_idx" ON "pages_blocks_layout_senda_sections" USING btree ("font_group_id");
  CREATE INDEX "pages_blocks_faq_senda_font_group_idx" ON "pages_blocks_faq_senda" USING btree ("font_group_id");
  CREATE INDEX "pages_blocks_testimonials_senda_font_group_idx" ON "pages_blocks_testimonials_senda" USING btree ("font_group_id");
  CREATE INDEX "_cta1_alt_v_font_group_idx" ON "_cta1_alt_v" USING btree ("font_group_id");
  CREATE INDEX "_pages_v_blocks_cta2_senda_font_group_idx" ON "_pages_v_blocks_cta2_senda" USING btree ("font_group_id");
  CREATE INDEX "_pages_v_blocks_cards_senda_font_group_idx" ON "_pages_v_blocks_cards_senda" USING btree ("font_group_id");
  CREATE INDEX "_pages_v_blocks_layout_senda_font_group_idx" ON "_pages_v_blocks_layout_senda" USING btree ("font_group_id");
  CREATE INDEX "_pages_v_blocks_layout_senda_sections_font_group_idx" ON "_pages_v_blocks_layout_senda_sections" USING btree ("font_group_id");
  CREATE INDEX "_pages_v_blocks_faq_senda_font_group_idx" ON "_pages_v_blocks_faq_senda" USING btree ("font_group_id");
  CREATE INDEX "_pages_v_blocks_testimonials_senda_font_group_idx" ON "_pages_v_blocks_testimonials_senda" USING btree ("font_group_id");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "cta1_alt" DROP CONSTRAINT "cta1_alt_font_group_id_font_groups_id_fk";
  
  ALTER TABLE "pages_blocks_cta2_senda" DROP CONSTRAINT "pages_blocks_cta2_senda_font_group_id_font_groups_id_fk";
  
  ALTER TABLE "pages_blocks_cards_senda" DROP CONSTRAINT "pages_blocks_cards_senda_font_group_id_font_groups_id_fk";
  
  ALTER TABLE "pages_blocks_layout_senda" DROP CONSTRAINT "pages_blocks_layout_senda_font_group_id_font_groups_id_fk";
  
  ALTER TABLE "pages_blocks_layout_senda_sections" DROP CONSTRAINT "pages_blocks_layout_senda_sections_font_group_id_font_groups_id_fk";
  
  ALTER TABLE "pages_blocks_faq_senda" DROP CONSTRAINT "pages_blocks_faq_senda_font_group_id_font_groups_id_fk";
  
  ALTER TABLE "pages_blocks_testimonials_senda" DROP CONSTRAINT "pages_blocks_testimonials_senda_font_group_id_font_groups_id_fk";
  
  ALTER TABLE "_cta1_alt_v" DROP CONSTRAINT "_cta1_alt_v_font_group_id_font_groups_id_fk";
  
  ALTER TABLE "_pages_v_blocks_cta2_senda" DROP CONSTRAINT "_pages_v_blocks_cta2_senda_font_group_id_font_groups_id_fk";
  
  ALTER TABLE "_pages_v_blocks_cards_senda" DROP CONSTRAINT "_pages_v_blocks_cards_senda_font_group_id_font_groups_id_fk";
  
  ALTER TABLE "_pages_v_blocks_layout_senda" DROP CONSTRAINT "_pages_v_blocks_layout_senda_font_group_id_font_groups_id_fk";
  
  ALTER TABLE "_pages_v_blocks_layout_senda_sections" DROP CONSTRAINT "_pages_v_blocks_layout_senda_sections_font_group_id_font_groups_id_fk";
  
  ALTER TABLE "_pages_v_blocks_faq_senda" DROP CONSTRAINT "_pages_v_blocks_faq_senda_font_group_id_font_groups_id_fk";
  
  ALTER TABLE "_pages_v_blocks_testimonials_senda" DROP CONSTRAINT "_pages_v_blocks_testimonials_senda_font_group_id_font_groups_id_fk";
  
  DROP INDEX "cta1_alt_font_group_idx";
  DROP INDEX "pages_blocks_cta2_senda_font_group_idx";
  DROP INDEX "pages_blocks_cards_senda_font_group_idx";
  DROP INDEX "pages_blocks_layout_senda_font_group_idx";
  DROP INDEX "pages_blocks_layout_senda_sections_font_group_idx";
  DROP INDEX "pages_blocks_faq_senda_font_group_idx";
  DROP INDEX "pages_blocks_testimonials_senda_font_group_idx";
  DROP INDEX "_cta1_alt_v_font_group_idx";
  DROP INDEX "_pages_v_blocks_cta2_senda_font_group_idx";
  DROP INDEX "_pages_v_blocks_cards_senda_font_group_idx";
  DROP INDEX "_pages_v_blocks_layout_senda_font_group_idx";
  DROP INDEX "_pages_v_blocks_layout_senda_sections_font_group_idx";
  DROP INDEX "_pages_v_blocks_faq_senda_font_group_idx";
  DROP INDEX "_pages_v_blocks_testimonials_senda_font_group_idx";
  ALTER TABLE "cta1_alt" DROP COLUMN "use_font_group";
  ALTER TABLE "cta1_alt" DROP COLUMN "font_group_id";
  ALTER TABLE "pages_blocks_cta2_senda" DROP COLUMN "use_font_group";
  ALTER TABLE "pages_blocks_cta2_senda" DROP COLUMN "font_group_id";
  ALTER TABLE "pages_blocks_cards_senda" DROP COLUMN "use_font_group";
  ALTER TABLE "pages_blocks_cards_senda" DROP COLUMN "font_group_id";
  ALTER TABLE "pages_blocks_layout_senda" DROP COLUMN "use_font_group";
  ALTER TABLE "pages_blocks_layout_senda" DROP COLUMN "font_group_id";
  ALTER TABLE "pages_blocks_layout_senda_sections" DROP COLUMN "use_font_group";
  ALTER TABLE "pages_blocks_layout_senda_sections" DROP COLUMN "font_group_id";
  ALTER TABLE "pages_blocks_faq_senda" DROP COLUMN "use_font_group";
  ALTER TABLE "pages_blocks_faq_senda" DROP COLUMN "font_group_id";
  ALTER TABLE "pages_blocks_testimonials_senda" DROP COLUMN "use_font_group";
  ALTER TABLE "pages_blocks_testimonials_senda" DROP COLUMN "font_group_id";
  ALTER TABLE "_cta1_alt_v" DROP COLUMN "use_font_group";
  ALTER TABLE "_cta1_alt_v" DROP COLUMN "font_group_id";
  ALTER TABLE "_pages_v_blocks_cta2_senda" DROP COLUMN "use_font_group";
  ALTER TABLE "_pages_v_blocks_cta2_senda" DROP COLUMN "font_group_id";
  ALTER TABLE "_pages_v_blocks_cards_senda" DROP COLUMN "use_font_group";
  ALTER TABLE "_pages_v_blocks_cards_senda" DROP COLUMN "font_group_id";
  ALTER TABLE "_pages_v_blocks_layout_senda" DROP COLUMN "use_font_group";
  ALTER TABLE "_pages_v_blocks_layout_senda" DROP COLUMN "font_group_id";
  ALTER TABLE "_pages_v_blocks_layout_senda_sections" DROP COLUMN "use_font_group";
  ALTER TABLE "_pages_v_blocks_layout_senda_sections" DROP COLUMN "font_group_id";
  ALTER TABLE "_pages_v_blocks_faq_senda" DROP COLUMN "use_font_group";
  ALTER TABLE "_pages_v_blocks_faq_senda" DROP COLUMN "font_group_id";
  ALTER TABLE "_pages_v_blocks_testimonials_senda" DROP COLUMN "use_font_group";
  ALTER TABLE "_pages_v_blocks_testimonials_senda" DROP COLUMN "font_group_id";`)
}
