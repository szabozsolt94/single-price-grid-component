import { Link } from 'react-scroll'

const Subscription = ({ onClick, bottomRadius }) => {
    return (
        <div className="box" id={"sub-box"} style={{ borderBottomLeftRadius: bottomRadius }}>
            <h3>Monthly subscription</h3>
            <h2>$29</h2><span>per month</span>
            <p>Full access for less than 1$ a day</p>
            <Link activeClass="active" to="submit" spy={true} smooth={false}>
                <button className="button" onClick={onClick} title="Sign up now!">Sign up</button>
            </Link>

        </div>
    )
}

export default Subscription