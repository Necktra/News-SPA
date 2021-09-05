import {BrowserRouter, Route} from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';

import 'bootstrap/dist/css/bootstrap.min.css';
import NewsContainer from './components/News/NewsContainer';
import CurrentNewsContainer from './components/CurrentNews/CurrentNewsContainer';

function App() {
  return (
    <BrowserRouter>
     <Header />
     {/* <NewsContainer /> */}

     <Route exact path={"/"} render={ () => <NewsContainer/>} />
     <Route path="/news/:newsId" render={ () => <CurrentNewsContainer/>} />
{/* <Route path="#home" render={ () => <NewsContainer/>} /> */}
     {/* <Route path="/mm" render={ () => <CurrentNewsContainer/>} /> */}

    </BrowserRouter>
  );
}

export default App;
