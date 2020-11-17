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
						<p className={`${footerStyles.lowerLevelLeft} mr-5`}>
							Millie Bleu is a curated collection of one-of-a-kind antiques,
							vintage finds, and timeless, new interior items. Inspired by
							little pops of “bleu,” you are guaranteed to find beautiful,
							timeless items that deserve second stories and brand new
							beginnings.
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
						<div className={footerStyles.lowerLevelRight}>
							<NewsletterModule />
						</div>
					</Col>
				</Row>
				<Row className="my-4">
					<Col
						xs={12}
						lg={8}
						className="d-flex flex-column justify-content-end my-3"
					>
						<div>&copy; Millie Bleu LLC, 2020. </div>
						<div className="text-dark">
							Built in Birmingham by RL Web Design.
						</div>
					</Col>
					<Col xs={12} lg={4} className="d-flex align-items-center my-3">
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
