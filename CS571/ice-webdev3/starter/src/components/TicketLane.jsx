import { Row, Col } from "react-bootstrap"
import Ticket from "./Ticket";

const TicketLane = (props) => {

    return <div>
        <h2>{props.status}</h2>
        <Row>
            {
                props.tickets.map(tix => <Col xs={12} md={6} lg={4} key={tix.id}>
                    <Ticket {...tix} />
                </Col>)
            }
        </Row>
        <br />
    </div>
}

export default TicketLane;