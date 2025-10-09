import * as migration_20250930_142134_init from './20250930_142134_init';
import * as migration_20251001_105616 from './20251001_105616';
import * as migration_20251001_115518 from './20251001_115518';
import * as migration_20251002_113218 from './20251002_113218';
import * as migration_20251002_114100 from './20251002_114100';
import * as migration_20251002_114340 from './20251002_114340';
import * as migration_20251002_115547 from './20251002_115547';
import * as migration_20251002_120638 from './20251002_120638';
import * as migration_20251002_124346 from './20251002_124346';
import * as migration_20251002_130228 from './20251002_130228';
import * as migration_20251006_130041 from './20251006_130041';
import * as migration_20251007_111414 from './20251007_111414';
import * as migration_20251007_113851 from './20251007_113851';
import * as migration_20251007_122243 from './20251007_122243';
import * as migration_20251007_123703 from './20251007_123703';

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
    up: migration_20251002_113218.up,
    down: migration_20251002_113218.down,
    name: '20251002_113218',
  },
  {
    up: migration_20251002_114100.up,
    down: migration_20251002_114100.down,
    name: '20251002_114100',
  },
  {
    up: migration_20251002_114340.up,
    down: migration_20251002_114340.down,
    name: '20251002_114340',
  },
  {
    up: migration_20251002_115547.up,
    down: migration_20251002_115547.down,
    name: '20251002_115547',
  },
  {
    up: migration_20251002_120638.up,
    down: migration_20251002_120638.down,
    name: '20251002_120638',
  },
  {
    up: migration_20251002_124346.up,
    down: migration_20251002_124346.down,
    name: '20251002_124346',
  },
  {
    up: migration_20251002_130228.up,
    down: migration_20251002_130228.down,
    name: '20251002_130228',
  },
  {
    up: migration_20251006_130041.up,
    down: migration_20251006_130041.down,
    name: '20251006_130041',
  },
  {
    up: migration_20251007_111414.up,
    down: migration_20251007_111414.down,
    name: '20251007_111414',
  },
  {
    up: migration_20251007_113851.up,
    down: migration_20251007_113851.down,
    name: '20251007_113851',
  },
  {
    up: migration_20251007_122243.up,
    down: migration_20251007_122243.down,
    name: '20251007_122243',
  },
  {
    up: migration_20251007_123703.up,
    down: migration_20251007_123703.down,
    name: '20251007_123703'
  },
];
