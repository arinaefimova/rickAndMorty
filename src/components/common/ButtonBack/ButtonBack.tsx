import { Link, useNavigate } from "react-router-dom";
import "./ButtonBack.scss";
import { IoMdArrowRoundBack } from "react-icons/io";

const ButtonBack = () => {
    const navigate = useNavigate()
    const handleClick=()=>{
        navigate(-1)
    }
	return (
		<button className="btn-back" onClick={()=>handleClick()}>
			<Link to='#'>
				<IoMdArrowRoundBack />

				<span>Go back</span>
			</Link>
		</button>
	);
};

export default ButtonBack;
