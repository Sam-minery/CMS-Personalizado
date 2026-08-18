import * as migration_20260805_164347_initial from './20260805_164347_initial';
import * as migration_20260807_094132 from './20260807_094132';
import * as migration_20260807_101942_limpieza_senda from './20260807_101942_limpieza_senda';
import * as migration_20260810_095319 from './20260810_095319';
import * as migration_20260810_135955 from './20260810_135955';
import * as migration_20260812_131840 from './20260812_131840';
import * as migration_20260814_101355 from './20260814_101355';
import * as migration_20260814_125020 from './20260814_125020';

export const migrations = [
  {
    up: migration_20260805_164347_initial.up,
    down: migration_20260805_164347_initial.down,
    name: '20260805_164347_initial',
  },
  {
    up: migration_20260807_094132.up,
    down: migration_20260807_094132.down,
    name: '20260807_094132',
  },
  {
    up: migration_20260807_101942_limpieza_senda.up,
    down: migration_20260807_101942_limpieza_senda.down,
    name: '20260807_101942_limpieza_senda',
  },
  {
    up: migration_20260810_095319.up,
    down: migration_20260810_095319.down,
    name: '20260810_095319',
  },
  {
    up: migration_20260810_135955.up,
    down: migration_20260810_135955.down,
    name: '20260810_135955',
  },
  {
    up: migration_20260812_131840.up,
    down: migration_20260812_131840.down,
    name: '20260812_131840',
  },
  {
    up: migration_20260814_101355.up,
    down: migration_20260814_101355.down,
    name: '20260814_101355',
  },
  {
    up: migration_20260814_125020.up,
    down: migration_20260814_125020.down,
    name: '20260814_125020'
  },
];
