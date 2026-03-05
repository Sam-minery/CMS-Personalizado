import * as migration_20260303_160849 from './20260303_160849';
import * as migration_20260305_155202 from './20260305_155202';

export const migrations = [
  {
    up: migration_20260303_160849.up,
    down: migration_20260303_160849.down,
    name: '20260303_160849',
  },
  {
    up: migration_20260305_155202.up,
    down: migration_20260305_155202.down,
    name: '20260305_155202'
  },
];
