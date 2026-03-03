import { createEnemy } from '../enemyDatabaseUtils'
import PuttyPotrollers from './PuttyPotrollers'
import chaos_putties from './chaos_putties'
import cogs from './cogs'
import cyclobots from './cyclobots'
import krybots from './krybots'
import mastodon_troopers from './mastodon_troopers'
import quantrons from './quantrons'
import ranger_sentries from './ranger_sentries'
import rinshi from './rinshi'
import super_putty_patrollers from './super_putty_patrollers'
import tenga_warriors_errata from './tenga_warriors_errata'
import tenga_warriors_original from './tenga_warriors_original'
import tronics from './tronics'
import tyrannodrones from './tyrannodrones'
import z_putty_patrollers_errata from './z_putty_patrollers_errata'
import z_putty_patrollers_original from './z_putty_patrollers_original'

export default [
  ...PuttyPotrollers,
    ...chaos_putties,
    ...cogs,
    ...cyclobots,
    ...krybots,
    ...mastodon_troopers,
    ...quantrons,
    ...ranger_sentries,
    ...rinshi,
    ...super_putty_patrollers,
    ...tenga_warriors_errata,
    ...tenga_warriors_original,
    ...tronics,
    ...tyrannodrones,
    ...z_putty_patrollers_errata,
    ...z_putty_patrollers_original
]

export const footEnemies = [
  createEnemy({ id: 'putty_patrollers', name: 'Putty Patrollers', type: 'foot' }),
    createEnemy({
    id: 'chaos_putties',
    name: 'Chaos Putties',
    type: 'foot'
  }),
    createEnemy({
    id: 'cogs',
    name: 'Cogs',
    type: 'foot'
  }),
    createEnemy({
    id: 'cyclobots',
    name: 'Cyclobots',
    type: 'foot'
  }),
    createEnemy({
    id: 'krybots',
    name: 'Krybots',
    type: 'foot'
  }),
    createEnemy({
    id: 'mastodon_troopers',
    name: 'Mastodon Troopers',
    type: 'foot'
  }),
    createEnemy({
    id: 'quantrons',
    name: 'Quantrons',
    type: 'foot'
  }),
    createEnemy({
    id: 'ranger_sentries',
    name: 'Ranger Sentries',
    type: 'foot'
  }),
    createEnemy({
    id: 'rinshi',
    name: 'Rinshi',
    type: 'foot'
  }),
    createEnemy({
    id: 'super_putty_patrollers',
    name: 'Super Putty Patrollers',
    type: 'foot'
  }),
    createEnemy({
    id: 'tenga_warriors_errata',
    name: 'Tenga Warriors (Errata)',
    type: 'foot'
  }),
    createEnemy({
    id: 'tenga_warriors_original',
    name: 'Tenga Warriors (Original)',
    type: 'foot'
  }),
    createEnemy({
    id: 'tronics',
    name: 'Tronics',
    type: 'foot'
  }),
    createEnemy({
    id: 'tyrannodrones',
    name: 'Tyrannodrones',
    type: 'foot'
  }),
    createEnemy({
    id: 'z_putty_patrollers_errata',
    name: 'Z Putty Patrollers (Errata)',
    type: 'foot'
  }),
    createEnemy({
    id: 'z_putty_patrollers_original',
    name: 'Z Putty Patrollers (Original)',
    type: 'foot'
  })
]
