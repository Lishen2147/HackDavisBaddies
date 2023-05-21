import React, { useState } from 'react'

const NewItemForm = () => {

    const [formData, setFormData] = React.useState({
        color: '',
        brand: '',
        size: '',
        category: '',
        notes: '',
        gender: ' ',
    })

    const [errorBox, setErrorBox] = React.useState({
        color: false,
        brand: false,
        size: false,
        category: false,
        notes: false,
        gender: false,
    })

    const handleChange = (event) => {
        // event.target is the tag/element itself
        const { name, value } = event.target
        setFormData(prevFormData => ({
            ...prevFormData,
            [name]: value
        }))
    }

    const toggleErrorBoxFalse = (key) => {
        setErrorBox((prevErrorBox) => {
            return ({
                ...prevErrorBox,
                [key]: false
            })
        })
    }
    const toggleErrorBoxTrue = (key) => {
        setErrorBox((prevErrorBox) => {
            return ({
                ...prevErrorBox,
                [key]: true
            })
        })
    }

    const sendFormData = async () => {
        console.log(formData)
        try {
            const response = await fetch('http://localhost:5000/member-detail', {
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
                if (data) {
                    window.alert(`${formData.firstName} is added to the list successfully.`);
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
        Object.keys(formData).forEach(key => {
            if (formData[key] === "") {
                toggleErrorBoxTrue(key)
            }
            else if (key === 'emailaddress') {
                if (formData[key].includes('@')) {
                    toggleErrorBoxFalse(key)
                } else {
                    toggleErrorBoxTrue(key)
                }
            }
            else if (key === 'phoneNumber') {
                if (formData[key].length === 10) {
                    toggleErrorBoxFalse(key)
                } else {
                    toggleErrorBoxTrue(key)
                }
            }
            else {
                toggleErrorBoxFalse(key)
            }
        });
        const isFormValid = Object.values(formData).every((value) => value !== "");

        isFormValid ? sendFormData() : window.alert(`Please complete the application.`);

        console.log(formData);
    }

    const [showImage , setShowImage] = useState(false);
    
    const handleButtonClick = () => {
        setShowImage(true);
    };
    
  

    return (

        <div className='content'>
            <form onSubmit={handleSubmit}>
                <h4>Log a new item</h4>
                <div style={{ display: 'flex' }}>
                    <div className='form_left'>
                        <h5>Upload Image</h5>
                        <div>
                            {showImage ? (
                                <img src="/Users/thelemperor/git/HackDavisBaddies/client/src/img/horiz_transparent.png" alt="Image description" />
                            ) : (
                                <div className="image-box"></div>
                            )}
                            {/* <button onClick={handleButtonClick}>Show Image</button> */}
                        </div>                      
                        <button className="image_button" type='submit'>Select File</button>
                        <button className="image_button" type='submit'>Take Image</button>


                    </div>
                    <div style={{ flex: 1 }}>
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
                        <div className='input'>
                            <label htmlFor='notes'> Notes </label>
                            <input
                                id='notes'
                                type='text'
                                name='notes'
                                placeholder="Enter notes"
                                onChange={handleChange}
                                value={formData.notes}
                                className={errorBox.notes & !formData.notes ? 'errorStyle' : ''}
                            />
                        </div>
                    </div>
                </div>

                <button className="submit-btn" type='submit'>Submit Form</button>
            </form>

        </div>
    )
}

export default NewItemForm