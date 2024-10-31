import  { FC } from "react";
import { Skeleton as Skelet } from "@mui/material";
import { SkeletonProps } from "../../../types";

const Skeleton:FC<SkeletonProps> = ({ image, info}) => {
	return (
		<>
			{image ? (
				<div>
					<Skelet
						variant="rectangular"
						height={218}
						sx={{ mb: 2, borderRadius: "6px" }}
					/>
					<Skelet width="80%" sx={{ mb: 1 }} />
					<Skelet width="60%" />
				</div>
			) : (
				<div>
					<Skelet
						variant="rectangular"
						height={info? 128: 108}
						sx={{ borderRadius: "6px" }}
					/>
				</div>
			)}
		</>
	);
};

export default Skeleton;
