import * as migration_20260819_071336 from './20260819_071336';
import * as migration_20260821_101856 from './20260821_101856';

export const migrations = [
  {
    up: migration_20260819_071336.up,
    down: migration_20260819_071336.down,
    name: '20260819_071336',
  },
  {
    up: migration_20260821_101856.up,
    down: migration_20260821_101856.down,
    name: '20260821_101856'
  },
];
