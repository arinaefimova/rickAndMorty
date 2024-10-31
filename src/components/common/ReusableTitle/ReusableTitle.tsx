import { FC } from "react";
import ButtonBack from "../ButtonBack/ButtonBack";
import "./ReusableTitle.scss";
import { ReusableTitleProps } from "../../../types";

const ReusableTitle:FC<ReusableTitleProps> = ({mainTitle, title1, title2, info1, info2}) => {
	return (
		<div className="details__header header-details">
			<ButtonBack/>
			<div className="header-details__info">
				<div className="header-details__title">
					 {mainTitle}
				</div>
				<div className="header-details__box">
					<div className="header-details__column">
						<div className="header-details__sub-title">{title1}</div>
						<div className="header-details__text">{info1}</div>
					</div>
					<div className="header-details__column">
						<div className="header-details__sub-title">{title2}</div>
						<div className="header-details__text">{info2}</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ReusableTitle;
