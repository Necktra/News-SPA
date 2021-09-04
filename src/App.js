import {BrowserRouter} from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';

import 'bootstrap/dist/css/bootstrap.min.css';
import NewsContainer from './components/News/NewsContainer';

function App() {
  return (
    <BrowserRouter>
     <Header />
     <NewsContainer />
      <div>Privetiki</div>
    </BrowserRouter>
  );
}

export default App;
