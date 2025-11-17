import * as migration_20251112_110151 from './20251112_110151';

export const migrations = [
  {
    up: migration_20251112_110151.up,
    down: migration_20251112_110151.down,
    name: '20251112_110151',
  },
];
