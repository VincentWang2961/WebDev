import { Row } from "react-bootstrap"
import Ticket from "./Ticket";

const TicketLane = (props) => {

    return <div>
        <Row>
            {
                /* TODO Display each of the tickets! */
                <Ticket {...props}/>
            }
        </Row>
        <br />
    </div>
}

export default TicketLane;