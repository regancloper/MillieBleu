import React from 'react';
import { Container } from 'react-bootstrap';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';

library.add(fab);

import Header from './header';
import Footer from './footer';
import '../styles/index.scss';
import layoutStyles from './layout.module.scss';

interface LayoutProps {}

const Layout: React.FC<LayoutProps> = ({ children }) => {
	return (
		<div>
			<Header />
			<div className={layoutStyles.content}>{children}</div>
			<Container className={layoutStyles.footer} fluid>
				<Container className="p-0">
					<Footer />
				</Container>
			</Container>
		</div>
	);
};

export default Layout;
