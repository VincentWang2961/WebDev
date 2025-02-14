import { Row, Col } from "react-bootstrap"
import Ticket from "./Ticket";

const TicketLane = (props) => {

    return <div>
        <h2>{props.status}</h2>
        <Row>
            {
                props.tickets.map(tix => <Ticket key={tix.id} {...tix} />)
            }
        </Row>
        <br />
    </div>
}

export default TicketLane;