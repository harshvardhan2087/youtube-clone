import styled from "styled-components"
import Comment from "./Comment";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";

const Container = styled.div``;

const NewComment = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
`
const Avatar = styled.img`
    height: 50px;
    width: 50px;
    border-radius: 50%;

`
const Input = styled.input`
    border: none;
    border-bottom: 1px solid ${({theme}) => theme.soft};
    background-color: transparent;
    outline: none;
    padding: 5px;
    width: 100%;
`

const Comments = ({videoId}) => {
    const {currentUser} = useSelector((state) => state.user);
    const [comments, setComments] = useState([]);

    useEffect(() => {
        const fetchComments = async() => {
            try{
                const res = await axios.get(`http://localhost:8000/api/comments/${videoId}`)
                setComments(res.data)

            }catch(err){
                console.log(err);
            }

        }
        fetchComments();

    }, [videoId])

  return (
    <Container>
        <NewComment>
            <Avatar src={currentUser.img}/>
            <Input placeholder="Add a Comment"/>
        </NewComment>
        {
            comments.map(comment => (
                <Comment key={comment._id} comment={comment}/>

            ))
        }
        
    </Container>
  )
}

export default Comments