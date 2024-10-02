import User from "./models/User.js"
import bcrtpt from 'bcrypt'
import connectToDatabase from "./db/db.js"

const userRegister = async () => {
    connectToDatabase()
    try {
        const hashPassword = await bcrtpt.hash("admin",10)
        const newUser = new User ({
            name: "Admin", 
            email: "admin@gmail.com",
            password: hashPassword,
            role: "admin"
        })
        await newUser.save()
    }catch(error) {
        console.log(error)
    }
}

userRegister();