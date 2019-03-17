import React, { Component } from 'react';
import Navbar from './components/navbar'
import Home from './components/homepage'
import Login from './components/login'
import Register from './components/register'
import Product from './components/productList'
import Search from './components/search'
import ManageProduct from './components/manageProduct'
import PageNotFound from  './components/pageNotFound'
import ProductDetail from './components/productDetail'
import ScrolltoTop from  './components/scrolltoTop'
import Cart from './components/cart'
import Footer from './components/footer'
import { Route, withRouter, Switch } from 'react-router-dom'
import {connect} from 'react-redux'
import cookie from 'universal-cookie'
import {keepLogin} from './1.actions'
import './App.css';

// withRouter => Untuk tersambung ke Reducer dengan connect, tapi di dalam komponen ada routing
const objCookie = new cookie()
class App extends Component {
  componentDidMount() {
    var terserah = objCookie.get('userData')
    if(terserah !== undefined){
      this.props.keepLogin(terserah)
    }
  }
  render() {
    return (
      <div>
          <Navbar/>
          <ScrolltoTop>
          <Switch>
            
          <Route path='/' component={Home} exact/>
          <Route path='/login' component={Login} exact/>
          <Route path='/register' component={Register} exact/>
          <Route path='/products' component={Product} exact/>
          <Route path='/search' component={Search} exact/>
          <Route path='/manage' component={ManageProduct} exact/>
          <Route path='/product-detail/:id' component={ProductDetail} exact/>
          <Route path='/cart' component={Cart} exact/>
          <Route path='*' component={PageNotFound} exact/>
          
          </Switch>
          </ScrolltoTop>
          <Footer/>
      </div>
    );
  }
}

export default withRouter(connect(null, {keepLogin})(App));
