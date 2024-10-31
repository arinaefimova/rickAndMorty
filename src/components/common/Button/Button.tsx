import Button from "@mui/material/Button";
import "./Button.scss";
import { FC } from "react";
import { IoFilterOutline } from "react-icons/io5";
import { ButtonProps } from "../../../types";

const Btn: FC<ButtonProps> = ({ color, bg, full, icon, text, clickButton, pad, error, disabled }) => {
    if (error) return null;
	return (
        
		<div className="btn">
			<Button
				fullWidth={!!full}
                disabled={disabled}
				variant="contained"
				onClick={clickButton}
				sx={{
					backgroundColor: bg,
					color: color ? color : "#2196F3",
					fontSize: "14px",
					padding: pad ? pad :"8px 32px",
					display: "flex",
					margin: "0 auto",
					alignItems: "center",
					textTransform: "uppercase",
					"&:hover": {
						backgroundColor: "#c8d9e6",
					},
				}}
			>
				{icon && <IoFilterOutline className="icon" size={20} />}

				<p>{text}</p>
			</Button>
		</div>
	);
};

export default Btn;
