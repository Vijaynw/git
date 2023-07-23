import axios from "axios";
import React from "react";

const baseURL = "https://neelpatel05.pythonanywhere.com";

export default function App() {
  const [posts, setPost] = React.useState([]);

  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      setPost(response.data);
      console.log(response.data);
      //console.log(response.data)
    });
  }, []);

  if (!posts) return null;

  return (
    <>
      
        {posts.map((post,index) => {
          console.log(post);
          return (
            <>
              <div className="element-wrapper">
                <div className={"box-" +post.atomicNumber}>
                  <div >{JSON.stringify(post.atomicNumber)} </div>
                  <div>{(post.symbol)}</div>
                  <div>{(post.name)}</div>
                </div>
              </div>
            </>
          );
        })}
    
          {/* {JSON.stringify(posts[0].atomicMass)} */}
    </>
  );
}
