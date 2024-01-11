import * as mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema({
  id: String,
  name: String,
  login: String,
  password: String,
  createDate: { type: Date, default: Date.now },
  lastEdit: Date,
  active: Boolean,
});

export interface User extends mongoose.Document {
  id: string;
  name: string;
  login: string;
  password: String,
  createDate: Date;
  lastEdit: Date;
  active: boolean;
}
