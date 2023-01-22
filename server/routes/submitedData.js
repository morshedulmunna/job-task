import express from "express";
import client from "../db/dbConnect.js";

const router = express.Router();

const AddCollection = client.db("jobtask").collection("AddedSectors");

// Get All sectors
router.get("/", async (req, res) => {
  console.log(req.params.submitID);

  try {
    const item = await AddCollection.findOne({ _id: ObjectId(req.params.id) });
    res.json(item);
  } catch (error) {
    res.status(500).send(error);
  }
});

export default router;
