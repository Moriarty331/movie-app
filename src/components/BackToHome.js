import {Link} from 'react-router-dom';

export const BackToHome = (props) =>
{
    return(
        <div className="back-to-home">
            <span>{props.name}</span>
            <Link to="/"><span>Home</span></Link>
        </div>
        )
}