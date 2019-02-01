import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import updateEverything from '../ducks/reducer'



class StepOne extends Component {
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
    
    handleChange(field, value) {
        this.setState({ [`${field}`] : value})
    }    

    render() {
        console.log(this.props)
        
        return (
         <div>
             <br/>

             <p>Property Name</p>

             <input
             onChange={(e) => this.handleChange("name", e.target.value)}
             value={this.state.name}/>

             <p>Address</p>

             <input 
             onChange={(e) => this.handleChange("address", e.target.value)}
             value={this.state.address}/>

             <p>City</p>

             <input
             onChange={(e) => this.handleChange("city", e.target.value)} 
             value={this.state.city}/>

             <p>State</p>

             <input
             onChange={(e) => this.handleChange("state", e.target.value)} 
             value={this.state.state}/>

             <p>Zipcode</p>

             <input 
             onChange={(e) => this.handleChange("zipCode", e.target.value)} 
             value={this.state.zipCode}/>

             <br/>
             <Link to='/wizard/step2'
             onClick={()=>updateEverything()}
             >Next</Link>

             

             
         </div>
        )
    }
}
 function mapStateToProps(state){
return {
    name: state.name,
    address: state.address,
    city: state.city,
    state: state.state,
    zipCode: state.zipCode,
    }
}

export default connect(mapStateToProps, {updateEverything})(StepOne) 