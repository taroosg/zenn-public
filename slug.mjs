import { randomBytes } from 'node:crypto'
import { format } from 'date-fns'

console.log(`${format(new Date(), 'yyyyMMddHHmmss')}-${randomBytes(7).toString('hex')}`)