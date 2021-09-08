import {BrowserRouter, Route} from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import NewsContainer from './components/News/NewsContainer';
import CurrentNewsContainer from './components/CurrentNews/CurrentNewsContainer';
import CommentsContainer from './components/Comments/CommentsContainer';

function App() {
  return (
    <BrowserRouter>
     <Header />
     <Route exact path={"/"} render={ () => <NewsContainer/>} />
     <Route path="/news/:newsId" render={ (props) => {return <><CurrentNewsContainer props={props}/>
     <CommentsContainer props={props}/> </>} } />
    </BrowserRouter>
  );
}

export default App;
