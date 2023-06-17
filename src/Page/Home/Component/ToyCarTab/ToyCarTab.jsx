// import React from 'react';
import { useEffect, useState } from "react";
import './ToyCarTab.css'
import ToyCar from "../ToyCar/ToyCar";

const ToyCarTab = () => {

    const [toys, setToy] = useState([]);
    const [activeCarTab, setActiveCarTab] = useState('Regular car');

    useEffect(() => {
        fetch(`http://localhost:5000/toy/${activeCarTab}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setToy(data);
            })
    }, [activeCarTab]);

    const carTab = data => {
        console.log(data);
        setActiveCarTab(data);
    }

    return (
        <div className="container py-5">
            <h2 className="text-center text-secondary mb-5">Shop By Car Category</h2>
            <ul className="nav nav-tabs">
                <li className="nav-item">
                    <a className={`nav-link text-secondary fw-semibold cursor ${activeCarTab == 'Regular car' ? 'active text-dark' : ''}`} onClick={() => carTab('Regular car')}>Regular Car</a>
                </li>
                <li className="nav-item">
                    <a className={`nav-link text-secondary fw-semibold cursor ${activeCarTab == 'Sports car' ? 'active text-dark' : ''}`} onClick={() => carTab('Sports car')}>Sports Car</a>
                </li>
                <li className="nav-item">
                    <a className={`nav-link text-secondary fw-semibold cursor ${activeCarTab == 'Regular truck' ? 'active text-dark' : ''}`} onClick={() => carTab('Regular truck')}>Regular Truck</a>
                </li>
            </ul>
            <div className="d-flex gap-4 mt-4 flex-wrap">
                {
                    toys.map(toy => <ToyCar key={toy._id} toy={toy}></ToyCar>)
                }
            </div>
        </div>
    );
};

export default ToyCarTab;