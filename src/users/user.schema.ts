import * as mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema({
  name: String,
  login: String,
  createDate: { type: Date, default: Date.now },
  lastEdit: Date,
  active: Boolean,
});

export interface User extends mongoose.Document {
  id: string;
  name: string;
  login: string;
  createDate: Date;
  lastEdit: Date;
  active: boolean;
}
