import { Table, Badge, } from "react-bootstrap";
import { FontAwesomeIcon as I } from "@fortawesome/react-fontawesome"
import { solid, regular } from "@fortawesome/fontawesome-svg-core/import.macro"
import ProgressCircle from "./ProgressCircle";

const InitiativeTable = ({ data }) => {

    const columns = {
        notif: {
            title: <I className="mx-auto" icon={regular("bell")} size="lg" />,
            class: "d-flex justify-content-center align-items-center",
            wrapper: value => value ? <Badge pill bg="danger">{value}</Badge> : ""
        },
        name: {
            title: "Name",
            wrapper: value => <>
                <div className="mb-1">{value.title}</div>
                {value.tags && 
                    <div className="d-flex flex-row gap-1">
                        {value.tags.map((tag, index) => 
                            <Badge key={index} bg="secondary">
                                {tag}
                            </Badge>
                        )}
                    </div>
                }
            </>
        },
        outbound: {
            title: "Outbound",
            sortable: true,
            class: "fw-bold"
        },
        actions: {
            title: "Actions",
            sortable: true,
            class: "fw-bold"
        },
        owner: {
            title: "Owner",
            sortable: true
        },
        eventDate: {
            title: "Event Date",
            sortable: true
        },
        progress: {
            title: "Progress",
            class: "gap-3 d-flex align-items-center text-secondary",
            wrapper: value => <>
                <ProgressCircle value={value} />
                <I icon={solid("ellipsis")} />
            </>
        }
    }

    return ( data?.length > 0 && (
        <Table responsive>
            <thead>
                <tr>
                    {Object.keys(columns).map((col, index) => (
                        <th key={index}>
                            <div className="d-flex align-items-center gap-2 fw-normal text-secondary">
                                {columns[col].title}
                                {columns[col].sortable && <I icon={solid("sort")} />}
                            </div>
                        </th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {data.map((p, i) => (
                    <tr key={i}>
                        {Object.keys(p).map((k, j) =>
                            <td key={j}>
                                <div className={columns[k].class}>
                                    {columns[k].wrapper?.(p[k]) ?? p[k]}
                                </div>
                            </td>
                        )}
                    </tr>
                ))}
            </tbody>
        </Table>
    ))
};

export default InitiativeTable;