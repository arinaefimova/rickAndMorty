import {
	Card,
	CardActionArea,
	CardContent,
	CardMedia,
	Typography,
} from "@mui/material";
import "./CardItem.scss";
import { FC } from "react";
import { CardItemProps } from "../../../types";
import { Link, useLocation } from "react-router-dom";
const CardItem:FC<CardItemProps> = ({ image,info, img, name, species, type, air_date, episode, id, link }) => {
    const location = useLocation()
   
    const text = location.pathname === '/characters'
    ? species || 'Unknown Species'
    : location.pathname === '/episodes'
        ? air_date || 'Unknown Date'
        :( location.pathname.startsWith('/locations/') || location.pathname.startsWith('/episodes/'))
            ? species || 'Unknown Species'
            : type || 'Unknown Type';


     
      
	return (
		<Link to={`/${link}/${id}`}>
            <Card>
                <CardActionArea className="card">
                    {image && (
                        <CardMedia
                            component="img"
                            height="140"
                            image={img || "/img/image.jpg"}
                            alt="green iguana"
                                    className="card__image"
                        />
                    )}
                    <CardContent className={` card__inner ${!image && "card__box"}`}>
                        <Typography gutterBottom  component="div" className="card__title">
                            {name || 'Rick Sanchez'}
                        </Typography>
                        <Typography variant="body2" sx={{ color: "text.secondary" }} className="card__details">
                            {text}
                        </Typography>
                        {!image && info &&
                            <Typography variant="body1" sx={{ color: "text.secondary" }} className="card__info">
                                {episode}
                            </Typography>
                        }
                    </CardContent>
                </CardActionArea>
            </Card>
        </Link>
	);
};

export default CardItem;
