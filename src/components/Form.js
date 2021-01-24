const Form = ({ visibility, position, top }) => {

    const year = []
    for (let i = 1900; i <= 2021; i++) { year.push(i) }
    const month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    const day = []
    for (let i = 1; i <= 31; i++) { day.push(i) }

    return (
        <div className='box' id={'form-box'} style={{ visibility: visibility, position: position, top: top }}>

            <label htmlFor='firstName'><p>Your name</p></label>
            <div id='name-box'>
                <input type='text' id='firstName' name='firstName' placeholder='First name' />
                <input type='text' id='lastName' name='lastName' placeholder='Last name' />
            </div>


            <label htmlFor='birthday'><p>Date of birth</p></label>
            <div id='birthday-box'>
                <select name='day' id='day' defaultValue={'default'} required>
                    <option value='default' disabled hidden>dd</option>
                    {day.map((day, i) => <option key={day + i} value={day}>{day.toString().length === 1 ? '0' + day : day}</option>)}
                </select>

                <select name='month' id='month' defaultValue={'default'} required>
                    <option value='default' disabled hidden>mm</option>
                    {month.map((month, i) => <option key={month + i} value={month}>{month}</option>)}
                </select>

                <select name='year' id='year' defaultValue={'default'} required>
                    <option value='default' disabled hidden>yyyy</option>
                    {year.map((year, i) => <option key={year + i} value={year}>{year}</option>)}
                </select>
            </div>

            <label htmlFor='email'><p>Email address</p></label><input type='email' id='email' name='email' placeholder='Enter your email address' />

            <label htmlFor='address'><p>Billing address</p></label><input type='address' id='address' name='address' placeholder='Enter your address' />

            <button className='button' id='submit' title='Click to submit!'>Submit</button>
        </div>
    )
}

export default Form