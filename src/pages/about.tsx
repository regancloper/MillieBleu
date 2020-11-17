import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

import Layout from '../components/layout';
import Head from '../components/head';
import aboutStyles from './about.module.scss';

interface AboutPageProps {}

const AboutPage: React.FC<AboutPageProps> = () => {
	const imageData = useStaticQuery(graphql`
		query {
			ashley: file(relativePath: { eq: "Ashley.jpg" }) {
				childImageSharp {
					fluid(maxWidth: 2400) {
						...GatsbyImageSharpFluid
					}
				}
			}
			milliebeach: file(relativePath: { eq: "milliebeach.jpg" }) {
				childImageSharp {
					fluid(maxWidth: 2400) {
						...GatsbyImageSharpFluid
					}
				}
			}
			millielick: file(relativePath: { eq: "millielick.jpg" }) {
				childImageSharp {
					fluid(maxWidth: 2400) {
						...GatsbyImageSharpFluid
					}
				}
			}
			milliesit: file(relativePath: { eq: "milliesit.jpg" }) {
				childImageSharp {
					fluid(maxWidth: 2400) {
						...GatsbyImageSharpFluid
					}
				}
			}
		}
	`);

	return (
		<Layout>
			<Head title="About" />
			<Container className={aboutStyles.text}>
				<div className="mt-5 mb-4 text-center">
					<div className={aboutStyles.copenhagen}>who we are</div>
					<h3 className={aboutStyles.header}>About Us</h3>
				</div>
				<Container>
					<div className="text-justify">
						Millie Bleu is a curated collection of one-of-a-kind antiques,
						vintage finds, and timeless, new interior items. Inspired by little
						pops of “bleu,” you are guaranteed to find beautiful, timeless items
						that deserve second stories and brand new beginnings. Millie Bleu
						strives to provide its customers with high-quality interiors at
						affordable prices.
					</div>
					<div className={aboutStyles.meetAshley}>meet Ashley</div>
					<Row>
						<Col xs={12} lg={5} xl={6}>
							<Img
								fluid={imageData.ashley.childImageSharp.fluid}
								style={{ marginBottom: '1.5em', maxHeight: 475 }}
							/>
						</Col>
						<Col
							xs={12}
							lg={7}
							xl={6}
							// className="d-flex flex-column justify-content-between my-5"
						>
							<p className="text-justify">
								I am thrilled to share Millie Bleu with you. Stylistically, I am
								inspired by traditional home interiors with modern elements and
								pops of color—especially “bleu.” I love mixing the old with the
								new. Whatever your style may be, I hope Millie Bleu inspires
								your home.
							</p>
							<p className="text-justify">
								Millie Bleu is named after one of my first loves, Millie—our
								family’s first Golden Retriever. Although you’d never know it,
								Millie was born with congenital kidney disease and was not
								expected to live more than a few years. Millie lived six years.
								She went to spring training, law school, and a lot of states
								in-between. Millie was a light of sunshine to everyone she met.
								She loved good food and the ocean just as much as I do. Now she
								is our family’s guardian angel.
							</p>
							<p className="text-justify">
								Whether your interior style is traditional, modern or something
								else, my hope is that you will find something special to
								incorporate into your home for years to come.
							</p>
						</Col>
					</Row>
					<hr />
					<Row className="mt-5">
						<Col xs={12} md={4} style={{ marginBottom: '1.8em' }}>
							<Img
								fluid={imageData.milliesit.childImageSharp.fluid}
								className={aboutStyles.imageTriadOne}
							/>
						</Col>
						<Col xs={12} md={4} style={{ marginBottom: '1.8em' }}>
							<Img
								fluid={imageData.millielick.childImageSharp.fluid}
								className={aboutStyles.imageTriadTwo}
							/>
						</Col>
						<Col xs={12} md={4} style={{ marginBottom: '1.8em' }}>
							<Img
								fluid={imageData.milliebeach.childImageSharp.fluid}
								className={aboutStyles.imageTriadThree}
							/>
						</Col>
					</Row>
				</Container>
			</Container>
		</Layout>
	);
};

export default AboutPage;
