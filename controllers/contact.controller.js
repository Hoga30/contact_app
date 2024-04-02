// Contact controllers here
import contactModel from "../models/contact.model.js";

const contactController = {
    createNewContact : async(req,res)=>{
        try{
            const newContact = await contactModel.create(req.body)
            res.status(201).json({
                message:"contact is successfully created!!!",
                contact:newContact
            })
        }catch(error){
            console.log(error);
            res.status(500).json({
                message:"Internal server error"
            })
        }
    },
    getAllContact : async (req,res)=>{
        try{
            const getContact =await contactModel.find()
            res.status(200).json({
                message:"students retrieved successfully",
                contact:getContact
            })
        }catch (error){
            console.log(error.message)
            res.status(500).json({
                message:"Internal server Error"
            })
        }
    },
    getContactId : async (req,res)=>{
        const retrievedContact = await contactModel.findById(req.params.id)
        try{
            
            
                res.status(200).json(retrievedContact)
            }
        catch (error) {
            res.status(500).json({
                message:"Internal Server Error"
            })
          }
    },
    getContactByEmail:async(req,res)=>{
       
        try {
          
            const retrievedContact = await contactModel.findOne({email:req.params.email})
              res.status(200).json(retrievedContact)
          }
        catch (error) {
          res.status(500).json({
              message:"Internal Server Error"
          })
        }
      },
      updateContact: async(req,res)=>{
        const updatedContact = await contactModel.findByIdAndUpdate(req.params.id, req.body,{set:true});
        try {
            
            
                res.status(200).json(updatedContact)
            }
            
        catch (error) {
            res.status(500).json({
                message:"Internal Server Error"
            }) 
        }

    },
    deleteContact: async(req,res)=>{
        const id =req.params.id;
            const deletedContact = await contactModel.findByIdAndDelete(id);
        try {
            
                res.status(200).json(deletedContact)
            }
            
         catch (error) {
            res.status(500).json({
                message:"Internal Server Error"
            }) 
        }

    }
}
export default contactController