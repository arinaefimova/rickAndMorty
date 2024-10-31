import { FC } from "react";
import { useLocation } from "react-router-dom";
import { ImageProps } from "../../../types";
import './Image.scss'

const Image:FC<ImageProps> = ({img}) => {

    const location = useLocation()
    const sizes = location.pathname === '/characters'
    ? 'img1'
    : location.pathname === '/locations'
    ? 'img2'
    : location.pathname === '/episodes' 
    ? 'img3'
    : ''; 
      return (
		<div className={`image-main ${sizes}`}>
			<img src={img} alt="emblem" />
		</div>
	);
};

export default Image;
