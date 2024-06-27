import './Navbar.css';

export default function Navbar() {
    return (
        <div className="main">
            <div className='logo-loco'>
            <div className="logo">
                <p>Markt</p>
            </div>
            <div className="location">
                <div className="loc-logo">
            <p>T</p>
                </div>
                <p>Scaler School of Technology</p>
            </div>
            </div>

            <div className='ser-acc'>
            <div className="services">

                <div className="bp" id='ser-item'>
                    <p>Buy Products</p>
                </div>
                <div className="sp" id='ser-item'>
                    <p>Sell Products</p>
                </div>
                <div className="bs" id='ser-item'>
                    <p>Buy Services</p>
                </div>
                <div className="bs" id='ser-item'>
                    <p>Sell Services</p>
                </div>

            </div>
            <div className="account">
                <div className='name'>
                    <p>Rohith Thirunagari</p>
                </div>
                <div className='profile'>
                    <p>O</p>
                </div>
            </div>
            </div>

        </div>
    );
};