import React from 'react'

let shrink = text=>{
    let tx = text.toString()
    if(tx.length > 128){
        tx = tx.slice(0, 128);
        tx = tx.split(" ");
        tx.pop();
        tx = tx.join(" ");
        tx += "..."
    }
    return tx;
}

let Ticket = ({ ticket, user, editTicket, cats }) => {
    return (
        <div className="card card-ticket" style={{ backgroundColor: cats[ticket.cat_id].cat_color }}>
            <div className="card-content white-text">
                <div className="card-title">{ticket.tk_title}</div>
                {(ticket.stat_id !== 1 && ticket.tk_showdesc === 1) ? <p className="grey-text text-lighten-2">{shrink(ticket.tk_desc)}</p> : ""}
            </div>
            <div className="card-action">
                <div className="chip">{cats[ticket.cat_id].cat_name}</div>
                {ticket.tk_url !== '' ? <div className="chip green darken-3"><a href={ticket.tk_url} rel="nofollow" target="_blank" className="white-text">Forum</a></div> : ""}
                {(ticket.assig_usr_id === user.uid && user.uid !== 0) ? <div className="chip blue darken-3 white-text">Assigné</div> : ""}
                {(ticket.usr_id === user.uid && user.uid !== 0) ? <div className="chip grey darken-4 white-text">Auteur</div> : ""}
                <a className="btn-floating grey darken-4 center-align waves-light right" onClick={editTicket}>+</a>
            </div>
        </div>
    )
}

export default Ticket
