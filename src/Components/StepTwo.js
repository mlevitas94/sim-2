import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'




class StepTwo extends Component {
    constructor(){
        super()
        this.state = {
        
        }
    }
    
    handleChange(field, value) {
        this.setState({ [`${field}`] : value})
    }    

   
    render() {
        console.log(this.props)
        
        return (
            
            <div>
                
                <p>Image URL</p>
                <input/>
                <br/>
                <Link to='/wizard/step3'>Next</Link>
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

export default connect(mapStateToProps)(StepTwo) 