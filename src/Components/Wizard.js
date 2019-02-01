import React, {Component} from 'react'
import {Link} from 'react-router-dom'



class Wizard extends Component {
    constructor(){
        super()
        this.state = {
           name: '',
           address: '',
           city: '',
           state:'',
           zipCode: ''
        }
    }
   
    render() {
        
        return (
         <div>
             Add New Listing <Link to='/'>Cancel</Link>
             <br/>
             <p>Property Name</p>
             <input value={this.state.name}/>
             <p>Address</p>
             <input value={this.state.address}/>
             <p>City</p>
             <input value={this.state.city}/>
             <p>State</p>
             <input value={this.state.state}/>
             <p>Zipcode</p>
             <input value={this.state.zipCode}/>
             
         </div>
        )
    }
}

export default Wizard 