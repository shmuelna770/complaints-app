import { createComplaintD } from "../models/complaint.model.js";

export async function createComplaint(req, res) {
    const newComplaints = req.body 
    const category = newComplaints.category
    const message = newComplaints.message
    try {
        await createComplaintD({category:category,message:message});
        res.status(201).json({msg:"compalaint added"})
    }
    catch (error) {
        res.status(400).json({ error: "complaint diden added" })
    }
}