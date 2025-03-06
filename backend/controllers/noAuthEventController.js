import eventModel from  "../models/event-model.js"

const noAuthEventController = async (req,res)=>{
    const event = await eventModel.find();
    res.status(201).json({event})
}

export default noAuthEventController;