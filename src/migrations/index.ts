import * as migration_20260303_160849 from './20260303_160849';
import * as migration_20260305_155202 from './20260305_155202';
import * as migration_20260305_190745 from './20260305_190745';
import * as migration_20260309_111550 from './20260309_111550';
import * as migration_20260312_120453 from './20260312_120453';
import * as migration_20260313_111504 from './20260313_111504';
import * as migration_20260316_173933 from './20260316_173933';
import * as migration_20260318_093925 from './20260318_093925';

export const migrations = [
  {
    up: migration_20260303_160849.up,
    down: migration_20260303_160849.down,
    name: '20260303_160849',
  },
  {
    up: migration_20260305_155202.up,
    down: migration_20260305_155202.down,
    name: '20260305_155202',
  },
  {
    up: migration_20260305_190745.up,
    down: migration_20260305_190745.down,
    name: '20260305_190745',
  },
  {
    up: migration_20260309_111550.up,
    down: migration_20260309_111550.down,
    name: '20260309_111550',
  },
  {
    up: migration_20260312_120453.up,
    down: migration_20260312_120453.down,
    name: '20260312_120453',
  },
  {
    up: migration_20260313_111504.up,
    down: migration_20260313_111504.down,
    name: '20260313_111504',
  },
  {
    up: migration_20260316_173933.up,
    down: migration_20260316_173933.down,
    name: '20260316_173933',
  },
  {
    up: migration_20260318_093925.up,
    down: migration_20260318_093925.down,
    name: '20260318_093925'
  },
];
