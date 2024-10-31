import { FC } from "react";
import "./Select.scss";
import {
	FormControl,
	InputLabel,
	MenuItem,
	Select as S,
	SelectChangeEvent,
} from "@mui/material";
import { SelectProps } from "../../../types";

const Select: FC<SelectProps> = ({ title, options, value, onSelectChange }) => {
	const handleChange = (event: SelectChangeEvent<string>) => {
		onSelectChange(event.target.value as string);
	};

	return (
		<FormControl
			size="medium"
			sx={{
				"& .MuiOutlinedInput-root": {
					"&.Mui-focused fieldset": {
						borderColor: "black",
					},
					borderRadius: "6px",
				},
			}}
		>
			<InputLabel id={`select-${title}`}>{title}</InputLabel>
			<S
				labelId={`select-${title}`}
				id={`select-${title}`}
				value={value}
				onChange={handleChange}
				label={title}
				MenuProps={{ PaperProps: { style: { maxHeight: 48 * 6 + 8 } } }}
			>
				{options.map((option) => (
					<MenuItem key={option} value={option}>
						{option}
					</MenuItem>
				))}
			</S>
		</FormControl>
	);
};

export default Select;
