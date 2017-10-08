import React from 'react'
import { connect } from 'react-redux'
import Ticket from '../components/ticket.js'

let TicketContainer = ({ user, tickets, status, cats, wait }) => {
    if(wait !== 0){
        return null;
    }
    return (
        <div className="row">
            {
                Object.keys(status).map((skey) => {
                    return status[skey].stat_hidden === 0 ?
                        <div className="col s12 m6 l3" key={skey}>
                            <div className="card grey darken-2 card-stat-head">
                                <div className="card-title center-align white-text">
                                    {status[skey].stat_name}
                                </div>
                                {Object.keys(tickets).map((tkey) => {
                                    if (tickets[tkey].stat_id !== status[skey].stat_id){
                                        return null;
                                    }
                                    return <Ticket ticket={tickets[tkey]} user={user} cats={cats} key={tickets[tkey].tk_id}/>;
                                })}
                            </div>
                        </div> : ""
                })
            }
        </div>
    )
}

const mapStateToProps = state => {
    return {
        user: state.user,
        wait: state.wait,
        tickets: state.tickets,
        status: state.status,
        cats: state.cats,
    }
}

TicketContainer = connect(mapStateToProps)(TicketContainer)

export default TicketContainer
