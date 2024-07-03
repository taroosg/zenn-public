import { randomBytes } from 'node:crypto'
import { format } from 'date-fns'

console.log(`${format(new Date(), 'yyyyMMdd')}-${randomBytes(4).toString('hex')}`)