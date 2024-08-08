import Navbar from './navbar';
import Homepage from './home';
import { BrowserRouter,Route, Routes} from 'react-router-dom';
import Create from './create';
import BlogDetails from './blog-details';
import Error from './error';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Navbar/>
      <div className="content">
        <Routes>
          <Route path="/" element={<Homepage/>}/> 
          <Route path="/create" element={<Create/>}/> 
          <Route path="blogs/:id" element={<BlogDetails/>}/>
          <Route path="*" element={<Error/>}/>
        </Routes>
      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
