const http = require('http')
const app = require('./Routes/user')
const connectToDb = require('./Dbconnection/mongodb')
const PORT = 2210
http.createServer(app).listen(PORT,() =>{
    new connectToDb();
    console.log(`Server is running on port no ${PORT}`)
})