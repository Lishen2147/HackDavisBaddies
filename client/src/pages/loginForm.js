import React from 'react'
import imageSrc from '../img/login_flag.png'
import '../styles/login.css'
import Navbar from '../components/navbar'


const LoginForm = () => {

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
            const response = await fetch('http://localhost:5000/login-homepage/log-in', {
                method: 'POST',
                body: JSON.stringify(formData),
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            const data = await response.json();
            console.log(data)
            if (response.status === 200) {
                if(data){
                    window.location.replace("http://localhost:3000/landing-page") // redirect to "menu"
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

        let i = 0
        let isFormValid = true

        Object.keys(formData).forEach(key => {
            
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
            <img src={imageSrc} alt="Description" style={{width: '50%', alignSelf: 'center'}}/>
            <div className='input' style={{ textAlign: 'center' }}>
                <label htmlFor='empID'>Employee ID#:</label>
                <input 
                    id='empID'
                    type='empID'
                    name='empID'
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
                    onChange={handleChange}
                    value={formData.password}
                    className={errorBox.password ? 'errorStyle' : ''}
                />
            </div>
            <button className="submit-btn" type='submit'>Log in</button>
        </form>
        </div>
    )
}

export default LoginForm