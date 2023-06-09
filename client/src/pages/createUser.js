import React from 'react'
// import imageSrc from '../img/login_flag.png'
import '../styles/login.css'
import Navbar from '../components/navbar-employee'
import { Link } from 'react-router-dom';


const CreateUser = () => {

    const [formData, setFormData] = React.useState({
        empID: '',
        password: ''
    })

    const [errorBox, setErrorBox] = React.useState({
        empID: false,
        password: false
    })
    
    const handleChange = (event) => {
        // event.target is the tag/element itself
        const {name, value} = event.target 
        setFormData(prevFormData => ({
            ...prevFormData,
            [name]: value
        }))
    }

    const toggleErrorBox = (key, value) => {
        setErrorBox(prevErrorBox => 
            ({
                ...prevErrorBox,
                [key]: value
            })
        )
    }

    const sendFormData = async () => {
        console.log(formData)
        try {
            const response = await fetch('http://localhost:5000/login-homepage/create', {
                method: 'POST',
                body: JSON.stringify(formData),
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            const data = await response.json();
            console.log(data)
            if (response.status === 200) {
                // Status code is 200 (OK)
                if(data){
                    window.alert(`User Created`)
                }
            }
            else if (response.status === 300) {
                window.alert(`Incorrect password!`)
            }
            else if (response.status === 400) {
                window.alert(`Sorry! You are NOT in our team.`);
            } 
            else {
                window.alert(`Please Check the values are in right format.`);
            }
        } catch (error) {
            console.error(error);
            window.alert(`There is some error in this program.`);
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault() // won't refresh the page

        const inputs = event.target.elements

        const intOnly = /^[0-9]$/i;
        
        // Invalid Input Check
        let i = 0
        let isFormValid = true

        Object.keys(formData).forEach(key => {
            
            // Input is Empty
            if(formData[key] === ""){
                toggleErrorBox(key, true)
                isFormValid = false
                window.alert(`${key} field cannot be left empty. Please enter a valid input.`)
            }

            else if(inputs[i].type === 'empID'){
                if(intOnly.test(formData[key])){
                    toggleErrorBox(key, false)
                }
                else{
                    toggleErrorBox(key, true)
                    isFormValid = false
                    window.alert(`Integer Only`)
                }
            }

            // No Input Error
            else{
                toggleErrorBox(key, false)
            }
        })
        
        isFormValid && sendFormData();
    }

    return(
        <div>
            <Navbar />
        <form onSubmit={handleSubmit}>
            {/* <img src={imageSrc} alt="Image Description" style={{width: '50%', alignSelf: 'center'}}/> */}
            <h2 style={{textAlign: 'center'}}>Create User</h2>
            <div className='input' style={{ textAlign: 'center' }}>
                <label htmlFor='empID'>Employee ID#:</label>
                <input 
                    id='empID'
                    type='empID'
                    name='empID'
                    // placeholder="Enter Volunteer ID"
                    onChange={handleChange}
                    value={formData.empID}
                    className={errorBox.empID ? 'errorStyle' : ''}
                />
            </div>
            <div className='input' style={{ textAlign: 'center' }}>
                <label htmlFor='password'>Password:</label>
                <input 
                    id='password'
                    type='password'
                    name='password'
                    // placeholder="Enter Password"
                    onChange={handleChange}
                    value={formData.password}
                    className={errorBox.password ? 'errorStyle' : ''}
                />
            </div>
            <button className="submit-btn" type='submit'>Create</button>
        </form>
        </div>
    )
}

export default CreateUser