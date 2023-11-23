import mongoose, { Document, HydratedDocument, Schema } from "mongoose";
import bcrypt from "bcrypt"

export interface IJwtData {
    uuid: string;
    username: string;
}

export interface IUser {
    uuid: string;
    username: string;
    email: string;
    password: string;
    permissions: string[];
    created_at: Date;
}

export interface IUserModel extends IUser, Document {
    comparePassword(candidatePassword: string): Promise<boolean>
}

const UserSchema: Schema<IUserModel> = new Schema(
    {
        uuid: { type: String, unique: true },
        username: { type: String },
        email: { type: String },
        password: { type: String },
        permissions: { type: [String] },
        created_at: { type: Date, default: Date.now }
    },
    {
        versionKey: false,
        timestamps: false,
    }
)

UserSchema.method<HydratedDocument<IUser>>(
    'comparePassword',
    async function (candidatePassword: string): Promise<boolean> {
        return bcrypt.compareSync(candidatePassword, this.password)
    }
);

UserSchema.index({ uuid: 1 });

export default mongoose.model<IUserModel>('user', UserSchema)