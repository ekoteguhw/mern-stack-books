const dbUser = '<mongo_user>'
const dbPass = '<mongo_password>'
const dbDs = '<mongo_host>'
const dbPort = '<mongo_port>'
const dbName = '<mongo_db>'

const MONGO_URI = `mongodb://${dbUser}:${dbPass}@${dbDs}:${dbPort}/${dbName}`

module.exports = MONGO_URI
