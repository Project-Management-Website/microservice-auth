import mongoose, { Document, HydratedDocument, Schema } from "mongoose";
import bcrypt from "bcrypt"

export interface IJwtData {
    uuid: string;
    username: string;
  }

export interface IUser extends Document {
    uuid: string;
    username: string;
    email: string;
    password: string;
    created_at: Date;
    comparePassword(candidatePassword: string): Promise<boolean>
}

const UserSchema: Schema<IUser> = new Schema(
    {
        uuid: { type: String, unique: true },
        username: { type: String },
        email: { type: String },
        password: { type: String },
        created_at: { type: Date, default: Date.now }
    }
)

UserSchema.method<HydratedDocument<IUser>>(
    'comparePassword',
    async function (candidatePassword: string): Promise<boolean> {
        return bcrypt.compareSync(candidatePassword, this.password)
    }
);

UserSchema.index({ uuid: 1 });

export default mongoose.model<IUser>('user', UserSchema)