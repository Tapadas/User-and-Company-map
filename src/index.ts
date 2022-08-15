import {User} from './User'
import { Company } from './Company'
import { CustomMap } from './CustomMap'

const user = new User() 
const company = new Company()
const customMap = new CustomMap('map')

customMap.addMarket(user)
customMap.addMarket(company)