import eventModel from "../models/event-model.js";

const getIndiEventController = async (req, res) => {
  try {
    let event = await eventModel.findById(req.params.id).select("-organizerId -__v"); 

    if (!event) {
      return res.status(404).json({ message: "Event Not found" });
    }

    return res.status(200).json({ event });
  } catch (error) {
    console.log("Error: ", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export default getIndiEventController;
