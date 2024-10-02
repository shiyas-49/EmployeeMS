import Employee from "../models/Employee";

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
        image, // Assuming this is a URL or path to the uploaded image
    } = req.body;

    try {
        // Check if an employee with the same email or employeeId already exists
        const existingEmployeeByEmail = await Employee.findOne({ email });
        const existingEmployeeById = await Employee.findOne({ employeeId });

        if (existingEmployeeByEmail) {
            return res.status(400).json({ message: "Employee with this email already exists." });
        }

        if (existingEmployeeById) {
            return res.status(400).json({ message: "Employee with this ID already exists." });
        }

        // Create a new employee instance
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

        // Save the new employee to the database
        await newEmployee.save();

        // Send a success response
        return res.status(201).json({ message: "Employee added successfully!", employee: newEmployee });

    } catch (error) {
        // Handle any errors
        console.error("Error adding employee:", error);
        return res.status(500).json({ message: "An error occurred while adding the employee." });
    }
};

export { addEmployee };
