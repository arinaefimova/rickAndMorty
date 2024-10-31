import { Container } from "@mui/material";
import "./Header.scss";
import { Link, NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
const Header = () => {
	const [menuOpen, setMenuOpen] = useState(false);
    const [sticky, setSticky] = useState(false);

		
    useEffect(() => {
        const handleScroll = () => {
          setSticky(window.scrollY > 10);
        };
    
        window.addEventListener("scroll", handleScroll);
    
        return () => {
          window.removeEventListener("scroll", handleScroll);
        };
      }, []);
    
		if (menuOpen) {
			document.body.classList.add("lock");
		} else {
			document.body.classList.remove("lock");
        }

	return (
        <header className={sticky ? "header _sticky" : "header"}>
			<Container maxWidth={false} sx={{ maxWidth: "1020px" }}>
				<div className="header__box">
					<Link to="/" className="header__logo">
						<img src="img/logo.svg" alt="logo" />
					</Link>
					<div className="header__menu menu">
						<button
							onClick={() => setMenuOpen((prev) => !prev)}
							type="button"
							className={`menu__icon icon-menu ${menuOpen ? "_active" : ""}`}
						>
							<span></span>
							<span></span>
							<span></span>
						</button>
						<nav className={`menu__body ${menuOpen ? "_active" : ""}`}>
							<ul className="menu__list">
								<li className="menu__item">
									<NavLink
										to="/characters"
                                        onClick={() => setMenuOpen(false)}
										style={({ isActive }) => ({
											color: isActive ? "green" : "black",
										})}
										className="menu__link"
									>
										Characters
									</NavLink>
								</li>
								<li className="menu__item">
									<NavLink
										to="/locations"
                                        onClick={() => setMenuOpen(false)}
										style={({ isActive }) => ({
											color: isActive ? "green" : "black",
										})}
										className="menu__link"
									>
										Locations
									</NavLink>
								</li>
								<li className="menu__item">
									<NavLink
										to="/episodes"
                                        onClick={() => setMenuOpen(false)}
										style={({ isActive }) => ({
											color: isActive ? "green" : "black",
										})}
										className="menu__link"
									>
										Episodes
									</NavLink>
								</li>
							</ul>
						</nav>
					</div>
				</div>
			</Container>
		</header>
	);
};

export default Header;
