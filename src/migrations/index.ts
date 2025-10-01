import * as migration_20250930_142134_init from './20250930_142134_init';
import * as migration_20251001_105616 from './20251001_105616';
import * as migration_20251001_115518 from './20251001_115518';

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
    name: '20251001_115518'
  },
];
