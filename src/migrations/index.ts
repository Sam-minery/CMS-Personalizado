import * as migration_20250930_142134_init from './20250930_142134_init';

export const migrations = [
  {
    up: migration_20250930_142134_init.up,
    down: migration_20250930_142134_init.down,
    name: '20250930_142134_init'
  },
];
