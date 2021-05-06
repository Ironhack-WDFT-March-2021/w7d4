import React from 'react'
import { myProjects } from './Projects';
import { Link } from 'react-router-dom';

export default function ProjectDetail(props) {

    const projectId = props.match.params.id;
    const project = myProjects.find(project => project.id === projectId);

    console.log(projectId);
    return (
        <div>
            <h1>{project.name}</h1>
            <h3>Used technologies: {project.technologies}</h3>
            <Link to="/projects">Back to the projects</Link>
        </div>
    )
}
