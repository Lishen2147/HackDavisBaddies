import React from 'react'

const AccessForm = () => {

    const [formData, setFormData] = React.useState({
        requestorEmail: '',
        fullname: '',
        emailaddress: ''
    })

    const [errorBox, setErrorBox] = React.useState({
        requestorEmail: false,
        fullname: false,
        emailaddress: false,
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
            const response = await fetch('http://localhost:5000/access-requests', {
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
                    window.alert(`${formData.fullname} is added to the list successfully.`);
                }
            } else {
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
        <div className='content'>

        <form onSubmit={handleSubmit}>
            <h4>ECOCAR UC Davis Access Request Form</h4>
            <div className='input'>
                <label htmlFor='requestorEmail'>Requestor Email</label>
                <input 
                    id='requestorEmail'
                    type='email'
                    name='requestorEmail'
                    placeholder='Enter Your Email Address'
                    onChange={handleChange}
                    value={formData.requestorEmail}
                    className={errorBox.requestorEmail ? 'errorStyle' : ''}
                />
            </div>
            <div className='input'>
                <label htmlFor='fullname'>Full Name</label>
                <input 
                    id='fullname'
                    type='text'
                    name='fullname'
                    placeholder="Enter New Member's Full Name"
                    onChange={handleChange}
                    value={formData.fullname}
                    className={errorBox.fullname ? 'errorStyle' : ''}
                />
            </div>
            <div className='input'>
                <label htmlFor='emailaddress'>New Member Email</label>
                <input 
                    id='emailaddress'
                    type='email'
                    name='emailaddress'
                    placeholder="Enter new member's Email Address"
                    onChange={handleChange}
                    value={formData.emailaddress}
                    className={errorBox.emailaddress ? 'errorStyle' : ''}
                />
            </div>
            <button className="submit-btn" type='submit'>Submit Form</button>
        </form>
        </div>
    )
}

export default AccessForm