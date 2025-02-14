import { Card, Button } from "react-bootstrap";

const Ticket = (props) => {
    return <Card style={{margin: "0.25rem"}}>

        <h3>{props.name}</h3>
        <p><strong>{props.author}</strong></p>
        <p>{props.description}</p>

        <Button variant="primary">Move to TODO</Button>
        <Button variant="secondary">Move to INPROGRESS</Button>
        <Button variant="success">Move to DONE</Button>

    </Card>
}

export default Ticket;