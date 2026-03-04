import * as migration_20260303_160849 from './20260303_160849';

export const migrations = [
  {
    up: migration_20260303_160849.up,
    down: migration_20260303_160849.down,
    name: '20260303_160849'
  },
];
