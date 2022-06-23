/* eslint-disable react/jsx-no-undef */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import {buyLaptop, buyMobile} from './redux/actions';//normal export
import { fetchusers } from './redux/actions';
import './style.css';

export  class shop extends Component {
  // state = {
  //   numberOfLaptops:100
  // }
  // buyLaptop = () => {
  //   this.setState({numberOfLaptops:this.state.numberOfLaptops-1})
  // }
  render() {
    return (
      <div>
        <h1 className='title'>Welcome to MyShop</h1>
        <div className='container'>
        <div className='item'>
          <p>Hp Laptop</p>
          <p>Available:{this.props.numberOfLaptops} </p>
          <button onClick ={this.props.buyLaptop}>Buy</button>
        </div>

        <div className='item'>
          <p>Redmi Note 7</p>
          <p>Available:{this.props.numberOfMobiles} </p>
          <button onClick ={this.props.buyMobile}>Buy</button>
        </div>

        <div className='item'>
          <p>Get Users Data</p>
          <p>Count:{this.props.users.length} </p>
          <button onClick ={this.props.fetchusers}>call an Api</button>
        </div>
        </div>
      </div>
    )
  }
}

//In redux actions and stores are accessed with props only
const mapStateToProps = (state) =>{
  return{
    numberOfLaptops:state.laptops.numberOfLaptops,
    numberOfMobiles:state.mobiles.numberOfMobiles,
    users:state.users.users
  }
}
const mapDispatchToProps=(dispatch)=>{
  return{
    buyLaptop:() => dispatch(buyLaptop()),
    buyMobile:() => dispatch(buyMobile()),
    fetchusers:() => dispatch(fetchusers())
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(shop);