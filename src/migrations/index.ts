import * as migration_20250916_103935 from './20250916_103935';
import * as migration_20250929_163439 from './20250929_163439';
import * as migration_20250929_170033 from './20250929_170033';

export const migrations = [
  {
    up: migration_20250916_103935.up,
    down: migration_20250916_103935.down,
    name: '20250916_103935',
  },
  {
    up: migration_20250929_163439.up,
    down: migration_20250929_163439.down,
    name: '20250929_163439',
  },
  {
    up: migration_20250929_170033.up,
    down: migration_20250929_170033.down,
    name: '20250929_170033'
  },
];
