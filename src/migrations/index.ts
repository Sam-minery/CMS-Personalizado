import * as migration_20251020_105746_initial from './20251020_105746_initial';

export const migrations = [
  {
    up: migration_20251020_105746_initial.up,
    down: migration_20251020_105746_initial.down,
    name: '20251020_105746_initial'
  },
];
