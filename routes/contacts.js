const express = require("express");
const router = express.Router();
const auth = require('../middleware/auth');
const {check,validationResult} = require('express-validator');

const User = require('../models/User');
const Contact = require('../models/Contact');


// @route       GET api/contacts
// @desc        Get all users contacts
// @access      Private
router.get("/", auth, async (req,res)=>{
    try {
        const contacts = await Contact.find({ user:req.user.id }).sort({ date: -1});
        res.json(contacts);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error')
    }
});

// @route       POST api/contacts
// @desc        Add new contacts
// @access      Private
router.post("/", [auth, [
    check('name','Name is Required').not().isEmpty()
]],async (req,res)=>{
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()});
    }

    const {name,email,phone,type} =req.body;
    try {
        const newcontact = new Contact({
            name,
            email,
            phone,
            type,
            user: req.user.id
        });

        const contact = await newcontact.save();
        res.json(contact); 

    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }

});

// @route       PUT api/contacts/:id
// @desc        Update users contacts
// @access      Private
router.put("/:id", auth, async (req,res)=>{
    const {name, email, phone, type} = req.body;

    // Build Contact Object
    const contactFields = {};
    if(name) 
    contactFields.name = name;
    if(name) 
    contactFields.email = email;
    if(name) 
    contactFields.phone = phone;
    if(name) 
    contactFields.type = type;

    try {

        let contact = await Contact.findById(req.params.id);
        if(!contact) return res.status(404).json({msg: 'Contact not found'});

        // Make sure user owns contact
        if(contact.user.toString() !== req.user.id){
            return res.status(401).json({msg: 'Not authorised'});
        }

        contact = await Contact.findByIdAndUpdate
        (
            req.params.id,
            {$set:contactFields},
            {new:true}
        )

        res.json(contact);
    } catch (err) {
        console.error(er.message);
        res.status(500).send('Server Error');
    }

});

// @route       Delete api/contacts/:id
// @desc        Delete users contacts
// @access      Private
router.delete('/:id', auth, async (req, res) => {
    try {
      let contact = await Contact.findById(req.params.id);
  
      if (!contact) return res.status(404).json({msg: 'Contact not found'});
  
      // Make sure user owns contact
      if (contact.user.toString() !== req.user.id) {
        return res.status(401).json({msg: 'Not authorized'});
      }
  
      await Contact.findByIdAndRemove(req.params.id);
  
      res.json({msg: 'Contact removed'});
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  });

module.exports = router;