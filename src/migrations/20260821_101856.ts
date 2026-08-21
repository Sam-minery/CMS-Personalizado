import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "l2d" ADD COLUMN "apply_custom_width" boolean DEFAULT false;
  ALTER TABLE "l2d" ADD COLUMN "custom_width_percent" numeric DEFAULT 100;
  ALTER TABLE "l2d" ADD COLUMN "custom_width_percent_mobile" numeric;
  ALTER TABLE "pd" ADD COLUMN "apply_custom_width" boolean DEFAULT false;
  ALTER TABLE "pd" ADD COLUMN "custom_width_percent" numeric DEFAULT 100;
  ALTER TABLE "pd" ADD COLUMN "custom_width_percent_mobile" numeric;
  ALTER TABLE "fqd" ADD COLUMN "apply_custom_width" boolean DEFAULT false;
  ALTER TABLE "fqd" ADD COLUMN "custom_width_percent" numeric DEFAULT 100;
  ALTER TABLE "fqd" ADD COLUMN "custom_width_percent_mobile" numeric;
  ALTER TABLE "_l2d_v" ADD COLUMN "apply_custom_width" boolean DEFAULT false;
  ALTER TABLE "_l2d_v" ADD COLUMN "custom_width_percent" numeric DEFAULT 100;
  ALTER TABLE "_l2d_v" ADD COLUMN "custom_width_percent_mobile" numeric;
  ALTER TABLE "_pd_v" ADD COLUMN "apply_custom_width" boolean DEFAULT false;
  ALTER TABLE "_pd_v" ADD COLUMN "custom_width_percent" numeric DEFAULT 100;
  ALTER TABLE "_pd_v" ADD COLUMN "custom_width_percent_mobile" numeric;
  ALTER TABLE "_fqd_v" ADD COLUMN "apply_custom_width" boolean DEFAULT false;
  ALTER TABLE "_fqd_v" ADD COLUMN "custom_width_percent" numeric DEFAULT 100;
  ALTER TABLE "_fqd_v" ADD COLUMN "custom_width_percent_mobile" numeric;`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "l2d" DROP COLUMN "apply_custom_width";
  ALTER TABLE "l2d" DROP COLUMN "custom_width_percent";
  ALTER TABLE "l2d" DROP COLUMN "custom_width_percent_mobile";
  ALTER TABLE "pd" DROP COLUMN "apply_custom_width";
  ALTER TABLE "pd" DROP COLUMN "custom_width_percent";
  ALTER TABLE "pd" DROP COLUMN "custom_width_percent_mobile";
  ALTER TABLE "fqd" DROP COLUMN "apply_custom_width";
  ALTER TABLE "fqd" DROP COLUMN "custom_width_percent";
  ALTER TABLE "fqd" DROP COLUMN "custom_width_percent_mobile";
  ALTER TABLE "_l2d_v" DROP COLUMN "apply_custom_width";
  ALTER TABLE "_l2d_v" DROP COLUMN "custom_width_percent";
  ALTER TABLE "_l2d_v" DROP COLUMN "custom_width_percent_mobile";
  ALTER TABLE "_pd_v" DROP COLUMN "apply_custom_width";
  ALTER TABLE "_pd_v" DROP COLUMN "custom_width_percent";
  ALTER TABLE "_pd_v" DROP COLUMN "custom_width_percent_mobile";
  ALTER TABLE "_fqd_v" DROP COLUMN "apply_custom_width";
  ALTER TABLE "_fqd_v" DROP COLUMN "custom_width_percent";
  ALTER TABLE "_fqd_v" DROP COLUMN "custom_width_percent_mobile";`)
}
