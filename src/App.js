import './App.css';
import React ,{useState}from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar'
import {BrowserRouter as Router,Routes,Route,} from "react-router-dom";

// Now we will be using the Class based react app
// type==> rcc

const App = () => {
  const pageSize=6;
  const apikey=process.env.REACT_APP_APIKEY;
  const country='in';

  const [progress, setProgress] = useState(0)

  // using arrow function makes us possibe to use 
  // setProgress=(progress)=>{
  //   setState({progress: progress})
  // }
  
    return (
      <Router>
        <>
        <div>
        <Navbar/>
        <LoadingBar
          color='#f11946'
          progress={progress}
          // onLoaderFinished={() => setProgress(0)}
        />
        <Routes>
          <Route exact path="/" element={<News setProgress={setProgress} apikey={apikey} key="/" pagesize={pageSize} country={country} category="general" />}> </Route>
          <Route exact path="/home" element={<News setProgress={setProgress} apikey={apikey} key="home" pagesize={pageSize} country={country} category="general" />}> </Route>
          <Route exact path="/business" element={<News setProgress={setProgress} apikey={apikey} key="business" pagesize={pageSize} country={country} category="business" />}> </Route>
          <Route exact path="/entertainment" element={<News setProgress={setProgress} apikey={apikey} key="entertainment" pagesize={pageSize} country={country} category="entertainment" />}></Route>
          <Route exact path="/general" element={<News setProgress={setProgress} apikey={apikey} key="general" pagesize={pageSize} country={country} category="general" />}></Route>
          <Route exact path="/health" element={<News setProgress={setProgress} apikey={apikey} key="health" pagesize={pageSize} country={country} category="health" />}></Route>
          <Route exact path="/science" element={<News setProgress={setProgress} apikey={apikey} key="science" pagesize={pageSize} country={country} category="science" />}></Route>
          <Route exact path="/sports" element={<News setProgress={setProgress} apikey={apikey} key="sports" pagesize={pageSize} country={country} category="sports" />}></Route>
          <Route exact path="/technology" element={<News setProgress={setProgress} apikey={apikey} key="technology" pagesize={pageSize} country={country} category="technology" />}></Route>
        </Routes>
        </div>
        </>
      </Router>


    )
}

export default App