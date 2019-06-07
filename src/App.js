import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from '../src/Components/Header';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Home from '../src/Components/Home';
import Films from '../src/Components/Films';
import Contact from '../src/Components/Contact';
import FilmDescription from '../src/Components/FilmDescription';
import Slider from '../src/Components/Slide/slider';
import Slider_Redux from '../src/Components/Slider1/Slider';


function App() {
  return (
    <>
      <Router>
        <Header />
        <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/films' exact component={Films} />
            <Route path='/contact' exact component={Contact} />
            <Route path='/slider' exact component={Slider} />
            <Route path='/Slider_Redux' exact component={Slider_Redux} />
            <Route path='/slider_test' exact component={Slider} />
            <Route path='/:id' component={FilmDescription}/>
        </Switch>
      </Router>

    </>
  );
}

export default App;
