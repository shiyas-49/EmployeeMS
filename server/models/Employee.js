import mongoose from "mongoose";
import { Schema } from "mongoose";
import User from "./User";

const employeeSchema = new Schema({
    userId: { type: Schema.Types.ObjectId, ref: "User", required: true }, // Reference to User model
    employeeId: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    mobile: { type: String, required: true },
    designation: { type: String, required: true, enum: ["HR", "Manager", "Sales"] }, // Using enum for specific options
    gender: { type: String, required: true, enum: ["M", "F"] }, // Only Male and Female
    courses: { type: [String] }, // Array to hold selected courses
    dob: { type: Date, required: true }, // Date of Birth
    image: { type: String } // URL or path to the image
});

const Employee = mongoose.model("Employee", employeeSchema);
export default Employee;
