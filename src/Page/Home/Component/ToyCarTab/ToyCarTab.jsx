// import React from 'react';

// import { useState } from "react";

const ToyCarTab = () => {

    // const [activeTab, setActiveTab] = useState();

    return (
        <div className="container">
            <ul className="nav nav-tabs">
                <li className="nav-item">
                    <a className="nav-link text-secondary">Active</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link active">Link</a>
                </li>
            </ul>
        </div>
    );
};

export default ToyCarTab;