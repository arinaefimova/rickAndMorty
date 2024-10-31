import { Container } from "@mui/material";
import "./Characters.scss";
import Filters from "../../components/UI/Filters/Filters";
import List from "../../components/UI/List/List";
import Btn from "../../components/common/Button/Button";
import { useGetAllCharactersQuery } from "../../redux/slices/ApiSlice";
import { useEffect, useState } from "react";
import { selectCharacter } from "../../constants";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { addCards, incrementPage, resetCards, setPage } from "../../redux/slices/PaginationSlice";
import Image from "../../components/UI/Image/Image";

const Characters = () => {
  const [searchValue, setSearchValue] = useState("");
  const [filters, setFilters] = useState({
    Species: "",
    Gender: "",
    Status: "",
  });
  const dispatch = useAppDispatch();
  const { currentPage, cardList } = useAppSelector((state) => state.pagination);

  const { data, error, isLoading } = useGetAllCharactersQuery({
    name: searchValue,
    species: filters.Species,
    gender: filters.Gender,
    status: filters.Status,
    page: currentPage,
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
    <main className="characters">
      <Container maxWidth={false} sx={{ maxWidth: "1020px" }}>
        <div className="characters__wrapper">
        <Image img="/img/emblem.png" />
      
          <Filters
            searchValue={searchValue}
            setSearchValue={setSearchValue}
            selects={selectCharacter}
            filters={filters}
            handleFilterChange={handleFilterChange}
          />
          <List link="characters" image data={cardList} error={error} isLoading={isLoading} />
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

export default Characters;
