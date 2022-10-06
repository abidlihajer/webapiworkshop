const express=require('express')
const { addContact, getAllContact, deleteContact, updateContact, getContact } = require('../controllers/contactController')
const router=express.Router()


router.post('/addcontact',addContact)

// get all contacts
router.get('/allcontacts',getAllContact)
// delete contact
router.delete('/removecontact/:id',deleteContact)
// update contact
router.put('/updatecontact/:id',updateContact)
// get one contact
router.get('/contact/:id',getContact)


module.exports=router