import * as migration_20250916_103935 from './20250916_103935';
import * as migration_20250925_120238 from './20250925_120238';

export const migrations = [
  {
    up: migration_20250916_103935.up,
    down: migration_20250916_103935.down,
    name: '20250916_103935',
  },
  {
    up: migration_20250925_120238.up,
    down: migration_20250925_120238.down,
    name: '20250925_120238'
  },
];
