
const AGO = require('./index.js')

const now = new Date()

console.log(AGO.ago(now))

const nowplusone = new Date()

nowplusone.setSeconds( nowplusone.getSeconds() - 1 )

console.log(AGO.ago(nowplusone))

const nowplus59 = new Date()

nowplus59.setSeconds( nowplus59.getSeconds() - 59 )

console.log(AGO.ago(nowplus59))

const event = new Date('August 19, 1975 23:15:30')

console.log(AGO.ago(event))

