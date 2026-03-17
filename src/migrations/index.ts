import * as migration_20260303_160849 from './20260303_160849';
import * as migration_20260305_155202 from './20260305_155202';
import * as migration_20260305_190745 from './20260305_190745';
import * as migration_20260309_111550 from './20260309_111550';
import * as migration_20260311_113054 from './20260311_113054';
import * as migration_20260316_094249 from './20260316_094249';
import * as migration_20260317_103922 from './20260317_103922';

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
    up: migration_20260311_113054.up,
    down: migration_20260311_113054.down,
    name: '20260311_113054',
  },
  {
    up: migration_20260316_094249.up,
    down: migration_20260316_094249.down,
    name: '20260316_094249',
  },
  {
    up: migration_20260317_103922.up,
    down: migration_20260317_103922.down,
    name: '20260317_103922'
  },
];
