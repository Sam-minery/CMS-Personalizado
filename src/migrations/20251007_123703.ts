import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_text_reveal_card_background_color" AS ENUM('dark', 'slate-950', 'zinc-950', 'gray-950', 'neutral-950');
  CREATE TYPE "public"."enum_text_reveal_card_height" AS ENUM('30rem', '40rem', '50rem', '60rem', 'screen');
  CREATE TYPE "public"."enum__text_reveal_card_v_background_color" AS ENUM('dark', 'slate-950', 'zinc-950', 'gray-950', 'neutral-950');
  CREATE TYPE "public"."enum__text_reveal_card_v_height" AS ENUM('30rem', '40rem', '50rem', '60rem', 'screen');
  CREATE TABLE "text_reveal_card" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar DEFAULT 'Sometimes, you just need to see it.',
  	"description" varchar DEFAULT 'This is a text reveal card. Hover over the card to reveal the hidden text.',
  	"visible_text" varchar DEFAULT 'You know the business',
  	"reveal_text" varchar DEFAULT 'I know the chemistry',
  	"background_color" "enum_text_reveal_card_background_color" DEFAULT 'dark',
  	"height" "enum_text_reveal_card_height" DEFAULT '40rem',
  	"block_name" varchar
  );
  
  CREATE TABLE "_text_reveal_card_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar DEFAULT 'Sometimes, you just need to see it.',
  	"description" varchar DEFAULT 'This is a text reveal card. Hover over the card to reveal the hidden text.',
  	"visible_text" varchar DEFAULT 'You know the business',
  	"reveal_text" varchar DEFAULT 'I know the chemistry',
  	"background_color" "enum__text_reveal_card_v_background_color" DEFAULT 'dark',
  	"height" "enum__text_reveal_card_v_height" DEFAULT '40rem',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  ALTER TABLE "text_reveal_card" ADD CONSTRAINT "text_reveal_card_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_text_reveal_card_v" ADD CONSTRAINT "_text_reveal_card_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "text_reveal_card_order_idx" ON "text_reveal_card" USING btree ("_order");
  CREATE INDEX "text_reveal_card_parent_id_idx" ON "text_reveal_card" USING btree ("_parent_id");
  CREATE INDEX "text_reveal_card_path_idx" ON "text_reveal_card" USING btree ("_path");
  CREATE INDEX "_text_reveal_card_v_order_idx" ON "_text_reveal_card_v" USING btree ("_order");
  CREATE INDEX "_text_reveal_card_v_parent_id_idx" ON "_text_reveal_card_v" USING btree ("_parent_id");
  CREATE INDEX "_text_reveal_card_v_path_idx" ON "_text_reveal_card_v" USING btree ("_path");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   DROP TABLE "text_reveal_card" CASCADE;
  DROP TABLE "_text_reveal_card_v" CASCADE;
  DROP TYPE "public"."enum_text_reveal_card_background_color";
  DROP TYPE "public"."enum_text_reveal_card_height";
  DROP TYPE "public"."enum__text_reveal_card_v_background_color";
  DROP TYPE "public"."enum__text_reveal_card_v_height";`)
}
