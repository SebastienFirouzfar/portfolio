import React from 'react';
import { Navigation } from "../pages/Navigation";
import { ListProject } from '../components/CardProject'

//data 
import { list } from '../data/dataInfomation'

export const Projects = () => {
    return (
        <div>
            <Navigation/>
            <h1>Projects</h1>
            <ListProject data={list}/>
        </div>
    );
};


