import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-dark bg-dark navbar-expand-lg ml-auto">
            	<div className="container-fluid">
	            	<button class="btn btn-dark d-inline-block d-lg-none ml-auto" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <i class="fas fa-align-justify"></i>
	                </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
		                <ul className="navbar-nav ml-auto">  
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
                </div>
            </nav>
        );
    }
}
