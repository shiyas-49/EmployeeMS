import expres from 'express'
import authMIddlware from '../middleware/authMIddlware.js'
import {addEmployee} from '../controllers/employeController.js'

const router =expres.Router()

router.post('add', authMIddlware,addEmployee)

export default router