import { Schema, model } from "mongoose";

const userSchema = new Schema(
  {
    fullName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: true,
    },
    urls: [
      {
        type: Schema.Types.ObjectId,
        ref: "Urls",
      },
    ],
  },
  { timestamps: true }
);

export const User = model("User", userSchema);
