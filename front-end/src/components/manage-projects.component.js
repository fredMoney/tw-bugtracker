import React, { Component } from 'react';
import axios from 'axios';
import http from 'http';

import CreateProject from "./create-project.component";

const Project = props => (
    <tr>
        <td>{props.project.name}</td>
        <td>
            <a href="#" onClick={() => { 
                if(window.confirm('Are you sure you want to delete this project?')) 
                    props.deleteProject(props.project._id) 
            }} 
            className="badge badge-danger">Delete</a>
        </td>
    </tr>
);

export default class ManageProjects extends Component {
	constructor(props) {
		super(props);

		this.deleteProject = this.deleteProject.bind(this);

		this.state = { projects: [] };
	}

    componentDidMount() {
        axios.get('http://localhost:5000/projects/')
            .then(res => {
                this.setState({ projects: res.data })
            })
            .catch(error => console.log(error));
    }

    componentDidUpdate() {
        axios.get('http://localhost:5000/projects/')
            .then(res => {
                this.setState({ projects: res.data })
            })
            .catch(error => console.log(error));
    }

    deleteProject(id) {
	    // axios.delete('http://localhost:5000/projects/'+id)
	    //     .then(res => { console.log(res.data)});
        const req = http
            .request({
                hostname: 'http://localhost:5000/',
                path: '/projects/'+id,
                method: 'DELETE'
            }, res => {
                // log the status
                console.log('Status Code:', res.statusCode)
              })
            .on('error', err => {
                console.log('Error: ', err.message)
            })

        req.end()

	    // update tickets array to all projects without matching id
	    this.setState({
	        projects: this.state.projects.filter(el => el._id !== id)
	    })
	}

    getProjects() {
        return this.state.projects.map(currentProject => {
            return <Project
            			project={currentProject} 
            			deleteProject={this.deleteProject}
                        key={currentProject.id}
                    />;
        })
	}

	render() {
		return(
			<div>
				<table className="table table-dark">
                    <thead className="thead-dark">
                    <tr>
                        <th>Name</th>
                        <th>Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                        { this.getProjects() }
                    </tbody>
                </table>
                <br></br>
                <CreateProject />
			</div>
		);
	}
}