import { Dialog, DialogContent, DialogTitle, IconButton } from "@mui/material";
import { IoClose } from "react-icons/io5";
import Btn from "../Button/Button";
import { FC, useState } from "react";
import { PopupProps } from "../../../types";

const Popup:FC<PopupProps> = ({ children }) => {
	const [showFilters, setShowFilters] = useState(false);

	const handleToggleFilters = () => {
		setShowFilters((prev) => !prev);
	};
	return (
		<>
			<Btn
				bg="#E3F2FD"
				full
				icon
				text="ADVANCED FILTERS"
				clickButton={handleToggleFilters}
				pad="16px 10px"
			/>
			<Dialog
				open={showFilters}
				onClose={handleToggleFilters}
				PaperProps={{ style: { width: "80%", maxWidth: "none" } }}
			>
				<div className="popup__wrapper">
					<DialogTitle>Filters</DialogTitle>
					<IconButton
						className="popup__icon"
						onClick={() => handleToggleFilters()}
					>
						<IoClose />
					</IconButton>
				</div>
				<DialogContent className="popup__box">
					{children}
					<Btn bg="#E3F2FD" full text="APPLY" clickButton={() => {handleToggleFilters()}} />
				</DialogContent>
			</Dialog>
		</>
	);
};

export default Popup;
