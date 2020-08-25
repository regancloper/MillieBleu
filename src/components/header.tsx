import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';
import { Navbar, Nav, Container, Button, Badge } from 'react-bootstrap';
import Img from 'gatsby-image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { useCartCount } from '../context/StoreContext';

import headerStyles from './header.module.scss';

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
	const count = useCartCount();
	const data = useStaticQuery(graphql`
		query {
			brandImage: file(relativePath: { eq: "MB_Final-02.png" }) {
				childImageSharp {
					fixed(width: 100) {
						...GatsbyImageSharpFixed
					}
				}
			}
		}
	`);

	return (
		<Navbar
			className="border-bottom pb-0 pt-1"
			sticky="top"
			bg="white"
			expand="md"
		>
			<Container>
				<Navbar.Brand className="mr-5 p-0">
					<Link className={headerStyles.brand} to="/">
						<Img fixed={data.brandImage.childImageSharp.fixed} />
					</Link>
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" className="border-0" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="mr-auto">
						<Link
							className={headerStyles.navItem}
							activeClassName={headerStyles.activeNavItem}
							to="/products"
						>
							Shop All
						</Link>
						<Link
							className={headerStyles.navItem}
							activeClassName={headerStyles.activeNavItem}
							to="/blog"
						>
							Blog
						</Link>
						<Link
							className={headerStyles.navItem}
							activeClassName={headerStyles.activeNavItem}
							to="/about"
						>
							About Us
						</Link>
						<Link
							className={headerStyles.navItem}
							activeClassName={headerStyles.activeNavItem}
							to="/reviews"
						>
							Reviews
						</Link>
					</Nav>
					<Nav>
						<Link to="/cart">
							<Button
								className="badge-pill border-0 px-3"
								style={{ backgroundColor: '#6b8bbb', fontWeight: 100 }}
							>
								{/* <FontAwesomeIcon icon={faShoppingCart} />{' '} */}
								Cart{' '}
								<Badge pill variant="light">
									{count}
								</Badge>
							</Button>
						</Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};

export default Header;
