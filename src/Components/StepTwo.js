import React, {Component} from 'react'
import {Link} from 'react-router-dom'




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

export default StepTwo 