import { createError } from '../error.js';
import Comment from '../models/Comment.js';


export const addComment = async (req, res, next) => {
    const newComment = new Comment({...req.body, userId: req.uer.id})
    try{
        const savedComment = await newComment.save()
        res.status(200).json(savedComment);

    }catch(err){
        next(err)
    }
}

export const deleteComment = async (req, res, next) => {
    try {
        const comment = await Comment.findById(res.params.id);
        const video = await Video.findById(res.params.id);
        if(req.user.id === comment.userId || req.user.id === video.userId){
            await Comment.findByIdAndDelete(req.params.id)
            res.status(200).json("The comment has been deleted")
        }else {
            next(createError(403, "YOU CAN ONLY DELETE YOUR VIDEOS"));
        }

    }catch(err){
        next(err)
    }
}

export const getComment = async (req, res, next) => {
    try {
        const commentS = await Comment.find({videoId: req.params.videoId})
        res.status(200).json(comments);

    }catch(err){
        next(err)
    }
}