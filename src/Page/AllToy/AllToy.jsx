// import React from 'react';
import { useEffect, useState } from "react";
import Table from "./Component/Table";

const AllToy = () => {

    const [allToys, setAllToys] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/all-toy')
        .then(res => res.json())
        .then(data => setAllToys(data))
    }, []);

    return (
        <>
            {
                allToys.map((toy, index) => <Table key={toy._id} index={index} toy={toy}></Table>)
            }
        </>
    );
};

export default AllToy;