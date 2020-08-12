import React, { Fragment, useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Cart from './components/Cart';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {


    const [basket, setBasket] = useState(0),

        addToBasket = () => {
            setBasket(basket + 1);
        };

    //if (process.env.NODE_ENV !== 'development') {
      // do some logic
    //} else {
    //    some cool logic
    //}

    return (
        <Fragment>
            <BrowserRouter basename="/AmeyawBuild">
                <Navbar basketNumber={basket} />
                <Switch>
                    <Route exact path="/" render={() => <Home myFunc={addToBasket} />} />
                    <Route path="/about" component={About} />
                    <Route path="/cart" component={Cart} />
                </Switch>
            </BrowserRouter>
        </Fragment>
    );
}

export default App;
