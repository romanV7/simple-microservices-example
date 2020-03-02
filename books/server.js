const app = require('./src/app')
const { DB_URI } = require('./src/config')
const mongoose = require('mongoose')
mongoose.connect(DB_URI)

app.listen(3000, () => {
  process.stdout.write('running on port 3000\n')
  //console.log('running on port 3000')
})
