import { connect } from "../db/connect.js";

export async function createComplaintD(complaint) {
    const db = await connect();
    const result = await db.collection('complaints').insertOne(complaint);
    return result.insertedId;
}
