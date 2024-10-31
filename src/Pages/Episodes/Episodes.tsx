import { Container } from "@mui/material";
import Image from "../../components/UI/Image/Image";
import Filters from "../../components/UI/Filters/Filters";
import Btn from "../../components/common/Button/Button";
import List from "../../components/UI/List/List";
import { useGetAllEpisodesQuery } from "../../redux/slices/ApiSlice";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { addCards, incrementPage, resetCards, setPage } from "../../redux/slices/PaginationSlice";

const Episodes = () => {
	const [searchValue, setSearchValue] = useState("");
    const dispatch = useAppDispatch();
    const { currentPage, cardList } = useAppSelector((state) => state.pagination);
	const { data, error, isLoading, isFetching } = useGetAllEpisodesQuery({
		name: searchValue,
		page:currentPage,
	});
    useEffect(() => {
        dispatch(resetCards());
        dispatch(setPage(1));
      }, [ searchValue, dispatch]);
    
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
    
    
	
	return (
		<main className="main">
			<Container maxWidth={false} sx={{ maxWidth: "1020px" }}>
				<div className="locations__wrapper">
					<Image img="/img/emblem3.png" />
					<Filters searchValue={searchValue} setSearchValue={setSearchValue} />
					<List isLoading={isLoading || isFetching} link="episodes" info data={cardList} error={error} />
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

export default Episodes;
