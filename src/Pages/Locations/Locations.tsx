import { Container } from "@mui/material";
import Image from "../../components/UI/Image/Image";
import "./locations.scss";
import Filters from "../../components/UI/Filters/Filters";
import Btn from "../../components/common/Button/Button";
import List from "../../components/UI/List/List";
import { useGetAllLocationsQuery } from "../../redux/slices/ApiSlice";
import { selectLocations } from "../../constants";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { addCards, incrementPage, resetCards,setPage  } from "../../redux/slices/PaginationSlice";

const Locations = () => {
	
	const [searchValue, setSearchValue] = useState("");
	const [filters, setFilters] = useState({
		Type: "",
		Dimension: "",
	});
    const dispatch = useAppDispatch();
    const { currentPage, cardList } = useAppSelector((state) => state.pagination);
	const { data, error, isLoading } = useGetAllLocationsQuery({
		name: searchValue,
		type: filters.Type,
		dimension: filters.Dimension,
		page:currentPage,
	});
   
    useEffect(() => {
        dispatch(resetCards());
        dispatch(setPage(1));
      }, [filters, searchValue, dispatch]);
    
      useEffect(() => {
        if (data && data.results) {
          dispatch(addCards(data.results));
        } else if (error) {
          dispatch(resetCards()); 
        }
      }, [data, error, dispatch, currentPage]);
    
      const handleLoadMore = () => {
        dispatch(incrementPage());
      };
    
      const handleFilterChange = (key: string, value: string) => {
        setFilters((prev) => ({ ...prev, [key]: value }));
      };
	
	return (
		<main className="main">
			<Container maxWidth={false} sx={{ maxWidth: "1020px" }}>
				<div className="locations__wrapper">
					<Image img="/img/emblem2.png" />
					<Filters
						selects={selectLocations}
						filters={filters}
						searchValue={searchValue}
						setSearchValue={setSearchValue}
						handleFilterChange={handleFilterChange}
					/>
					<List isLoading={isLoading} link="locations" data={cardList} error={error} />
					<Btn
						error={error}
						bg="#F2F9FE"
						text="LOAD MORE"
                        clickButton={handleLoadMore}
                        disabled={isLoading || cardList.length >= (data?.info?.count || 0)}
					/>
				</div>
			</Container>
		</main>
	);
};

export default Locations;
