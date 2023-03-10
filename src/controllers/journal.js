
const { appendFile} = require('fs/promises');
const path = require('path');

const Journal = require("../models/journal");

const url = "https://ceacademy-auth-production.up.railway.app"; //"http://localhost:5000";
const index = (req, res) => {
  res.send("Journal index");
}
const show = (req, res) => {
  res.send("Journal show");
}
const store = (req, res) => {
  const body = req.body;
  const file = req.files.image;
  const mimeType = file.mimetype.split('/')[1];
  if(mimeType!=='jpeg' && mimeType!=='png' && mimeType!=='jpg' && mimeType!=='pdf'){
    return res.status(400).send({message:"File type not allowed"});
  }
  const ext = mimeType === 'jpeg' ? 'jpg' : mimeType;
  const fileName = `${body.userId}_${Date.now()}.${ext}`;
  const fileName1 = `${body.userId}_${Date.now()}.${ext}`;
  console.log(fileName)
  async function appendToFile(fileName, data) {
    try {
      console.log(fileName1)
      await appendFile(fileName, data, { flag: 'w' });
      const journal = new Journal({
        userId: body.userId,
        imagePath: `${url}/uploads/${fileName1}`,
        level: 0
      });
      journal.save((err,result)=>{
        if(err) return res.status(400).send({message:"Error saving journal"});
        return res.send({message:"Journal saved"});
      });
    } catch (error) {
      console.error(`Got an error trying to append the file: ${error.message}`);
    }
  }
  appendToFile(path.join(__dirname, `../public/uploads/${fileName}`), file.data);

  // console.log(fs.fileMatch(path.join(__dirname, `../public/uploads/${body.userId}/1677616632725.pdf`)))
  // await file.mv(path.join(__dirname, `../public/uploads/${body.userId}/${fileName}`), err=>{
  //   if (err) return res.status(500).send(err);
  //   return res.send('File uploaded!');
  // });
}
const update = (req, res) => {
  res.send({message:"Journal update"});
}
const destroy = (req, res) => {
  res.send({message:"Journal destroy"});
}

module.exports = {
  index,
  show,
  store,
  update,
  destroy,
};
