import * as migration_20250916_103935 from './20250916_103935';
import * as migration_20250925_120238 from './20250925_120238';
import * as migration_20250925_124228 from './20250925_124228';
import * as migration_20250929_141041 from './20250929_141041';
import * as migration_20250930_085739 from './20250930_085739';

export const migrations = [
  {
    up: migration_20250916_103935.up,
    down: migration_20250916_103935.down,
    name: '20250916_103935',
  },
  {
    up: migration_20250925_120238.up,
    down: migration_20250925_120238.down,
    name: '20250925_120238',
  },
  {
    up: migration_20250925_124228.up,
    down: migration_20250925_124228.down,
    name: '20250925_124228',
  },
  {
    up: migration_20250929_141041.up,
    down: migration_20250929_141041.down,
    name: '20250929_141041',
  },
  {
    up: migration_20250930_085739.up,
    down: migration_20250930_085739.down,
    name: '20250930_085739'
  },
];
