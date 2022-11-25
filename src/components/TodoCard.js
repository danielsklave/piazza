import { Card } from "react-bootstrap";
import "./TodoCard.css";

const TodoCard = props => <>
    <Card body className="todo">
        <Card.Title className="mb-3">
            MY TO DOs
        </Card.Title>
        <Card.Text as="div" className="text-dark">
            <ul>
                <li><a href="#">Invite students</a> to Stanford Career Fair (8/22/22)</li>
                <li><a href="#">Review check-ins</a> for Berkeley Career Fair (8/30/22)</li>
            </ul>
        </Card.Text>
    </Card>
</>

export default TodoCard;