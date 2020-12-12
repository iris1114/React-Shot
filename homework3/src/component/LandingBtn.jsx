import "../css/landingBtn.css";


const LandingBtn = (props) => {
    
    const { text } = props;
    return(
    <a href="#" className="d-flex align-items-center">
        <p className="mr-3">{text}</p>
        <img className="icon" src="../../image/arrow.svg" alt="arrow"/>
    </a>
    );
}

export default LandingBtn;