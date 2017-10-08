import React from 'react'

let Navbar = ({ user }) => {

    return (
        <nav className="grey darken-4">
            <div className="nav-wrapper">
                <a className="brand-logo center">DevZone</a>
                <ul id="nav-mobile" className="left hide-on-med-and-down">
                    {user.accesslevel >= 10 ? <li><a>Nouveau Ticket</a></li> : ""}
                    {user.accesslevel >= 50 ? <li><a className="dropdown-button" data-activates="ddAdmin">Administration &nbsp;<i className="fa fa-level-down" aria-hidden="true"></i></a></li> : ""}
                </ul>
                <ul className="right hide-on-med-and-down">
                    <li><a>Connecté en tant que {user.username} ({user.accessname})</a></li>
                </ul>
            </div>
            <ul id="ddAdmin" className="dropdown-content">
                <li><a>Gestion des assignés</a></li>
                <li><a>Gestion des catégories</a></li>
                <li><a>Gestion des mises à jour</a></li>
            </ul>}
        </nav>
    )
}

export default Navbar
