import * as migration_20260821_033921 from './20260821_033921';

export const migrations = [
  {
    up: migration_20260821_033921.up,
    down: migration_20260821_033921.down,
    name: '20260821_033921'
  },
];
