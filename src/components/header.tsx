import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';
import { Navbar, Nav, Container } from 'react-bootstrap';
import Img from 'gatsby-image';
import { ShoppingCartOutlined } from '@material-ui/icons';
import Badge from '@material-ui/core/Badge';

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
							<Badge
								// badgeContent={count}
								color="primary"
								variant={count > 0 ? 'dot' : 'standard'}
							>
								<ShoppingCartOutlined style={{ color: '#6b8bbb' }} />
							</Badge>
						</Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};

export default Header;
