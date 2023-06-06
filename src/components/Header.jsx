import React,{Component} from 'react';

export default class Header extends Component{
    render(){
        return(
            <React.Fragment>
                <nav className="navbar navbar-expand-lg bg-success">
                    <div className="container-fluid">
                        <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                            <a className="nav-link active text-light" aria-current="page" href="#home">Home</a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link active text-light" href="#show">Show Users</a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link active text-light" href="#create">Create Users</a>
                            </li>
                        </ul>
                        </div>
                        <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                            <button className="btn btn-outline-light" type="submit">Search</button>
                        </form>
                    </div>
                    </nav>
            </React.Fragment>
        );
    }
}