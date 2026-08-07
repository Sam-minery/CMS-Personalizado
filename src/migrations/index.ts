import * as migration_20260805_164347_initial from './20260805_164347_initial';
import * as migration_20260807_094132 from './20260807_094132';
import * as migration_20260807_101942_limpieza_senda from './20260807_101942_limpieza_senda';

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
    name: '20260807_101942_limpieza_senda'
  },
];
