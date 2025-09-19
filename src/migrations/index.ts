import * as migration_20250916_103935 from './20250916_103935';

export const migrations = [
  {
    up: migration_20250916_103935.up,
    down: migration_20250916_103935.down,
    name: '20250916_103935'
  },
];
