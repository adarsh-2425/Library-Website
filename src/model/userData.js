const mongoose = require('mongoose');

const url = 'mongodb+srv://admin:mongo@librarycluster.dbfgaja.mongodb.net/LibraryDB?retryWrites=true&w=majority';
const connectionParams={
  useNewUrlParser: true,
  
  useUnifiedTopology: true 
}
mongoose.connect(url,connectionParams)
  .then( () => {
      console.log('Connected to the User atlas database ')
  })
  .catch( (err) => {
      console.error(`Error connecting to the database. n${err}`);
  })
const Schema = mongoose.Schema;

var NewUserSchema = new Schema({
    First_Name : String,
    Last_Name : String,
    email : String,
    password : String
    
});

var Userdata = mongoose.model('user', NewUserSchema);                        //UserData is the model and NewBookData is the schema

module.exports = Userdata;