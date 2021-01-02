import "../css/btn.css";

const Btn= (props) => {
    
    const { text } = props;
    return(
    <a href="#" className="btn">{text}</a>
    );
}

export default Btn;