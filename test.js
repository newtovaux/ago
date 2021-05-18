
const AGO = require('./index.js')

const now = new Date()

console.log(AGO.ago(now))

const event = new Date('August 19, 1975 23:15:30');

console.log(AGO.ago(event))
