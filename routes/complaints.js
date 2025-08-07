import express from 'express'
import { createComplaint } from '../controllers/complaintsController.js'

export const complaintRoutes = express.Router()

complaintRoutes.post('/',createComplaint)

