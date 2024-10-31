import { createRoot } from "react-dom/client";
import {
	createHashRouter,
	Navigate,
	RouterProvider,
} from "react-router-dom";

import "./null.scss";
import "./index.scss";
import Layout from "./components/Layout";
import Characters from "./Pages/Characters/Characters";
import Episodes from "./Pages/Episodes/Episodes";
import Locations from "./Pages/Locations/Locations";
import CharacterDetails from "./Pages/CharacterDetails/CharacterDetails";
import LocationDetails from "./Pages/LocationDetails/LocationDetails";
import EpisodesDetails from "./Pages/EpisodesDetails/EpisodesDetails";
import { Provider } from "react-redux";
import { store } from "./redux/store";
const router = createHashRouter([
	{
		path: "",
		element: <Layout />,
		children: [
			{
				path: "/",
				element: <Navigate to="/characters" replace />,
			},
			{
				path: "/characters",
				element: <Characters />,
			},
			{
				path: "/characters/:id",
				element: <CharacterDetails />,
			},
			{
				path: "/episodes",
				element: <Episodes />,
			},
			{
				path: "/episodes/:id",
				element: <EpisodesDetails />,
			},
			{
				path: "/locations",
				element: <Locations />,
				
			},
			{
				path: "/locations/:id",
				element: <LocationDetails />,
				
			},
			
		],
	},
]);

createRoot(document.getElementById("root")!).render(
	<Provider store={store}>
		<RouterProvider router={router} />
	</Provider>
);
