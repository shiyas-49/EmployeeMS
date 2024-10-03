import Employee from "../models/Employee.js";

const addEmployee = async (req, res) => {
    const {
        userId,
        employeeId,
        name,
        email,
        mobile,
        designation,
        gender,
        courses,
        dob,
        image,
    } = req.body;

    try {
        const existingEmployeeByEmail = await Employee.findOne({ email });
        const existingEmployeeById = await Employee.findOne({ employeeId });

        if (existingEmployeeByEmail) {
            return res.status(400).json({ message: "Employee with this email already exists." });
        }

        if (existingEmployeeById) {
            return res.status(400).json({ message: "Employee with this ID already exists." });
        }

        const newEmployee = new Employee({
            userId,
            employeeId,
            name,
            email,
            mobile,
            designation,
            gender,
            courses,
            dob,
            image,
        });

        await newEmployee.save();
        return res.status(201).json({ message: "Employee added successfully!", employee: newEmployee });

    } catch (error) {
        console.error("Error adding employee:", error);
        return res.status(500).json({ message: "An error occurred while adding the employee." });
    }
};

export { addEmployee };
