// Contact routes here
import express from "express"
import contactController from "../controllers/contact.controller.js"
const contactRoute = express.Router();

contactRoute.post("/contact/create",contactController.createNewContact);
contactRoute.get("/contact/list",contactController.getAllContact);
contactRoute.get("/contact/:id",contactController.getContactId);
contactRoute.get("/contact/e/:email",contactController.getContactByEmail);
contactRoute.put("/contact/updateStudent/:id",contactController.updateContact);
contactRoute.delete("/contact/d/:id",contactController.deleteContact);

export default contactRoute;
