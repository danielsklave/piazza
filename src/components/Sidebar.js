import { Nav, Badge, Image } from "react-bootstrap";
import { FontAwesomeIcon as I } from "@fortawesome/react-fontawesome"
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro"
import "./Sidebar.css";

const Sidebar = props => <>
    <div className="sidebar d-none d-lg-block">
        <Nav defaultActiveKey="/home" className="flex-column">
            {/* Logo */}
            <Image fluid src="/logo.png" className="logo" />
            {/* Home */}
            <Nav.Link href="/home" className="home">
                <I icon={solid("home")} size="xs" />
                Home
            </Nav.Link>
            {/* Sourcing */}
            <div className="nav-title">
                SOURCING
            </div>
            <Nav.Link eventKey="link-1">
                <I icon={solid("search")} size="xs" />
                Search
            </Nav.Link>
            <Nav.Link eventKey="link-2">
                <I icon={solid("bookmark")} size="xs" />
                Saved Searches
            </Nav.Link>
            <Nav.Link eventKey="link-3">
                <I icon={solid("folder")} size="xs" />
                Folders
            </Nav.Link>
            <hr/>
            {/* My initatives */}
            <div className="nav-title">
                MY INITIATIVES
            </div>
            <Nav.Link eventKey="link-4">
                <I icon={solid("desktop")} size="xs" />
                Open Roles
            </Nav.Link>
            <Nav.Link eventKey="link-5">
                <I icon={solid("calendar")} size="xs" />
                Events
                <Badge pill bg="secondary">2</Badge>
            </Nav.Link>
            <Nav.Link eventKey="link-6">
                <I icon={solid("clipboard")} size="xs" />
                Schedules
                <Badge pill bg="secondary">1</Badge>
            </Nav.Link>
            <Nav.Link eventKey="link-7">
                <I icon={solid("seedling")} size="xs" />
                Brand Building
            </Nav.Link>
        </Nav>
        {/* Close button */}
        <button className="close-btn">
            <I icon={solid("arrow-left")} size="xl"/>
        </button>
    </div>
</>

export default Sidebar;