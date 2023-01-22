import express from "express";
import client from "../db/dbConnect.js";

const router = express.Router();

const AddCollection = client.db("jobtask").collection("AddedSectors");

// Get All sectors
router.get("/:submitID", async (req, res) => {
  console.log(req.params.submitID);

  try {
    const item = await AddCollection.findOne({
      _id: ObjectId(req.params.submitID),
    });
    res.status(200).send(item);
  } catch (error) {
    res.status(500).send(error);
  }
});

export default router;
