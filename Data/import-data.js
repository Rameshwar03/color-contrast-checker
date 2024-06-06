const fs = require('fs');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Pallete = require('./../DataModel/colorModel');

dotenv.config({ path: '.env' });

const DB = process.env.DATABASE.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD
);

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    // useCreateIndex: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    console.log('DB connection successfull for import & deleting data')
  );

const colors = JSON.parse(
  fs.readFileSync(`${__dirname}/colorData.json`, 'utf-8')
);

const importData = async () => {
  try {
    await Pallete.create(colors);
    console.log('Data uploaded successfully of Colors');
  } catch (err) {
    console.log('Error Found');
  }
  process.exit();
};

const deleteData = async () => {
  try {
    await Pallete.deleteMany();
    console.log('Data deleted successfully');
  } catch (err) {
    console.log(err);
  }
  process.exit();
};

if (process.argv[2] === '--import') {
  importData();
} else if (process.argv[2] === '--delete') {
  deleteData();
}
