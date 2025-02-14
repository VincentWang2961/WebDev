import { useEffect, useState } from "react";
import { Container, Col } from "react-bootstrap";

import TicketLane from './TicketLane'

const TicketBoard = (props) => {

    const [ticketLanes, setTicketLanes] = useState({
        todo: [],
        inprogress: [],
        done: [],
    })

    useEffect(() => {
        fetch('https://cs571.org/rest/f24/ice/tickets', {
            headers: {
                "X-CS571-ID": CS571.getBadgerId()
            }
        })
        .then(res => res.json())
        .then(ticketData => {
            console.log(ticketData);
            setTicketLanes({
                // TODO Put the tickets in the the todo lane!
                todo: ticketData, 
                inprogress: [],
                done: []
            });
        })
    }, []);

    return <div>
        <h1>Ticket Board</h1>
        <Container fluid>
            <TicketLane status={"TODO"} tickets={ticketLanes["todo"]} />
            <TicketLane status={"INPROGRESS"} tickets={ticketLanes["inprogress"]} />
            <TicketLane status={"DONE"} tickets={ticketLanes["done"]} />
        </Container>
    </div>
}

export default TicketBoard;