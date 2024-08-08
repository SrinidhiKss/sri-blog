
import Bloglist from "./bloglist";
import useFetch from "./usefetch";

const Homepage = () => {
    const {data :blogs,ispending,error}=useFetch('http://localhost:8000/blogs');
        
    return ( 
        <div className="home">
            <h1>Home Page</h1>
            {error && <div>{ error }</div>}
            {ispending && <div>loading...</div>}
            { blogs && <Bloglist blogs={blogs} title="All blogs" /> }
        </div>
     );
}
  
export default Homepage;