import React, {useState} from 'react';
import * as actionCreators from '../state/actionCreators';
import {connect} from 'react-redux';
import uuid from 'uuid';
import {addSmurfAPI} from '../state/actionCreators';
import {useDispatch} from 'react-redux';




 export default function SmurfForm(props) {
    const initialFormValues = {
        name: '',
        age: '',
        height: '',
        id: uuid()
    }
    const smurfsAPI = 'http://localhost:3333/smurfs';
    const [smurf, setSmurf] = useState(initialFormValues);
    
    
    const dispatch = useDispatch();
    
    const handleChange = (event) => {
        setSmurf({
            ...smurf,
            [event.target.name]: event.target.value,
        })
    }
    
    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(addSmurfAPI(smurfsAPI, smurf));
        setSmurf(initialFormValues);
    }
    return (
        <div>
            <h2>Add a Smurf!</h2>
            <form>
                <input type='text' placeholder='Name' name='name' value={smurf.name} onChange={handleChange}  />
                <input type='number' placeholder='Age' name='age' value={smurf.age} onChange={handleChange} />
                <input type='number' placeholder='Height' name='height' value={smurf.height} onChange={handleChange} />
                <button onClick={handleSubmit}>Submit</button>
            </form>
        </div>
    )
 }