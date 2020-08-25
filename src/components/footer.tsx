import React from 'react';
import { Link } from 'gatsby';
import { Container, Row, Col } from 'react-bootstrap';

import footerStyles from './footer.module.scss';

interface FooterProps {}

const Footer: React.FC<FooterProps> = () => {
	return (
		<footer className={footerStyles.footer}>
			<Container>
				<Row>
					<Col xs={6} sm={5}>
						<div className={footerStyles.topLevel}>MILLIE BLEU</div>
						<p className={`${footerStyles.lowerLevel} mr-5`}>
							Here is where you'd put some description about Millie Bleu's
							products and general mission of the company.
						</p>
					</Col>
					<Col xs={6} sm={1}>
						<div className={footerStyles.topLevel}>NAVIGATE</div>
						<ul className={footerStyles.list}>
							<Link className={footerStyles.link} to="/about">
								<li>About</li>
							</Link>
							<Link className={footerStyles.link} to="/about">
								<li>Policies</li>
							</Link>
							<Link className={footerStyles.link} to="/about">
								<li>Contact</li>
							</Link>
						</ul>
					</Col>
					<Col xs={6} sm={{ span: 4, offset: 2 }}>
						<div className={footerStyles.topLevel}>NEWSLETTER</div>
						<p className={footerStyles.lowerLevel}>
							We're in the process of putting together a newsletter. Thanks for
							your patience!
						</p>
					</Col>
				</Row>
				<p className="mt-5 mb-0">&copy; Millie Bleu, 2020. </p>
				<p className="text-dark">Built in Birmingham by Regan.</p>
			</Container>
		</footer>
	);
};

export default Footer;
