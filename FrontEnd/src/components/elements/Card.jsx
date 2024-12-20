import { Link } from "react-router-dom";

// data - img, key, person, service, category, p
function Card({data}){
    return(
        <div className={`card-container`}>
            <div className="col p-0 card text-center">
                <Link to={`/meet-team/person${data.index}`}>
                    <img className="card-img-top" src={data.img} alt="Image not found" />
                </Link>
                <div className="card-body p-0 mt-2">
                    <span className="card-title" style={{ fontSize: "1.3rem" }}>{data.person}</span>
                    <hr />
                    <span><strong>{data.service}</strong></span>
                    <p className="card-text">{data.p}</p>
                    <Link to={`/meet-team/person${data.index}`} className="btn">See Profile</Link>
                </div>
            </div>
        </div>
    );
}
export default Card;