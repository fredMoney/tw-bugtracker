import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/logo.jpg';

export default class Sidebar extends Component {
	render() {
		return(
			<nav class="navbar navbar-dark bg-light navbar-expand-lg ml-auto">
			<div className="container-fluid">
	  			{/* <center><img src={logo} className="navbar-brand" width="120" alt="Tech support" /></center> */}
	    		<ul class="navbar-nav ml-auto">
	    			<li className="nav-item">
	    				<NavLink to="/" onlyActiveOnIndex={true} className="nav-link" activeClassName="active">
	    					<i class="fas fa-home"></i>
	    					Dashboard Home
	    				</NavLink>
	    			</li>
	    			<li>
                		<NavLink to="/tickets/create" className="nav-link" activeClassName="active">
                			<i class="fas fa-ticket-alt"></i>
                			Submit a Ticket
                		</NavLink>
            		</li>
            		<li>
                		<NavLink to="/manage-users" className="nav-link" activeClassName="active">
                			<i class="fas fa-users"></i>
                			Manage Users
                		</NavLink>
            		</li>
            		<li>
                		<NavLink to="/manage-projects" className="nav-link" activeClassName="active">
                			<i class="fas fa-folder"></i>
                			Manage Projects
                		</NavLink>
            		</li>
	    		</ul>
				</div>
			</nav>
		);
	}
}
