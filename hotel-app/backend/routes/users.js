// const express = require("express");
// const {
//   setPosts,
//   getPosts,
//   editPost,
//   deletePost,
//   likePost,
//   dislikePost,
// } = require("../controllers/post.controller");
// const router = express.Router();

// router.get("/", getPosts);
// router.post("/", setPosts);
// // router.put("/:id", editPost);
// router.delete("/:id", deletePost);
// router.patch("/like-post/:id", likePost);
// router.patch("/dislike-post/:id", dislikePost);

// module.exports = router;
const router = require("express").Router();
const {User, validate} = require("../models/user")
const bcrypt = require("bcrypt");
router.post("/",async(req, res) => {
    try{
        const {error} = validate(req.body);
        if(error)
        return res.status(400).send({message:error.details[0].message});
    const user = await User.findOne({email:req.body.email});
    if(user)
    return res.status(409).send({message:"User with given email already exist"})

    const salt = await bcrypt.genSalt(Number(process.env.SALT));
    const hashPassword = await bcrypt.hash(req.body.password, salt);
    await new User({...req.body, password: hashPassword}).save();
    res.status(201).send({message:"User created success"})
    }catch(error){
        res.status(500).send({message:"Internal Server Error"})
    }
})

module.exports = router;