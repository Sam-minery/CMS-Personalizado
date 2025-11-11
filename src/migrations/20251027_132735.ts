import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_pages_blocks_card_stack_height" AS ENUM('h-[30rem]', 'h-[40rem]', 'h-[50rem]', 'h-auto');
  CREATE TYPE "public"."enum__pages_v_blocks_card_stack_height" AS ENUM('h-[30rem]', 'h-[40rem]', 'h-[50rem]', 'h-auto');
  CREATE TABLE "pages_blocks_card_stack_cards" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"name" varchar,
  	"designation" varchar,
  	"content" varchar
  );
  
  CREATE TABLE "pages_blocks_card_stack" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"height" "enum_pages_blocks_card_stack_height" DEFAULT 'h-[40rem]',
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_card_stack_cards" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"name" varchar,
  	"designation" varchar,
  	"content" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_card_stack" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"height" "enum__pages_v_blocks_card_stack_height" DEFAULT 'h-[40rem]',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  ALTER TABLE "pages_blocks_card_stack_cards" ADD CONSTRAINT "pages_blocks_card_stack_cards_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_card_stack"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_card_stack" ADD CONSTRAINT "pages_blocks_card_stack_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_card_stack_cards" ADD CONSTRAINT "_pages_v_blocks_card_stack_cards_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_card_stack"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_card_stack" ADD CONSTRAINT "_pages_v_blocks_card_stack_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "pages_blocks_card_stack_cards_order_idx" ON "pages_blocks_card_stack_cards" USING btree ("_order");
  CREATE INDEX "pages_blocks_card_stack_cards_parent_id_idx" ON "pages_blocks_card_stack_cards" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_card_stack_order_idx" ON "pages_blocks_card_stack" USING btree ("_order");
  CREATE INDEX "pages_blocks_card_stack_parent_id_idx" ON "pages_blocks_card_stack" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_card_stack_path_idx" ON "pages_blocks_card_stack" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_card_stack_cards_order_idx" ON "_pages_v_blocks_card_stack_cards" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_card_stack_cards_parent_id_idx" ON "_pages_v_blocks_card_stack_cards" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_card_stack_order_idx" ON "_pages_v_blocks_card_stack" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_card_stack_parent_id_idx" ON "_pages_v_blocks_card_stack" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_card_stack_path_idx" ON "_pages_v_blocks_card_stack" USING btree ("_path");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   DROP TABLE "pages_blocks_card_stack_cards" CASCADE;
  DROP TABLE "pages_blocks_card_stack" CASCADE;
  DROP TABLE "_pages_v_blocks_card_stack_cards" CASCADE;
  DROP TABLE "_pages_v_blocks_card_stack" CASCADE;
  DROP TYPE "public"."enum_pages_blocks_card_stack_height";
  DROP TYPE "public"."enum__pages_v_blocks_card_stack_height";`)
}
