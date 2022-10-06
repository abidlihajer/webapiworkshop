const Contact=require('../models/Contact')

exports.addContact=async(req,res)=>{
    const {name,email,age}=req.body
    try {
        const checkContact=await Contact.findOne({email})
        if(checkContact){
            return res.send("contact is already exists")
        }
        const contact=new Contact({
            name,email,age
        })
        await contact.save()
        res.status(201).send({msg:"contact created",contact})
    } catch (error) {
        res.status(500).send("server error")
    }
}
exports.getAllContact=async(req,res)=>{
    try {
        const contacts=await Contact.find()
        res.status(200).send(contacts)
    } catch (error) {
        res.status(500).send("server error")
    }
}
exports.deleteContact=async(req,res)=>{
    const {id}=req.params
    try {
        await Contact.findByIdAndDelete(id)
        res.send("contact deleted")
    } catch (error) {
        res.status(500).send("server error") 
    }
}
exports.updateContact=async(req,res)=>{
    const {id}=req.params
    try {
      const updatecontact=  await Contact.findByIdAndUpdate(id,{$set:{...req.body}},{new:true})
        res.send(updatecontact)
    } catch (error) {
        res.status(500).send("server error") 
    }
}
exports.getContact=async(req,res)=>{
    const {id}=req.params
    try {
       const contact= await Contact.findById(id)
        res.send(contact)
    } catch (error) {
        res.status(500).send("server error") 
    }
}