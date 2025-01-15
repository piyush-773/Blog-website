import mongoose from "mongoose";

const otpSchema = new mongoose.Schema({
    email: { type: String, required: true },
    otp: { type: String, required: true },
    username: { type: String, required: true },
    password: { type: String, required: true },
    createdAt: { type: Date, default: Date.now, expires: 300 }, // Expires after 5 minutes
});

export default mongoose.model("Otp", otpSchema);
