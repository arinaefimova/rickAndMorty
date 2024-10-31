import {
	FormControl,
	InputAdornment,
	TextField,
} from "@mui/material";
import { FC } from "react";
import { IoIosSearch } from "react-icons/io";
import { SearchProps } from "../../../types";
import { resetCards } from "../../../redux/slices/PaginationSlice";
import { useAppDispatch } from "../../../redux/hooks";

const Search:FC<SearchProps> = ({searchValue, setSearchValue}) => {
    const dispatch = useAppDispatch();

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setSearchValue((event.target.value).toLocaleLowerCase());
      dispatch(resetCards());
    };
  

  return (
    <FormControl>
    <TextField
    onChange={handleChange}
    value={searchValue}
        id="fullWidth"
        slotProps={{
            input: {
                startAdornment: (
                    <InputAdornment position="start">
                        <IoIosSearch size={25} />
                    </InputAdornment>
                ),
                placeholder: "Filter by name...",
                style: {
                    borderRadius: "6px",
                },
            },
        }}
        sx={{
            "& .MuiOutlinedInput-root": {
                "&.Mui-focused fieldset": {
                    borderColor: "black",
                },
            },
        }}
    />
</FormControl>
  )
}

export default Search