import { useState, useEffect, FC } from "react";
import Select from "../../common/Select/Select";
import "./Filters.scss";
import { FilterProps } from "../../../types";
import Search from "../Search/Search";
import Popup from "../../common/Popup/Popup";


    const Filters: FC<FilterProps> = ({ selects = [], filters, handleFilterChange, searchValue, setSearchValue }) => {

	const [isMobile, setIsMobile] = useState(false);

	useEffect(() => {
		const handleResize = () => {
			setIsMobile(window.innerWidth <= 750);
		};
		window.addEventListener("resize", handleResize);
		handleResize();
		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	return (
		<div className="filters">
			<Search searchValue={searchValue} setSearchValue={setSearchValue} />

			{!isMobile ? (
				<>
					{selects.map((select, index) => (
						<Select
							key={index}
							title={select.title}
							options={select.options}
                            value={filters![select.title]} 
                            onSelectChange={(value) => handleFilterChange!(select.title, value)}
							
						/>
					))}
				</>
			) : (
				<>
					{selects.length > 0 && (
						<>
							<Popup>
								{selects! &&
									selects.map((select, index) => (
										<Select
											key={index}
											title={select.title}
											options={select.options}
                                            value={filters![select.title]!}
                                            onSelectChange={(value) => handleFilterChange!(select.title, value)}
										/>
									))}
							</Popup>
						</>
					)}
				</>
			)}
		</div>
	);
};

export default Filters;
