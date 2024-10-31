import { Container } from "@mui/material";
import ReusableTitle from "../../components/common/ReusableTitle/ReusableTitle";
import List from "../../components/UI/List/List";
import "./EpisodesDetails.scss";
import { useGetEpisodeByIdQuery } from "../../redux/slices/ApiSlice";
import { useParams } from "react-router-dom";
import useFetchEpisodes from "../../hooks/useFetchEpisodes";

const EpisodesDetails = () => {
    const { id } = useParams();
    const { data, error, isLoading } = useGetEpisodeByIdQuery(Number(id));
    const epoisodeUrls = data?.characters || [];
    const { episodeData} = useFetchEpisodes(epoisodeUrls);
    console.log(data)
	return (
		<main className="main">
			<Container maxWidth={false} sx={{ maxWidth: "1020px" }}>
				<div className="episodes-details__wrapper">
					<ReusableTitle
                       link="episodes"
                       mainTitle={data?.name || 'loading...'}
						title1="Episode"
						title2="Date"
                        info1={data?.episode || "loading..."}
						info2={data?.air_date || "loading..."}
						
					/>
					<div className="episodes-details__list">
						<List isLoading={isLoading}  link="characters" error={error} data={episodeData} image heading="Cast" />
					</div>
				</div>
			</Container>
		</main>
	);
};

export default EpisodesDetails;
