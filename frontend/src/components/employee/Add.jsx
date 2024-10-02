import React, { useState } from "react";

const Add = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        mobile: "",
        designation: "",
        gender: "",
        courses: [],
        image: null
    });

    const [submittedData, setSubmittedData] = useState(null); // To show the submitted data

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleCheckboxChange = (e) => {
        const { name, checked } = e.target;
        setFormData((prev) => ({
            ...prev,
            courses: checked
                ? [...prev.courses, name]
                : prev.courses.filter((course) => course !== name),
        }));
    };

    const handleFileChange = (e) => {
        setFormData({
            ...formData,
            image: e.target.files[0],
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        // Validate the form (you can add more complex validation if needed)
        if (!formData.name || !formData.email || !formData.mobile || !formData.designation || !formData.gender) {
            alert("Please fill out all the required fields!");
            return;
        }

        // If valid, show the submitted data (for now we are logging, you can send to backend)
        setSubmittedData(formData);

        // If you're working with an API, here's where you'd send the data:
        // For example:
        // axios.post('/api/employees', formData)
        // .then(response => {
        //   // Handle success
        // }).catch(error => {
        //   // Handle error
        // });
    };

    return (
        <div className="max-w-4xl mx-auto mt-10 bg-white p-8 rounded-md shadow-md">
            <h2 className="text-2xl font-bold mb-6">Add New Employee</h2>
            <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    
                    {/* NAME */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700">
                            Name
                        </label>
                        <input
                            type="text"
                            name="name"
                            placeholder="Insert Name"
                            className="mt-1 p-2 block w-full border-gray-300 rounded-md"
                            required
                            onChange={handleInputChange}
                        />
                    </div>

                    {/* EMAIL */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700">
                            Email
                        </label>
                        <input
                            type="email"
                            name="email"
                            placeholder="Insert Email"
                            className="mt-1 p-2 block w-full border-gray-300 rounded-md"
                            required
                            onChange={handleInputChange}
                        />
                    </div>

                    {/* MOBILE NO */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700">
                            Mobile Number
                        </label>
                        <input
                            type="tel"
                            name="mobile"
                            placeholder="Insert Mobile Number"
                            className="mt-1 p-2 block w-full border-gray-300 rounded-md"
                            required
                            onChange={handleInputChange}
                        />
                    </div>

                    {/* DESIGNATION (Dropdown) */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700">
                            Designation
                        </label>
                        <select
                            name="designation"
                            className="mt-1 p-2 block w-full border-gray-300 rounded-md"
                            required
                            onChange={handleInputChange}
                        >
                            <option value="">Select Designation</option>
                            <option value="HR">HR</option>
                            <option value="Manager">Manager</option>
                            <option value="Sales">Sales</option>
                        </select>
                    </div>

                    {/* GENDER (Radio Buttons) */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700">
                            Gender
                        </label>
                        <div className="mt-1 space-x-4">
                            <label>
                                <input
                                    type="radio"
                                    name="gender"
                                    value="male"
                                    onChange={handleInputChange}
                                    required
                                />{" "}
                                Male
                            </label>
                            <label>
                                <input
                                    type="radio"
                                    name="gender"
                                    value="female"
                                    onChange={handleInputChange}
                                    required
                                />{" "}
                                Female
                            </label>
                            <label>
                                <input
                                    type="radio"
                                    name="gender"
                                    value="others"
                                    onChange={handleInputChange}
                                    required
                                />{" "}
                                Others
                            </label>
                        </div>
                    </div>

                    {/* COURSE (Checkboxes) */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700">
                            Courses
                        </label>
                        <div className="mt-1 space-y-2">
                            <label className="block">
                                <input
                                    type="checkbox"
                                    name="MCA"
                                    onChange={handleCheckboxChange}
                                />{" "}
                                MCA
                            </label>
                            <label className="block">
                                <input
                                    type="checkbox"
                                    name="BCA"
                                    onChange={handleCheckboxChange}
                                />{" "}
                                BCA
                            </label>
                            <label className="block">
                                <input
                                    type="checkbox"
                                    name="BSC"
                                    onChange={handleCheckboxChange}
                                />{" "}
                                BSc
                            </label>
                        </div>
                    </div>

                    {/* IMAGE UPLOAD */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700">
                            Upload Image
                        </label>
                        <input
                            type="file"
                            name="image"
                            accept="image/*"
                            className="mt-1 p-2 block w-full border-gray-300 rounded-md"
                            onChange={handleFileChange}
                        />
                    </div>

                </div>

                {/* SUBMIT BUTTON */}
                <div className="mt-6">
                    <button
                        type="submit"
                        className="px-6 py-2 bg-teal-600 text-white rounded-md"
                    >
                        Submit
                    </button>
                </div>
            </form>

            {/* Display Submitted Data */}
            {submittedData && (
                <div className="mt-10 p-4 bg-gray-100 rounded-md">
                    <h3 className="text-xl font-semibold mb-4">Submitted Data:</h3>
                    <pre>{JSON.stringify(submittedData, null, 2)}</pre>
                </div>
            )}
        </div>
    );
};

export default Add;
