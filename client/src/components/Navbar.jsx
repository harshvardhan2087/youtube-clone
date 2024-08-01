import AccountCircleOutlined from "@mui/icons-material/AccountCircleOutlined";
import styled from "styled-components"
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined"
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import VideoCallOutlineIcon from "@mui/icons-material/VideoCallOutlined"
import { useState } from "react";
import Upload from "./Upload";



const Container = styled.div`
  position: sticky;
  top: 0;
  background-color: ${({theme}) => theme.bgLighter}
  height: 56px;
  padding: 15px;
`;
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  height: 100%;
  padding: 0px 20px
  position: relative;
`;
const Search = styled.div`
  width: 40%;
  position: absolute;
  left: 0px;
  right: 0px;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 3px;
`;
const Input = styled.input`
  border: none;
  background-color: transparent;
  outline: none;
  color: ${({ theme }) => theme.text};
`;
const Button = styled.button`
  padding: 5px 15px;
  background-color: transparent;
  border: 1px solid #3ea6ff;
  color: #3ea6ff;
  border-radius: 3px;
  font-weight: 500;
  margin-top: 10px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 5px;
`;

const User = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-weight: 500;
  color: ${({theme}) => theme.text}

`

const Avatar = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: #999;

`

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const {currentUser} = useSelector(state=> state.user)

  return (
    <>
    <Container>
      <Wrapper>
        <Search>
          <Input placeholder="search"/>
          <SearchOutlinedIcon />
        </Search>
        {currentUser ? (
          <User>
            <VideoCallOutlineIcon onClick={() => setOpen(true)}/>
            <Avatar src={currentUser.img}/>
            {currentUser.name}
          </User>
        ): (<Link to="/signin" style={{textDecoration: "none"}}>
        <Button>
          <AccountCircleOutlined />
          Sign In
        </Button>
        </Link>)}
        
      </Wrapper>
    </Container>
    {open && <Upload setOpen={setOpen}/>}
    
    
    
    </>
  )
}

export default Navbar