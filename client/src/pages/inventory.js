import React from 'react'
import '../styles/inventory.css'

const Inventory = () => {

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

    const gridData = ['Item 1', 'Item 2', 'Item 3', 'Item 4'];

    return(
        <div className='inventory-container'>
            <div className="inventory-content">
                <div>
                    
                </div>
                <div className="filter">
                <div className='input'>
                            <label htmlFor='color'>Color</label>
                            <select
                                id='color'
                                name='color'
                                onChange={handleChange}
                                value={formData.color}
                                className={errorBox.color & !formData.color ? 'errorStyle' : ''}
                            >
                                <option value=''>-- Select Color --</option>
                                <option value="red">Red</option>
                                <option value='blue'>Blue</option>
                                <option value='green'>Green</option>
                                <option value='yellow'>Yellow</option>
                                <option value='orange'>Orange</option>
                                <option value='purple'>Purple</option>
                                <option value='pink'>Pink</option>
                                <option value='cyan'>Cyan</option>
                                <option value='magenta'>Magenta</option>
                                <option value='teal'>Teal</option>
                                <option value='black'>Black</option>
                                <option value='white'>White</option>
                                <option value='gray'>Gray</option>
                            </select>
                        </div>
                        <div className='input'>
                            <label htmlFor='brandName'>Brand</label>
                            <input
                                id='brandName'
                                type='text'
                                name='brandName'
                                placeholder="Enter Brand Name"
                                onChange={handleChange}
                                value={formData.lastName}
                                className={errorBox.lastName & !formData.lastName ? 'errorStyle' : ''}
                            />
                        </div>
                        <div className='input'>
                            <label htmlFor='size'>Size</label>
                            <select
                                id='size'
                                name='size'
                                onChange={handleChange}
                                value={formData.size}
                                className={errorBox.size & !formData.size ? 'errorStyle' : ''}
                            >
                                <option value=''>-- Select Size --</option>
                                <option value="XXS">XXS</option>
                                <option value='XS'>XS</option>
                                <option value='S'>S</option>
                                <option value='M'>M</option>
                                <option value='L'>L</option>
                                <option value='XL'>XL</option>
                                <option value='XXL'>XXL</option>
                            </select>
                        </div>
                        <div className='input'>
                            <label htmlFor='gender'> Gender </label>
                            <select
                                id='gender'
                                name='gender'
                                onChange={handleChange}
                                value={formData.gender}
                                className={errorBox.gender & !formData.gender ? 'errorStyle' : ''}
                            >
                                <option value=''>-- Select Gender --</option>
                                <option value="menswear">Menswear</option>
                                <option value='womenswear'>Womenswear</option>
                                <option value='neutral'>Neutral</option>
                            </select>
                        </div>
                        <div className='input'>
                            <label htmlFor='category'>Category</label>
                            <select
                                id='category'
                                name='category'
                                onChange={handleChange}
                                value={formData.category}
                                className={errorBox.category & !formData.category ? 'errorStyle' : ''}
                            >
                                <option value=''>-- Select Category --</option>
                                <option value="tops">Tops</option>
                                <option value='bottoms'>Bottoms</option>
                                <option value='dresses'>Dresses</option>
                                <option value='lingerie'>Lingerie</option>
                                <option value='outerwear'>Outerwear</option>
                                <option value='accessories'>Accessories</option>
                                <option value='shoes'>Shoes</option>
                                <option value='sets'>Sets</option>
                            </select>
                        </div>
                </div>
                <div className="grid-container">
                    {gridData.map((item, index) => (
                        <div key={index} className="grid-item">{item}</div>
                        
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Inventory