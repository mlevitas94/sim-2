import React, {Component} from 'react'
import Axios from 'axios'



class StepThree extends Component {
    constructor(){
        super()
        this.state = {
        
        }
    }
    
    handleChange(field, value) {
        this.setState({ [`${field}`] : value})
    } 
    
    addHouse(){
        const obj = {
            name: this.state.name,
            address: this.state.address,
            city:this.state.city,
            state:this.state.state,
            zipcode:this.state.zipCode
        }
        Axios.post('/api/house', obj)
        .then(res =>{
            console.log(res)
        }).catch(err => {
            console.log(err)
        })
        
    }

   
    render() {
        
        return (
            <div>
                
                <p>Monthly Mortgage Amount</p>
                <input/>
                <br/>
                <p>desired Monthly Rent</p>
                <input/>
                <br/>

                <button
                onClick={()=> this.addHouse()}
                >Submit</button>
            </div>
        )
    }
}

export default StepThree