import styled from "styled-components";
import Card from "../components/Card";
import { useEffect, useState } from "react";
import axios from "axios";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const Home = ({ type }) => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const res = await axios.get(`http://localhost:8000/api/videos/${type}`);
        console.log("API response:", res.data);

        if (Array.isArray(res.data)) {
          setVideos(res.data);
        } else {
          console.error("API response is not an array", res.data);
          setVideos([]); // Set to an empty array if the response is not an array
        }
      } catch (error) {
        console.error("Error fetching videos", error);
        setVideos([]); // Set to an empty array in case of error
      }
    };

    fetchVideos();
  }, [type]);

  return (
    <Container>
      {videos.length > 0 ? (
        videos.map((video) => (
          <Card key={video._id} video={video} />
        ))
      ) : (
        <p>No videos available</p>
      )}
    </Container>
  );
};

export default Home;












// import React, { useEffect, useState } from "react";
// import styled from "styled-components";
// import Card from "../components/Card";
// import axios from "axios";
// const Container = styled.div`
//   display: flex;
//   justify-content: space-between;
//   flex-wrap: wrap;
// `;

// const Home = ({type}) => {
//   const [videos, setVideos] = useState([]);

//   useEffect(() => {
//     const fetchVideos = async () => {
//       const res = await axios.get(`/videos/${type}`);
//       console.log(res);
//       setVideos(res.data);
//     };
//     fetchVideos();
//   }, [type]);

//   return (
//     <Container>
//       {videos.map((video) => (
//         <Card key={video._id} video={video}/>
//       ))}
//     </Container>
//   );
// };

// export default Home;