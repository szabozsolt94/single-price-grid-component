const Form = ({ visibility, position, top }) => {
    return (
        <div className="box" id={"form-box"} style={{ visibility: visibility, position: position, top: top }}>
            <label htmlFor="firstName"><h3>First name</h3></label><input type="text" id="firstName" name="firstName" />
            <label htmlFor="lastName"><h3>Last name</h3></label><input type="text" id="lastName" name="lastName" />
            <label htmlFor="birthday"><h3>Birthday</h3></label><input type="date" id="birthday" name="birthday" />
            <label htmlFor="address"><h3>Billing address</h3></label><input type="text" id="address" name="address" />
            <button className="button" id="submit" title="Click to submit!">Submit</button>
        </div>
    )
}

export default Form