import { createComplaintD, getAllCompD } from "../models/complaint.model.js";

export const createComplaint = async (req, res) => {
    const newComplaints = await req.body
    console.log('body', newComplaints);

    const category = newComplaints.category
    const message = newComplaints.message
    console.log('newcompl', newComplaints);
    console.log('msg', message);


    try {
        await createComplaintD({ category: category, message: message });
        res.status(201).json({ msg: "compalaint added" })
    }
    catch (error) {
        res.status(400).json({ error: "complaint diden added" })
    }
}

export async function getAllComp(req, res) {
    const { password } = req.body;
console.log('pass',password);

    if (password !== process.env.APP_PASSWORD) {
        return res.status(403).json({ error: 'wrong password' });
    }

    try {
        const complaints = await getAllCompD();
        res.json({ complaints });
    } catch (err) {
        console.error('fetching error', err);
        res.status(500).json({ error: 'server error' });
    }
}