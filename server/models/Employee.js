import mongoose from 'mongoose';

const employeeSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    employeeId: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    mobile: { type: String, required: true },
    designation: { type: String, required: true },
    gender: { type: String, required: true },
    courses: [{ type: String }], // Array for multiple courses
    dob: { type: Date, required: true },
    image: { type: String } // URL or path to the uploaded image
});

const Employee = mongoose.model("Employee", employeeSchema);
export default Employee;
