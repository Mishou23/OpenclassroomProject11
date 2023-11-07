const mongoose = require('mongoose')
mongoose.set('useFindAndModify', false);
const databaseUrl =
  process.env.DATABASE_URL || 'mongodb://127.0.0.1/argentBankDB'

module.exports = async () => {
  try {
    await mongoose.connect(databaseUrl, { useNewUrlParser: true, useUnifiedTopology: true, })
    console.log('Database successfully connected')
    console.log(databaseUrl);
  } catch (error) {
    console.error(`Database Connectivity Error: ${error}`)
    throw new Error(error)
  }
}