import React from 'react';
import { Link } from 'gatsby';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import NewsletterModule from './newsletterModule';
import footerStyles from './footer.module.scss';

interface FooterProps {}

const Footer: React.FC<FooterProps> = () => {
	return (
		<footer className={footerStyles.footer}>
			<Container>
				<Row>
					<Col xs={12} md={5}>
						<div className={footerStyles.topLevel}>MILLIE BLEU</div>
						<p className={`${footerStyles.lowerLevel} mr-5`}>
							Here is where you'd put some description about Millie Bleu's
							products and general mission of the company.
						</p>
					</Col>
					<Col xs={12} md={1}>
						<div className={footerStyles.topLevel}>NAVIGATE</div>
						<ul className={footerStyles.list}>
							<Link className={footerStyles.link} to="/about">
								<li>About</li>
							</Link>
							<Link className={footerStyles.link} to="/faq">
								<li>FAQ</li>
							</Link>
							<Link className={footerStyles.link} to="/contact">
								<li>Contact</li>
							</Link>
						</ul>
					</Col>
					<Col xs={12} md={{ span: 4, offset: 2 }}>
						<div className={footerStyles.topLevel}>NEWSLETTER</div>
						<div className={footerStyles.lowerLevel}>
							<NewsletterModule />
						</div>
					</Col>
				</Row>
				<Row className="my-4">
					<Col
						xs={12}
						md={8}
						className="d-flex flex-column justify-content-end my-3"
					>
						<div>&copy; Millie Bleu LLC, 2020. </div>
						<div className="text-dark">
							Built in Birmingham by RL Web Design.
						</div>
					</Col>
					<Col xs={12} md={4} className="d-flex align-items-center my-3">
						<a
							target="_blank"
							className={footerStyles.fa}
							href="https://www.facebook.com/shopmilliebleu/"
						>
							<FontAwesomeIcon icon={['fab', 'facebook-f']} />
						</a>
						<a
							target="_blank"
							className={footerStyles.fa}
							href="https://www.instagram.com/shopmilliebleu/"
						>
							<FontAwesomeIcon icon={['fab', 'instagram']} />
						</a>
						<a
							target="_blank"
							className={footerStyles.fa}
							href="https://www.pinterest.com/shopmilliebleu/"
						>
							<FontAwesomeIcon icon={['fab', 'pinterest']} />
						</a>
					</Col>
				</Row>
			</Container>
		</footer>
	);
};

export default Footer;
