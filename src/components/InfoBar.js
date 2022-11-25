import { Card, Stack, Image } from "react-bootstrap";
import PerformanceStat from "./PerformanceStat";
import { FontAwesomeIcon as I } from "@fortawesome/react-fontawesome"
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro"

const InfoBar = props => <>
    <Stack gap={4} className="sticky-top pt-4 info-bar">
        {/* User */}
        <div className="text-end p-2 fs-5 fw-semibold">
            <I className="me-2" icon={solid("circle")} size="xs" color="#E6E6E6" />
            David T
        </div>
        {/* Welcome */}
        <Card body>
            <Card.Title className="text-secondary mb-4">
                WELCOME
            </Card.Title>
            <Card.Text as="div" className="text-dark">
                <Image className="border rounded border-secondary" fluid src="/welcome.png"/>
                <p className="pt-2">
                    We'll show you tips here for how you can sit
                    back and let Piazza Talent work for you.
                </p>
            </Card.Text>
            <Card.Link href="#">
                Start here
            </Card.Link>
        </Card>
        {/* Performance */}
        <Card body>
            <Card.Title className="text-secondary mb-4 justify-content-between">
                PERFORMANCE
                <select className="text-secondary border-0 form-select-sm">
                    <option value="12" selected>12mo</option>
                    <option value="6">6mo</option>
                    <option value="3">3mo</option>
                    <option value="1">1mo</option>
                </select>
                
            </Card.Title>
            <Card.Text as="div" className="text-dark">
                <Stack gap={3}>
                    <PerformanceStat graphNr={1} value="45" title="Events scheduled" />
                    <PerformanceStat graphNr={2} value="13" title="Jobs Posted" />
                    <PerformanceStat graphNr={3} value="315" title="Interviews Scheduled" />
                    <PerformanceStat graphNr={3} value="1,788" title="Messages sent" />
                </Stack>
            </Card.Text>
        </Card>
    </Stack>   
</>
export default InfoBar;