import React from 'react';
import NavigationComponent from './NavigationComponent.jsx';
import '../../css/main.css';
import logo from '../../image/FAT-logo.png';
import tv from '../../image/tv.webp';
import laptop from '../../image/laptop1.jpg';
import mobile from '../../image/mobile1.webp';
import ac from '../../image/AC.webp';
import { useNavigate } from 'react-router-dom';

import CardComponent from './CardComponent.jsx';



const UserIndexComponent = () => {

    const navigate = useNavigate();

    const handleClick = function (type,id) {
        console.log("clicked")
        navigate('booking', { state: { type: type, id:id } });
    }

    const data = [
        { id: 1, name: "ac service", image: ac, description: "AC service provided by us is top notch", onClick: handleClick, type: "ac" },
        { id: 2, name: "tv service", image: tv, description: "TV service provided by us is top notch", onClick: handleClick, type: "tv" },
        { id: 3, name: "laptop service", image: laptop, description: "laptop service provided by us is top notch", onClick: handleClick, type: "laptop" },
        { id: 4, name: "mobile service", image: mobile, description: "mobile service provided by us is top notch", onClick: handleClick, type: "mobile" }

    ]

    return (
        <div>
            <header id="title">
                <a href="#title"><img src={logo} alt="logo" /></a>
                <h1>FAT</h1>
            </header>

            <nav id="navbar">
                <NavigationComponent />
            </nav>

            {/*<section id="about-us-container" className="d-flex">
            </section>*/}

            <section id="services-container">
                <div className="container">
                    <h1 className="heading">our services</h1>
                    <div className="box-container">
                        {
                            data.map((element) => {
                                return (
                                    <CardComponent data={element} />
                                )
                            })
                        }

                    </div>
                </div>
            </section>

            <footer id="foot">
                <div className="foot-container">
                    <div className="foot-logo-container">
                        <a href="#title"><img src={logo} alt="logo" /></a>
                        <h1>FAT</h1>
                    </div>
                    <div className="foot-body">
                        <div className="cities-served">
                            <h1>cities served</h1>
                            <p>Delhi Mumbai Kolkata Chennai Hyderabad Bengaluru Pune Jaipur Nagpur</p>
                        </div>
                        <div className="about-us">
                            <span>
                                <a href="#about-us-container">
                                    <p><strong>about us</strong></p>
                                </a>
                            </span>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default UserIndexComponent;
