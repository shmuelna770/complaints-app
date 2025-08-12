import express from 'express'
import { createComplaint ,getAllComp} from '../controllers/complaintsController.js'

export const complaintRoutes = express.Router()
export const adminRoutes = express.Router()

complaintRoutes.post('/',createComplaint)

adminRoutes.post('/',getAllComp)
