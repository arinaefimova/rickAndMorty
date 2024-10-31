import { FC } from "react";
import { Outlet } from "react-router-dom";
import Header from "./common/Header/Header";
import Footer from "./common/Footer/Footer";

type Props = {};

const Layout: FC<Props> = () => {
	return (
		<>
			<Header />

			<main className="font-poppins">
				<Outlet />
			</main>
			<Footer/>
		</>
	);
};

export default Layout;
