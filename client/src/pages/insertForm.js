import React, { useState } from 'react'
import Navbar from '../components/navbar-employee'
import  '../styles/insertForm.css'

const NewItemForm = () => {

    const [formData, setFormData] = React.useState({
        color: '',
        brand: '',
        size: '',
        category: '',
        notes: '',
        gender: ''
    })

    const [errorBox, setErrorBox] = React.useState({
        color: false,
        brand: false,
        size: false,
        category: false,
        notes: false,
        gender: false
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
            const response = await fetch('http://localhost:5000/inventory/insert', {
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
                    window.alert(`This item is added to the list successfully.`);
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
        // console.log( Object.keys(formData))
        Object.keys(formData).forEach(key => {
            if (formData[key] === "") {
                toggleErrorBoxTrue(key)
            }
            else {
                toggleErrorBoxFalse(key)
            }
        });
        const isFormValid = Object.values(formData).every((value) => value !== "");

        isFormValid ? sendFormData() : window.alert(`Please complete the application.`);

        console.log(formData);
    }

    const [selectedImage, setSelectedImage] = useState(null);

    return (
        <div>
            <Navbar />
            <form onSubmit={handleSubmit}>
                <div style={{ display: 'flex' }}>
                    <div className='form_left'>
                        <div>
                            {selectedImage ? (
                                <div>
                                <img
                                    alt="not found"
                                    width={"250px"}
                                    src={URL.createObjectURL(selectedImage)}
                                /> 
                                <br />
                                <button onClick={() => setSelectedImage(null)}>Remove</button>
                                </div>
                                ) : (
                                <div className="image-box"></div>
                            )}
                        </div>
                        <h5 class="upload-image">Upload Image</h5>
                        <label htmlFor="fileInput" className="file-input-label">
                            Select File
                            <input
                                type="file"
                                name="myImage"
                                onChange={(event) => {
                                    console.log(event.target.files[0]);
                                    setSelectedImage(event.target.files[0]);
                                }}
                                id="fileInput"
                            />
                        </label>                        
                        <button className="image_button" type="button">Take Image</button>
                    </div>
                    <div style={{ flex: 1 }}>
                        <div className='input'>
                            <label htmlFor='color' style={{ textAlign: 'center' }}>Color</label>
                            <select
                                id='color'
                                name='color'
                                onChange={handleChange}
                                value={formData.color}
                                className={errorBox.color & !formData.color ? 'errorStyle' : ''}
                            >
                                <option value=''></option>
                                <option value="Red">Red</option>
                                <option value='Blue'>Blue</option>
                                <option value='Green'>Green</option>
                                <option value='Yellow'>Yellow</option>
                                <option value='Orange'>Orange</option>
                                <option value='Purple'>Purple</option>
                                <option value='Pink'>Pink</option>
                                <option value='Cyan'>Cyan</option>
                                <option value='Magenta'>Magenta</option>
                                <option value='Teal'>Teal</option>
                                <option value='Black'>Black</option>
                                <option value='White'>White</option>
                                <option value='Gray'>Gray</option>
                            </select>
                        </div>
                        <div className='input'>
                            <label htmlFor='brand' style={{ textAlign: 'center' }}>Brand</label>
                            <input
                                id='brand'
                                type='text'
                                name='brand'
                                // placeholder="Enter Brand Name"
                                onChange={handleChange}
                                value={formData.lastName}
                                className={errorBox.lastName & !formData.lastName ? 'errorStyle' : ''}
                            />
                        </div>
                        <div className='input'>
                            <label htmlFor='size' style={{ textAlign: 'center' }}>Size</label>
                            <select
                                id='size'
                                name='size'
                                onChange={handleChange}
                                value={formData.size}
                                className={errorBox.size & !formData.size ? 'errorStyle' : ''}
                            >
                                <option value=''></option>
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
                            <label htmlFor='gender' style={{ textAlign: 'center' }}> Gender </label>
                            <select
                                id='gender'
                                name='gender'
                                onChange={handleChange}
                                value={formData.gender}
                                className={errorBox.gender & !formData.gender ? 'errorStyle' : ''}
                            >
                                <option value=''></option>
                                <option value="Menswear">Menswear</option>
                                <option value='Womenswear'>Womenswear</option>
                                <option value='Neutral'>Neutral</option>
                            </select>
                        </div>
                        <div className='input'>
                            <label htmlFor='category' style={{ textAlign: 'center' }}>Category</label>
                            <select
                                id='category'
                                name='category'
                                onChange={handleChange}
                                value={formData.category}
                                className={errorBox.category & !formData.category ? 'errorStyle' : ''}
                            >
                                <option value=''></option>
                                <option value="Tops">Tops</option>
                                <option value='Bottoms'>Bottoms</option>
                                <option value='Dresses'>Dresses</option>
                                <option value='Lingerie'>Lingerie</option>
                                <option value='Outerwear'>Outerwear</option>
                                <option value='Accessories'>Accessories</option>
                                <option value='Shoes'>Shoes</option>
                                <option value='Sets'>Sets</option>
                            </select>
                        </div>
                        <div className='input'>
                            <label htmlFor='notes' style={{ textAlign: 'center' }}> Notes </label>
                            <input
                                id='notes'
                                type='text'
                                name='notes'
                                // placeholder="Enter notes"
                                onChange={handleChange}
                                value={formData.notes}
                                className={errorBox.notes & !formData.notes ? 'errorStyle' : ''}
                            />
                        </div>
                    </div>
                </div>

                <button className="submit-btn" type='submit'>Log Item</button>
            </form>
        </div>
    )
}

export default NewItemForm