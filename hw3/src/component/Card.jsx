import { Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/card.css";


const CustomCard = (props) => {
    const { card } = props;
    const bgStyle = {
        backgroundImage: `url( ${card.bgImage})`
    }
    return(
         <Card className="card" style={bgStyle}>
            <Card.Body>
                <Card.Title className="f-lg-s">{card.title}</Card.Title>
                <Card.Title className="f-lg-2xl">{card.subtitle}</Card.Title>
                <Card.Text className="f-lg-m">{card.text}</Card.Text>
            </Card.Body>
        </Card>
    );
}

export default CustomCard;