import React from 'react'
import imageSrc from '../img/login_flag.png'
import '../styles/login.css'

const LoginForm = () => {

    const [formData, setFormData] = React.useState({
        empID: ''
    })

    const [errorBox, setErrorBox] = React.useState({
        empID: false,
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
            const response = await fetch('http://localhost:5000/login-homepage', {
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
                    // window.alert(`${formData.emailaddress} is in the database.`);
                    window.location.replace("http://localhost:3000/access-form")
                }
            }
            else if (response.status === 300) {
                // window.alert(`${formData.emailaddress} is NOT in the database.`);
                window.location.replace("http://localhost:3000/member-detail")
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

        const ucdRegex = /^[a-zA-Z0-9._%+-]+@(ucdavis\.edu)$/i;


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

            // Check if UCD Email Addr
            else if(inputs[i].type === 'email'){
                if(ucdRegex.test(formData[key])){
                    toggleErrorBox(key, false)
                }
                else{
                    toggleErrorBox(key, true)
                    isFormValid = false
                    window.alert(`Please enter a valid "UC Davis email address"`)
                }
            }

            // No Input Error
            else{
                toggleErrorBox(key, false)
            }

            i++
        })
        
        isFormValid && sendFormData();
    }

    return(
        <form onSubmit={handleSubmit}>
            <img src={imageSrc} alt="Image Description" style={{width: '50%', alignSelf: 'center'}}/>
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
            <button className="submit-btn" type='submit'>Log in</button>
        </form>
    )
}

export default LoginForm