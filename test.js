
const AGO = require('./index.js')

// Test for now / zero time difference

const now = new Date()

console.log(AGO.ago(now))

// Test for 1 second ago

const nowplusone = new Date()

nowplusone.setSeconds( nowplusone.getSeconds() - 1 )

console.log(AGO.ago(nowplusone))

// Test for 59 second ago

const nowplus59 = new Date()

nowplus59.setSeconds( nowplus59.getSeconds() - 59 )

console.log(AGO.ago(nowplus59))

// Test for 60 seconds / 1 minute ago

const nowplus60 = new Date()

nowplus60.setSeconds( nowplus60.getSeconds() - 60 )

console.log(AGO.ago(nowplus60))

// Test for 2 mins ago

const nowplus2 = new Date()

nowplus2.setSeconds( nowplus2.getSeconds() - 179 )

console.log(AGO.ago(nowplus2))

// Test for random date in the past

const event = new Date('August 19, 1975 23:15:30')

console.log(AGO.ago(event))

