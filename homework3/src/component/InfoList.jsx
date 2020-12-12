import "bootstrap/dist/css/bootstrap.min.css";


const Info = (props) => {
    const { serviceList } = props;

    return(
       <div className="bg-white p-3 rounded shadow">
           <h2 className="mb-5 f-lg-xl">{serviceList.title}</h2>
           <div className="lists">
                <ul>
                    {
                        serviceList.lists.map((list, index)=>{
                            return(
                                <li className="mb-4" key={index}>
                                    <a href="#" className="d-flex">
                                        <div className="col-md-2 col-3">
                                            <img className="img-fluid" src={list.img} alt="img"/>
                                        </div>
                                        <div className="text col-md-10 col-9">
                                            <h3 className="f-lg-m">{list.title}</h3>
                                            <p className="f-lg-s">{list.text}</p>
                                        </div>
                                    </a>
                                </li>

                            );
                        })

                    }
                   
                </ul>
           </div>

       </div>
    );
}

export default Info;