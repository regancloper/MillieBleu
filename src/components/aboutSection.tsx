import React from 'react';
import { Row, Col, Badge } from 'react-bootstrap';
import { useStaticQuery, graphql, Link } from 'gatsby';
import Img from 'gatsby-image';

import aboutSectionStyles from './aboutSection.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

interface AboutSectionProps {}

const AboutSection: React.FC<AboutSectionProps> = () => {
	const imageData = useStaticQuery(graphql`
		query {
			blogImage: file(relativePath: { eq: "tealbox.jpg" }) {
				childImageSharp {
					fluid(maxWidth: 2400) {
						...GatsbyImageSharpFluid
					}
				}
			}
		}
	`);

	return (
		<div>
			<Row noGutters>
				<Col
					xs={12}
					md={6}
					className="d-flex flex-column justify-content-center align-items-center border-top"
				>
					<div className={aboutSectionStyles.about}>
						<Link to="/about" className={aboutSectionStyles.link}>
							<div className={aboutSectionStyles.copenhagen}>Who We Are</div>
							<h1 className={aboutSectionStyles.subtext}>About Millie Bleu</h1>
							<div className="d-flex justify-content-center align-items-center">
								<FontAwesomeIcon
									icon={faArrowRight}
									className={aboutSectionStyles.arrow}
								/>
							</div>
							{/* <Badge className={aboutSectionStyles.badge} pill>
								About Page
							</Badge> */}
						</Link>
					</div>
				</Col>
				<Col xs={12} md={6}>
					<Img
						className={aboutSectionStyles.picture}
						fluid={imageData.blogImage.childImageSharp.fluid}
					/>
				</Col>
			</Row>
		</div>
	);
};

export default AboutSection;
