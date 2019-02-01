import React from 'react'
import {Link, Route, Switch} from 'react-router-dom'
import StepOne from './StepOne';
import StepTwo from './StepTwo';
import StepThree from './StepThree';




export default function Wizard() {
        
     return (
        <div>
            Add New Listing <Link to='/'>Cancel</Link>
            <Switch>
                <Route path='/wizard/step1' component={StepOne}/>
                <Route path='/wizard/step2' component={StepTwo}/>
                <Route path='/wizard/step3' component={StepThree}/>
            </Switch>

        </div>
        )
}

 