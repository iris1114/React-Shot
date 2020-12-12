import "bootstrap/dist/css/bootstrap.min.css";
import "../css/card.css";


const Info = (props) => {
    const { info } = props;

    return(
       <div>
            <h2 className="f-lg-3xl mb-5">{info.title}</h2>
            {
                info.texts.map((text,index)=>{
                    return(
                        <p className="f-lg-m mb-3" key={index}>{text}</p>
                    )
                })
            }
            {
                (() => {
                    if(info.link){
                        return (
                             <a href="#" className="f-lg-m text-primary">{info.link} </a>
                        );
                    }
                })()
            }
       </div>
    );
}

export default Info;