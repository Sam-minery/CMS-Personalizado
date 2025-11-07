import * as migration_20251020_105746_initial from './20251020_105746_initial';
import * as migration_20251029_143818 from './20251029_143818';
import * as migration_20251031_120906 from './20251031_120906';
import * as migration_20251104_132513 from './20251104_132513';
import * as migration_20251105_125858 from './20251105_125858';
import * as migration_20251106_105658 from './20251106_105658';
import * as migration_20251106_110758 from './20251106_110758';
import * as migration_20251106_121306 from './20251106_121306';
import * as migration_20251106_125941 from './20251106_125941';
import * as migration_20251106_155417 from './20251106_155417';
import * as migration_20251106_163015 from './20251106_163015';
import * as migration_20251107_105251 from './20251107_105251';

export const migrations = [
  {
    up: migration_20251020_105746_initial.up,
    down: migration_20251020_105746_initial.down,
    name: '20251020_105746_initial',
  },
  {
    up: migration_20251029_143818.up,
    down: migration_20251029_143818.down,
    name: '20251029_143818',
  },
  {
    up: migration_20251031_120906.up,
    down: migration_20251031_120906.down,
    name: '20251031_120906',
  },
  {
    up: migration_20251104_132513.up,
    down: migration_20251104_132513.down,
    name: '20251104_132513',
  },
  {
    up: migration_20251105_125858.up,
    down: migration_20251105_125858.down,
    name: '20251105_125858',
  },
  {
    up: migration_20251106_105658.up,
    down: migration_20251106_105658.down,
    name: '20251106_105658',
  },
  {
    up: migration_20251106_110758.up,
    down: migration_20251106_110758.down,
    name: '20251106_110758',
  },
  {
    up: migration_20251106_121306.up,
    down: migration_20251106_121306.down,
    name: '20251106_121306',
  },
  {
    up: migration_20251106_125941.up,
    down: migration_20251106_125941.down,
    name: '20251106_125941',
  },
  {
    up: migration_20251106_155417.up,
    down: migration_20251106_155417.down,
    name: '20251106_155417',
  },
  {
    up: migration_20251106_163015.up,
    down: migration_20251106_163015.down,
    name: '20251106_163015',
  },
  {
    up: migration_20251107_105251.up,
    down: migration_20251107_105251.down,
    name: '20251107_105251'
  },
];
