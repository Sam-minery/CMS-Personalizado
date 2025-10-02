import * as migration_20250930_142134_init from './20250930_142134_init';
import * as migration_20251001_105616 from './20251001_105616';
import * as migration_20251001_115518 from './20251001_115518';
import * as migration_20251002_114340 from './20251002_114340';
import * as migration_20251002_120638 from './20251002_120638';

export const migrations = [
  {
    up: migration_20250930_142134_init.up,
    down: migration_20250930_142134_init.down,
    name: '20250930_142134_init',
  },
  {
    up: migration_20251001_105616.up,
    down: migration_20251001_105616.down,
    name: '20251001_105616',
  },
  {
    up: migration_20251001_115518.up,
    down: migration_20251001_115518.down,
    name: '20251001_115518',
  },
  {
    up: migration_20251002_114340.up,
    down: migration_20251002_114340.down,
    name: '20251002_114340',
  },
  {
    up: migration_20251002_120638.up,
    down: migration_20251002_120638.down,
    name: '20251002_120638'
  },
];
