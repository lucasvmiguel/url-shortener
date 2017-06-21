import mongoose from 'mongoose';

const urlSchema = mongoose.Schema({
    url: String,
    shortUrl: String,
    startDate: Date,
    lastSeenDate: Date,
    redirectCount: Number
});

export const save = ({repoConn, urlObj}) => {
  let urlSchemaObj = new urlSchema(urlObj);
  return urlSchemaObj.save();
};