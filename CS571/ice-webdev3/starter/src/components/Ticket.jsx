import { Card, Button } from "react-bootstrap";

const Ticket = (props) => {
    function moveToTodo() {
        alert("Moving to TODO");
    }

    function moveToInProgress() {
        alert("Moving to INPROGRESS");
    }

    function moveToDone() {
        alert("Moving to DONE");
    }

    return <Card style={{margin: "0.25rem"}}>

        <h3>{props.name}</h3>
        <p><strong>{props.author}</strong></p>
        <p>{props.description}</p>

        <Button variant="primary" onClick={moveToTodo}>Move to TODO</Button>
        <Button variant="secondary" onClick={moveToInProgress}>Move to INPROGRESS</Button>
        <Button variant="success" onClick={moveToDone}>Move to DONE</Button>

    </Card>
}

export default Ticket;