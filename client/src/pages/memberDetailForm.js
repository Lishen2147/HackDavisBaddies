import React from 'react'

const MemberDetailForm = () => {

    const [formData, setFormData] = React.useState({
        firstName: '',
        lastName: '',
        emailaddress: '',
        phoneNumber: '',
        subTeam: '',
        leaderShipRole: '',
        degree: '',
        major: '',
        classType: '', // class
        graduationTerm: '',
        lookEmployment: '',
        employmentBegins: '',
        gender: '',
        raceEthnicity: '',
        countryCitizenship: '',
        tShirtSize: '',
        linkedInURL: ''
    })

    const [errorBox, setErrorBox] = React.useState({
        firstName: false,
        lastName: false,
        emailaddress: false,
        phoneNumber: false,
        subTeam: false,
        leaderShipRole: false,
        degree: false,
        major: false,
        classType: false, // class
        graduationTerm: false,
        lookEmployment: false,
        employmentBegins: false,
        gender: false,
        raceEthnicity: false,
        countryCitizenship: false,
        tShirtSize: false,
        linkedInURL: false
    })
    
    const handleChange = (event) => {
        // event.target is the tag/element itself
        const {name, value} = event.target 
        setFormData(prevFormData => ({
            ...prevFormData,
            [name]: value
        }))
    }

    const toggleErrorBoxFalse = (key) => {
        setErrorBox((prevErrorBox)=>{
            return({
                ...prevErrorBox,
                [key]: false
            })
        })
    }
    const toggleErrorBoxTrue = (key) => {
        setErrorBox((prevErrorBox)=>{
            return({
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
                if(data){
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
            if(formData[key] === ""){
                toggleErrorBoxTrue(key)
            }
            else if(key==='emailaddress'){
                if(formData[key].includes('@')){
                    toggleErrorBoxFalse(key)
                }else{
                    toggleErrorBoxTrue(key)
                }
            }
            else if(key === 'phoneNumber'){
                if(formData[key].length === 10){
                    toggleErrorBoxFalse(key)
                }else{
                    toggleErrorBoxTrue(key)
                }
            }
            else{
                toggleErrorBoxFalse(key)
            }
        });
        const isFormValid = Object.values(formData).every((value) => value !== "");
        
        isFormValid ? sendFormData() :  window.alert(`Please complete the application.`);

        console.log(formData);
    }

    return(
        <div className='content'>

        <form onSubmit={handleSubmit}>
            <h4>ECOCAR UC Davis Member Detail Form</h4>
            <div className='input'>
                <label htmlFor='firstName'>First Name</label>
                <input 
                    id='firstName'
                    type='text'
                    name='firstName'
                    placeholder="Enter your First Name"
                    onChange={handleChange}
                    value={formData.firstName}
                    className={errorBox.firstName & !formData.firstName ? 'errorStyle' : ''}
                />
            </div>
            <div className='input'>
                <label htmlFor='lastName'>Last Name</label>
                <input 
                    id='lastName'
                    type='text'
                    name='lastName'
                    placeholder="Enter your Last Name"
                    onChange={handleChange}
                    value={formData.lastName}
                    className={errorBox.lastName & !formData.lastName ? 'errorStyle' : ''}
                />
            </div>
            <div className='input'>
                <label htmlFor='emailaddress'>Permanent Email Address</label>
                <input 
                    id='emailaddress'
                    type='email'
                    name='emailaddress'
                    placeholder="Enter your Email Address"
                    onChange={handleChange}
                    value={formData.emailaddress}
                    className={errorBox.emailaddress & !formData.emailaddress? 'errorStyle' : ''}
                />
            </div>
            <div className='input'>
                <label htmlFor='phoneNumber'>Phone Number</label>
                <input 
                    id='phoneNumber'
                    type='text'
                    name='phoneNumber'
                    placeholder="ex) 5551234567"
                    onChange={handleChange}
                    value={formData.phoneNumber}
                    className={errorBox.phoneNumber & !formData.phoneNumber ? 'errorStyle' : ''}
                />
            </div>
            <div className='input'>
                <label htmlFor='subTeam'>
                    Enter Your SubTeam
                </label>
                <select
                    id='subTeam'
                    name='subTeam'
                    onChange={handleChange}
                    value={formData.subTeam}
                    className={errorBox.subTeam & !formData.subTeam ? 'errorStyle' : ''}
                >
                    <option value=''>-- Choose --</option>
                    <option value="PCM">PCM</option>
                    <option value='SDI'>SDI</option>
                    <option value='CAV'>CAV</option>
                    <option value='PM'>PM</option>
                    <option value='System Safety'>System Safety</option>
                    <option value='HMI/UX'>HMI/UX</option>
                    <option value='Communications'>Communications</option>
                    <option value='DEI'>DEI</option>
                    <option value='n/a (faculty)'>n/a (faculty)</option>
                </select>
            </div>
            <div className='input'>
                <label htmlFor='leaderShipRole'>
                    Leadership Role
                </label>
                <select
                    id='leaderShipRole'
                    name='leaderShipRole'
                    onChange={handleChange}
                    value={formData.leaderShipRole}
                    className={errorBox.leaderShipRole & !formData.leaderShipRole ? 'errorStyle' : ''}
                >
                    <option value=''>-- Choose --</option>
                    <option value="NONE">None</option>
                    <option value='Technical Specialist'>Technical Specialist</option>
                    <option value='CAVs GRA'>CAVs GRA</option>
                    <option value='PCM GRA'>PCM GRA</option>
                    <option value='DEIM'>DEIM</option>
                    <option value='PM'>PM</option>
                    <option value='SDI Subteam Leader'>SDI Subteam Leader</option>
                    <option value='CAVs Subteam Leader'>CAVs Subteam Leader</option>
                    <option value='PCM Subteam Leader'>PCM Subteam Leader</option>
                    <option value='HMI Subteam Leader'>HMI Subteam Leader</option>
                    <option value='CM'>CM</option>
                    <option value='Other'>Other</option>
                    <option value='n/a (faculty)'>n/a (faculty)</option>
                </select>
            </div>
            <div className='input'>
                <label htmlFor='degree'>
                    Degree
                </label>
                <select
                    id='degree'
                    name='degree'
                    onChange={handleChange}
                    value={formData.degree}
                    className={errorBox.degree & !formData.degree ? 'errorStyle' : ''}
                >
                    <option value=''>-- Choose --</option>
                    <option value="Associates">Associates</option>
                    <option value='Bachelors'>Bachelors</option>
                    <option value='Masters'>Masters</option>
                    <option value='Other'>Other</option>
                    <option value='n/a (faculty)'>n/a (faculty)</option>
                </select>
            </div>
            <div className='input'>
                <label htmlFor='major'>
                    Major
                </label>
                <select
                    id='major'
                    name='major'
                    onChange={handleChange}
                    value={formData.major}
                    className={errorBox.major & !formData.major ? 'errorStyle' : ''}
                >
                    <option value=''>-- Choose --</option>
                    <option value="Accounting/Finance">Accounting/Finance</option>
                    <option value='Aeronautics & Astronautics'>Aeronautics & Astronautics</option>
                    <option value='Aerospace Engineering'>Aerospace Engineering</option>
                    <option value='Agriculture Engineering'>Agriculture Engineering</option>
                    <option value='Automotive Engineering'>Automotive Engineering</option>
                    <option value='Biomedical Engineering'>Biomedical Engineering</option>
                    <option value='Business/Economics'>Business/Economics</option>
                    <option value='Chemical Engineering'>Chemical Engineering</option>
                    <option value='Civil Engineering'>Civil Engineering</option>
                    <option value='Communication/Public Relations'>Communication/Public Relations</option>
                    <option value='Computer Science'>Computer Science</option>
                    <option value='Control System Engineering'>Control System Engineering</option>
                    <option value='Criminal Justice'>Criminal Justice</option>
                    <option value='Electric Vehicle Engineering'>Electric Vehicle Engineering</option>
                    <option value='Electrical/Computer Engineering'>Electrical/Computer Engineering</option>
                    <option value='Environmental Engineering'>Environmental Engineering</option>
                    <option value='Film'>Film</option>
                    <option value='Geography and Aviation'>Geography and Aviation</option>
                    <option value='Geomatics'>Geomatics</option>
                    <option value='Human Factors/Human-Centered Design'>Human Factors/Human-Centered Design</option>
                    <option value='Industrial/Systems Engineering'>Industrial/Systems Engineering</option>
                    <option value='Informatics'>Informatics</option>
                    <option value='International Studies'>International Studies</option>
                    <option value='Literature & Professional Writing'>Literature & Professional Writing</option>
                    <option value='Management'>Management</option>
                    <option value='Marketing/Advertising'>Marketing/Advertising</option>
                    <option value='Mathematics'>Mathematics</option>
                    <option value='Mechanical Engineering'>Mechanical Engineering</option>
                    <option value='Mechatronics Engineering'>Mechatronics Engineering</option>
                    <option value='Nanotechnology Engineering'>Nanotechnology Engineering</option>
                    <option value='Physics'>Physics</option>
                    <option value='Political Science'>Political Science</option>
                    <option value='Psychology/Sociology'>Psychology/Sociology</option>
                    <option value='Software Engineering'>Software Engineering</option>
                    <option value='Other'>Other</option>
                    
                </select>
            </div>
            <div className='input'>
                <label htmlFor='classType'>
                    Class
                </label>
                <select
                    id='classType'
                    name='classType'
                    onChange={handleChange}
                    value={formData.classType}
                    className={errorBox.classType & !formData.classType ? 'errorStyle' : ''}
                >
                    <option value=''>-- Choose --</option>
                    <option value="Freshman">Freshman</option>
                    <option value='Sophomore'>Sophomore</option>
                    <option value='Junior'>Junior</option>
                    <option value='Senior'>Senior</option>
                    <option value='5th Year'>5th Year</option>
                    <option value='Graduate Student'>Graduate Student</option>
                    <option value='Faculty'>Faculty</option>
                </select>
            </div>
            <div className='input'>
                <label htmlFor='graduationTerm'>
                    Graduation Term
                </label>
                <select
                    id='graduationTerm'
                    name='graduationTerm'
                    onChange={handleChange}
                    value={formData.graduationTerm}
                    className={errorBox.graduationTerm & !formData.graduationTerm ? 'errorStyle' : ''}
                >
                    <option value=''>-- Choose --</option>
                    <option value="Fall 2022">Fall 2022</option>
                    <option value='Spring 2023'>Spring 2023</option>
                    <option value='Summer 2023'>Summer 2023</option>
                    <option value='Fall 2023'>Fall 2023</option>
                    <option value='Spring 2024'>Spring 2024</option>
                    <option value='Summer 2024'>Summer 2024</option>
                    <option value='Fall 2024'>Fall 2024</option>
                    <option value='Spring 2025 or later'>Spring 2025 or later</option>
                    <option value='n/a (faculty)'>n/a (faculty)</option>
                </select>
            </div>
            <div className='input'>
                <label htmlFor='lookEmployment'>
                    Looking for employment?
                </label>
                <select
                    id='lookEmployment'
                    name='lookEmployment'
                    onChange={handleChange}
                    value={formData.lookEmployment}
                    className={errorBox.lookEmployment & !formData.lookEmployment ? 'errorStyle' : ''}
                >
                    <option value=''>-- Choose --</option>
                    <option value="Yes: Full-Time">Yes: Full-Time</option>
                    <option value='Yes: Internship'>Yes: Internship</option>
                    <option value='Yes: Co-op'>Yes: Co-op</option>
                    <option value='Yes: Internship or Co-op'>Yes: Internship or Co-op</option>
                    <option value='No'>No</option>
                </select>
            </div>
            <div className='input'>
                <label htmlFor='employmentBegins'>
                    Begin of Employment
                </label>
                <select
                    id='employmentBegins'
                    name='employmentBegins'
                    onChange={handleChange}
                    value={formData.employmentBegins}
                    className={errorBox.employmentBegins & !formData.employmentBegins ? 'errorStyle' : ''}
                >
                    <option value=''>-- Choose --</option>
                    <option value="Winter 2022">Winter 2022</option>
                    <option value='Summer 2023'>Summer 2023</option>
                    <option value='Fall 2023'>Fall 2023</option>
                    <option value='Winter 2023'>Winter 2023</option>
                    <option value='Summer 2024'>Summer 2024</option>
                    <option value='Fall 2024'>Fall 2024</option>
                    <option value='n/a'>n/a</option>
                </select>
            </div>
            <div className='input'>
                <label htmlFor='gender'>Gender</label>
                <select 
                    id='gender'
                    name='gender'
                    placeholder="Enter your Gender"
                    onChange={handleChange}
                    value={formData.gender}
                    className={errorBox.gender & !formData.gender? 'errorStyle' : ''}
                >
                    <option value=''>-- Choose --</option>
                    <option value="Male">Male</option>
                    <option value='Female'>Female</option>
                    <option value='Non-binary'>Non-binary</option>
                    <option value='n/a'>Prefer not to say</option>
                </select>
            </div>
            <div className='input'>
                <label htmlFor='raceEthnicity'>
                    Race/Ethnicity
                </label>
                <select
                    id='raceEthnicity'
                    name='raceEthnicity'
                    onChange={handleChange}
                    value={formData.raceEthnicity}
                    className={errorBox.raceEthnicity & !formData.raceEthnicity ? 'errorStyle' : ''}
                >
                    <option value=''>-- Choose --</option>
                    <option value="Asian">Asian</option>
                    <option value='Black'>Black</option>
                    <option value='Hispanic'>Hispanic</option>
                    <option value='Middle Eastern'>Middle Eastern</option>
                    <option value='Multi-Racial'>Multi-Racial</option>
                    <option value='Native American'>Native American</option>
                    <option value='Pacific Islander'>Pacific Islander</option>
                    <option value='White'>White</option>
                    <option value='Other'>Other</option>
                    <option value='Prefer Not to Answer'>Prefer Not to Answer</option>
                </select>
            </div>
            <div className='input'>
                <label htmlFor='countryCitizenship'>Country/Citizenship</label>
                <input 
                    id='countryCitizenship'
                    type='text'
                    name='countryCitizenship'
                    placeholder="Enter your Country/Citizenship"
                    onChange={handleChange}
                    value={formData.countryCitizenship}
                    className={errorBox.countryCitizenship & !formData.countryCitizenship ? 'errorStyle' : ''}
                />
            </div>
            <div className='input'>
                <label htmlFor='tShirtSize'>
                    T-Shirt Size
                </label>
                <select
                    id='tShirtSize'
                    name='tShirtSize'
                    onChange={handleChange}
                    value={formData.tShirtSize}
                    className={errorBox.tShirtSize & !formData.tShirtSize ? 'errorStyle' : ''}
                >
                    <option value=''>-- Choose --</option>
                    <option value="Male XS">Male XS</option>
                    <option value="Male S">Male S</option>
                    <option value="Male M">Male M</option>
                    <option value="Male L">Male L</option>
                    <option value="Male XL">Male XL</option>
                    <option value="Male 2XL">Male 2XL</option>
                    <option value="Male 3XL">Male 3XL</option>
                    <option value="Male 4XL">Male 4XL</option>
                    <option value="Female XS">Female XS</option>
                    <option value="Female S">Female S</option>
                    <option value="Female M">Female M</option>
                    <option value="Female L">Female L</option>
                    <option value="Female XL">Female XL</option>
                    <option value="Female 2XL">Female 2XL</option>
                    <option value="Female 3XL">Female 3XL</option>
                    <option value="Female 4XL">Female 4XL</option>

                </select>
            </div>
            <div className='input'>
                <label htmlFor='linkedInURL'>LinkedIn</label>
                <input 
                    id='linkedInURL'
                    type='text'
                    name='linkedInURL'
                    placeholder="Enter your LikedIn Url"
                    onChange={handleChange}
                    value={formData.linkedInURL}
                    className={errorBox.linkedInURL & !formData.linkedInURL ? 'errorStyle' : ''}
                />
            </div>
            {/* <div className='input'>
                <label htmlFor='photoWaiver'>photoWaiver</label>
                <input 
                    id='photoWaiver'
                    type='text'
                    name='photoWaiver'
                    placeholder="Enter your photoWaiver"
                    onChange={handleChange}
                    value={formData.photoWaiver}
                    className={errorBox.photoWaiver ? 'errorStyle' : ''}
                />
            </div>
            <div className='input'>
                <label htmlFor='gm'>gm</label>
                <input 
                    id='gm'
                    type='text'
                    name='gm'
                    placeholder="Enter your gm"
                    onChange={handleChange}
                    value={formData.gm}
                    className={errorBox.gm ? 'errorStyle' : ''}
                />
            </div> */}
            <button className="submit-btn" type='submit'>Submit Form</button>
        </form>
        
        </div>
    )
}

export default MemberDetailForm