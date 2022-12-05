import { Container, Row, Col } from "react-bootstrap";
import "./App.scss";
import Sidebar from "./components/Sidebar";
import InfoBar from "./components/InfoBar";
import PageContent from "./components/PageContent";

const App = () => <>
	<Sidebar />
	<div className="page-content-wrapper">
		<Container>
			<Row>
				<Col xs={12} xxl={9}>
					<PageContent />
				</Col>
				<Col xxl={3} className="d-none d-xxl-block">   
					<InfoBar/>
				</Col>
			</Row>
		</Container>
	</div>
</>

export default App;
