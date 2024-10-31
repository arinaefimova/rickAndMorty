import { MdKeyboardArrowRight } from "react-icons/md";
import "./InfoDetailsCard.scss";
import { Link } from "react-router-dom";
import { FC } from "react";
import { InfoDetailsCardProps } from "../../../types";

const InfoDetailsCard:FC<InfoDetailsCardProps> = ({ isLink, date, isEpisode, title, info }) => {
   ;   

	return (
		<Link
			to={isLink || '#'}
			className={`${
				isLink  ? "pointer" : "no-pointer"
			} "info-cheracter-details__inner inner-info-details"`}
		>
			<div className="inner-info-details__bd">
				<div className="inner-info-details__wrapper">
					<div className="inner-info-details__title">{title}</div>
					<div className="inner-info-details__text">{info}</div>
					{isEpisode && (
						<div className="inner-info-details__additional">
							 {date}
						</div>
					)}
				</div>
				{isLink && <MdKeyboardArrowRight size={20} />}
			</div>
		</Link>
	);
};

export default InfoDetailsCard;
