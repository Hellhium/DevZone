import React from 'react'
import { connect } from 'react-redux'
import Navbar from '../components/navbar.js'
import TicketContainer from './ticketContainer.js'


let IndexStateCont = ({ state, user, tickets, status, cats, wait }) => {
   return(
       <span>
           <Navbar user={user} />
           <div className="container">
               <TicketContainer />
           </div>
       </span>
   )
}

const mapStateToProps = state => {
    return {
        state: state.state,
        user: state.user,
        wait: state.wait,
        tickets: state.tickets,
        status: state.status,
        cats: state.cats,
    }
}

IndexStateCont = connect(mapStateToProps)(IndexStateCont)

export default IndexStateCont
