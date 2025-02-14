import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";

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
                todo: ticketData,
                inprogress: [],
                done: []
            });
        })
    }, []);

    const moveItem = (id, from, to) => {
        // Move from one lane to another
        alert(`I should move ${id} from ${from} to ${to}`);
        
        if(from === to) {
            return;
        }

        setTicketLanes(oldLines => {
            const fromLane = oldLines[from];
            const toLine = oldLines[to];
            const ticketObj = fromLane.filter(t => t.id === id)[0];
            
            const newFromLine = fromLane.filter(t => t.id !== id);
            const newToLine = [...toLine, ticketObj];

            const newLines = {...oldLines};
            newLines[from] = newFromLine;
            newLines[to] = newToLine;

            return newLines;
        })
    }

    return <div>
        <h1>Ticket Board</h1>
        <Container fluid>
            {
                Object.keys(ticketLanes).map(laneName => {
                    return <TicketLane
                        moveItem={moveItem}
                        key={laneName}
                        status={laneName}
                        tickets={ticketLanes[laneName]}
                    />
                })
            }
        </Container>
    </div>
}

export default TicketBoard;