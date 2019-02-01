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

        this.deleteHouse=this.deleteHouse.bind(this)
    }

    componentDidMount(){
        Axios.get('/api/house')
        .then(res => {
            console.log( res.data)
            this.setState({
                houses: res.data
            })
        }).catch((err) => console.log(err))
    }

    deleteHouse(id){
        Axios.delete(`/api/house/${id}`)
        .then((res) => {console.log(res)})
        .catch(err => {console.log(err)})

        this.componentDidMount()
    }
   
    render() {
        //make props and stuff to make house not display as a straight object yo
       let houseList = this.state.houses.map((house, i) => {
           return (
               <House
               className ="house"
               id={house.id}
               key={i}
               name={house.name}
               address={house.address}
               city={house.city}
               state={house.state}
               zipCode={house.zipcode}
               delete={this.deleteHouse}
               />
           )
       } )
        return (
         <div>
             Dashboard <Link to ='/wizard/step1'>Add New Propery</Link>
             {houseList}
    
         </div>
        )
    }
}

export default Dashboard 
