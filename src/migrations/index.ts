import * as migration_20260805_164347_initial from './20260805_164347_initial';
import * as migration_20260807_094132 from './20260807_094132';
import * as migration_20260807_101942_limpieza_senda from './20260807_101942_limpieza_senda';
import * as migration_20260810_095319 from './20260810_095319';
import * as migration_20260812_092404 from './20260812_092404';
import * as migration_20260812_115427 from './20260812_115427';

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
    up: migration_20260812_092404.up,
    down: migration_20260812_092404.down,
    name: '20260812_092404',
  },
  {
    up: migration_20260812_115427.up,
    down: migration_20260812_115427.down,
    name: '20260812_115427'
  },
];
