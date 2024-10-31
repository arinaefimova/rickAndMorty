import { Container, Skeleton } from "@mui/material";
import "./CharacterDetails.scss";
import ButtonBack from "../../components/common/ButtonBack/ButtonBack";
import InfoDetailsCard from "../../components/common/InfoDetailsCard/InfoDetailsCard";
import "../../components/common/InfoDetailsCard/InfoDetailsCard.scss";
import { useParams } from "react-router-dom";
import { useGetCharacterByIdQuery } from "../../redux/slices/ApiSlice";
import useFetchEpisodes from "../../hooks/useFetchEpisodes";
import { getIdFromUrl } from "../../lib";

const CharacterDetails = () => {
	const { id } = useParams();
	const { data, error, isLoading } = useGetCharacterByIdQuery(Number(id));
	console.log(data);
	const episodeUrls = data?.episode || [];
	const {
		episodeData,
		loading: episodeLoading,
		error: episodeError,
	} = useFetchEpisodes(episodeUrls);

	// if (isLoading || episodeLoading) return <p>Loading...</p>;
	if (error || episodeError) return <p>Error:</p>;

	const itemId = getIdFromUrl(data?.location.url ?? "");
	console.log(episodeData);
	return (
		<main className="main">
			<Container maxWidth={false} sx={{ maxWidth: "1020px" }}>
				<div className="cheracter-details__wrapper">
					<div className="cheracter-details__header">
						<ButtonBack />
						<div className="cheracter-details__image">
							{isLoading || episodeLoading ? (
								<Skeleton
									variant="circular"
									sx={{
										mb: 2,
										"@media (min-width: 800px)": {
											height: "300px",
										},
										"@media (max-width: 800px)": {
											height: "200px",
										},
										"@media (max-width: 500px)": {
											height: "150px",
										},
									}}
								/>
							) : (
								<img src={data?.image || "/img/image.jpg"} alt="" />
							)}
						</div>
					</div>
					<h3 className="cheracter-details__name">
						{isLoading || episodeLoading ? "loading..." : data?.name}
					</h3>
					<div className="cheracter-details__info info-cheracter-details">
						<div className="info-cheracter-details__column">
							<h4 className="info-cheracter-details__title">Informations</h4>
							{isLoading || episodeLoading ? (
								<>
									{Array(6)
										.fill(0)
										.map((_, index) => (
											<Skeleton key={index} height={85} />
										))}
								</>
							) : (
								<>
									<InfoDetailsCard
										title="Gender"
										info={data?.gender || "no info"}
									/>
									<InfoDetailsCard
										title="Status"
										info={data?.status || "no info"}
									/>
									<InfoDetailsCard
										title="Specie"
										info={data?.specie || "no info"}
									/>
									<InfoDetailsCard
										title="Origin"
										info={data?.origin?.name || "no info"}
									/>
									<InfoDetailsCard
										title="Type"
										info={data?.type || "no info"}
									/>
									<InfoDetailsCard
										title="Location"
										info={data?.location?.name || "no info"}
										isLink={
											data?.location?.url ? `/locations/${itemId}` : undefined
										}
									/>
								</>
							)}
						</div>

						<div className="info-cheracter-details__column">
							<h4 className="info-cheracter-details__title">Episodes</h4>
							{isLoading || episodeLoading ? (
								<>
									{Array(6)
										.fill(0)
										.map((_, index) => (
											<Skeleton key={index} height={85} />
										))}
								</>
							) : episodeData.length > 0 ? (
								episodeData.map((episode) => (
									<InfoDetailsCard
										title={episode?.name || "loading..."}
										info={episode?.episode || "loading..."}
										isEpisode
										key={episode.id}
										date={episode?.air_date || "loading..."}
										isLink={`/episodes/${episode.id}`}
									/>
								))
							) : (
								<p>No episodes available.</p>
							)}
						</div>
					</div>
				</div>
			</Container>
		</main>
	);
};

export default CharacterDetails;
