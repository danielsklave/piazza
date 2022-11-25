import { Stack } from "react-bootstrap";
import InitiativeButtonCard from "./InitiativeButtonCard";
import InitiativeTableCards from "./InitiativeTableCards";
import TodoCard from "./TodoCard";

const PageContent = props => <>
    <Stack gap={4} className="page-content">
        <InitiativeButtonCard />
        <TodoCard />
        <InitiativeTableCards />
    </Stack>
</>

export default PageContent;