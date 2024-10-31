import { FC } from "react";
import CardItem from "../CardItem/CardItem";
import "./List.scss";
import { Character, Episode, ListProps, Location } from "../../../types";
import Skeleton from "../Skeleton/Skeleton";

const List: FC<ListProps> = ({ image, info, heading, data, error, link, isLoading }) => {
	return (
		<div className="list">
			<div className="list__heading">{heading}</div>
			{!error ? (
                <div className="list__wrapper">
                    {isLoading || data?.length === 0 ? (
                        <>
                            
                                {Array(20).fill(0).map((_, index)=>(
                                    <Skeleton key={index} image={image} info={info}/>
                                ))}
                        </>
                        
                    ) : (
                        data?.map((item) => (
                            <CardItem
                                link={link}
                                key={item.id}
                                id={item.id}
                                image={image}
                                info={info}
                                name={item.name}
                                img={(item as Character).image}
                                species={(item as Character).species}
                                type={(item as Location).type}
                                air_date={(item as Episode).air_date}
                                episode={(item as Episode).episode}
                            />
                        ))
                    )}
                </div>
            ) : (
                <p className="list__error">Characters not found :(</p>
            )}
		</div>
	);
};
export default List;
