import * as migration_20260819_071336 from './20260819_071336';
import * as migration_20260821_101856 from './20260821_101856';
import * as migration_20260821_104850 from './20260821_104850';
import * as migration_20260821_124041 from './20260821_124041';
import * as migration_20260826_100938 from './20260826_100938';

export const migrations = [
  {
    up: migration_20260819_071336.up,
    down: migration_20260819_071336.down,
    name: '20260819_071336',
  },
  {
    up: migration_20260821_101856.up,
    down: migration_20260821_101856.down,
    name: '20260821_101856',
  },
  {
    up: migration_20260821_104850.up,
    down: migration_20260821_104850.down,
    name: '20260821_104850',
  },
  {
    up: migration_20260821_124041.up,
    down: migration_20260821_124041.down,
    name: '20260821_124041',
  },
  {
    up: migration_20260826_100938.up,
    down: migration_20260826_100938.down,
    name: '20260826_100938'
  },
];
