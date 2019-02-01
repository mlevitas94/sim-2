import React, {Component} from 'react'
import House from './House';
import {Link} from 'react-router-dom'
import Axios from 'axios';



class Dashboard extends Component {
    constructor(){
        super()
        this.state = {
           houses: []
        }
    }

    componentDidMount(){
        Axios.get('/api/houses')
        .then(res => {
            console.log( res.body)
            this.setState({
                houses: res.body
            })
        })
    }
   
    render() {
        //make props and stuff to make house not display as a straight object yo
       let houseList = this.state.houses.map((house, i) => {
           return (
               <House
               key={i}
               />
           )
       } )
        return (
         <div>
             Dashboard <Link to ='/wizard'>Add New Propery</Link>
             {houseList}
    
         </div>
        )
    }
}

export default Dashboard 
