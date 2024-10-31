import { Container } from "@mui/material";
import "./LocationDetails.scss";
import ReusableTitle from "../../components/common/ReusableTitle/ReusableTitle";
import List from "../../components/UI/List/List";
import { useGetLocationByIdQuery } from "../../redux/slices/ApiSlice";
import { useParams } from "react-router-dom";
import useFetchEpisodes from "../../hooks/useFetchEpisodes";

const LocationDetails = () => {
    const { id } = useParams();
    const { data, error, isLoading } = useGetLocationByIdQuery(Number(id));
    const locationUrls = data?.residents || [];
    const { episodeData:locationData} = useFetchEpisodes(locationUrls);
    console.log(data)
	return (
		<main className="main">
			<Container maxWidth={false} sx={{ maxWidth: "1020px" }}>
				<div className="locations-details__wrapper">
					<ReusableTitle
                    link='locations'
						mainTitle={data?.name || 'loading...'}
						title1="Type"
						title2="Dimension"
						info1={data?.type || "loading..."}
						info2={data?.dimension || "loading..."}
					/>
                    <div className="locations-details__list">
                        <List  isLoading={isLoading}  link="characters" data={locationData} image heading="Residents" error={error }/>
                    </div>
				</div>
			</Container>
		</main>
	);
};

export default LocationDetails;
