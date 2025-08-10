import { createComplaintD } from "../models/complaint.model.js";

export const createComplaint = async(req, res)=> {
    const newComplaints = await req.body 
    console.log('body',newComplaints);
    
    const category = newComplaints.category
    const message = newComplaints.message
    console.log('newcompl',newComplaints);
    console.log('msg',message);
    
    
    try {
        await createComplaintD({category:category,message:message});
        res.status(201).json({msg:"compalaint added"})
    }
    catch (error) {
        res.status(400).json({ error: "complaint diden added" })
    }
}