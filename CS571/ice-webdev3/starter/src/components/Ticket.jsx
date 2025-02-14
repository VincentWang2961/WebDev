import { Card, Button } from "react-bootstrap";

const Ticket = (props) => {
    return <Card>

        {/* TODO: Display data and buttons for moving the ticket to TODO, InProgress, and Done! */}

        <h3><strong>{props.name}</strong></h3>
        <p>{props.description}</p>
        <Button variant="secondary">TODO</Button>
        <Button variant="primary">InProgress</Button>
        <Button variant="success">Done</Button>

    </Card>
}

export default Ticket;