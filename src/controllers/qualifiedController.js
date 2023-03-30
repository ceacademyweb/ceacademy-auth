const { appendFile } = require('fs/promises');
const path = require('path');
const fs = require('fs');

const Journal = require('../models/journal');
const User = require('../models/User');

const url = 'https://ceacademy-auth-production.up.railway.app'; //"http://localhost:5000";
// const url = "http://localhost:5000";
const store = (req, res) => {
  const body = req.body;

  const file = req.files.file;
  const mimeType = file.mimetype.split('/')[1];
  if (
    mimeType !== 'jpeg' &&
    mimeType !== 'png' &&
    mimeType !== 'jpg' &&
    mimeType !== 'pdf'
  ) {
    return res.status(400).send({ message: 'File type not allowed' });
  }
  const ext = mimeType === 'jpeg' ? 'jpg' : mimeType;
  const fileName = `${body.userId}_${Date.now()}-qualifield.${ext}`;
  const fileName1 = `${body.userId}_${Date.now()}-qualifield.${ext}`;
  async function appendToFile(filePathName, data) {
    try {
      console.log(filePathName);
      await appendFile(filePathName, data, { flag: 'w' });
      const newRows = {
        journalQualifieldPath: `${url}/uploads/${fileName1}`,
        journalQualifieldExt: ext,
        qualified: true,
      }
      Journal.findOneAndUpdate({_id: body.journalId, userId:body.userId},newRows, (err,result) => {
        if(err) return res.status(400).send({message: 'Error saving journal'});
        res.send({message: 'Journal saved successfully', result});
      })
      // res.send(fileName)
    }catch(error){
      console.error(`Got an error trying to append the file: ${error.message}`);
    }
  }
  appendToFile(
    path.join(__dirname, `../public/uploads/${fileName}`),
    file.data
  );
  // res.send({ body, fileName });
}


module.exports = {
  // index,
  // show,
  store,
  // update,
  // destroy,
  // readFile
};
