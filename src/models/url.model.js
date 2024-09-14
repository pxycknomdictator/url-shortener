import { Schema, model } from "mongoose";

const urlSchema = new Schema(
  {
    originalUrl: {
      type: String,
      required: true,
      unique: true,
    },
    shortId: {
      type: String,
      required: true,
    },
    shortUrl: {
      type: String,
      required: true,
    },
    visit_history: {
      type: Number,
      default: 0,
    },
    author: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

export const Urls = model("Urls", urlSchema);
