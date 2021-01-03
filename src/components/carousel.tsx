import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import Img from 'gatsby-image';
import { useStaticQuery, graphql } from 'gatsby';

import carouselStyles from './carousel.module.scss';

interface HomePageCarouselProps {}

const HomePageCarousel: React.FC<HomePageCarouselProps> = () => {
	const imageData = useStaticQuery(graphql`
		query {
			firstImage: file(relativePath: { eq: "entry.jpg" }) {
				childImageSharp {
					fluid(maxWidth: 2400) {
						...GatsbyImageSharpFluid
					}
				}
			}
			secondImage: file(relativePath: { eq: "placesetting.jpg" }) {
				childImageSharp {
					fluid(maxWidth: 2400) {
						...GatsbyImageSharpFluid
					}
				}
			}
			thirdImage: file(relativePath: { eq: "frames.jpeg" }) {
				childImageSharp {
					fluid(maxWidth: 2400) {
						...GatsbyImageSharpFluid
					}
				}
			}
		}
	`);

	const [index, setIndex] = useState(0);

	const handleSelect = (selectedIndex: number) => {
		setIndex(selectedIndex);
	};

	return (
		<Carousel activeIndex={index} onSelect={handleSelect}>
			<Carousel.Item>
				<Img
					fluid={imageData.firstImage.childImageSharp.fluid}
					className={carouselStyles.picture}
				/>
				{/* <Carousel.Caption>
					<Link to="/products">
						<Badge className={carouselStyles.badge} pill>
							Shop
						</Badge>
					</Link>
					<div className="d-none d-sm-block">
						<p className={carouselStyles.carouselTag}>
							Check out our curated collection of antique items for your home.
						</p>
					</div>
				</Carousel.Caption> */}
			</Carousel.Item>
			<Carousel.Item>
				<Img
					fluid={imageData.secondImage.childImageSharp.fluid}
					className={carouselStyles.picture}
				/>
				{/* <Carousel.Caption>
					<Link to="/blog">
						<Badge className={carouselStyles.badge} pill>
							Blog
						</Badge>
					</Link>
					<div className="d-none d-sm-block">
						<p className={carouselStyles.carouselTag}>
							Take a look at our blog for some inspiration.
						</p>
					</div>
				</Carousel.Caption> */}
			</Carousel.Item>
			<Carousel.Item>
				<Img
					fluid={imageData.thirdImage.childImageSharp.fluid}
					className={carouselStyles.picture}
				/>
				{/* <Carousel.Caption>
					<a href="#featured_items">
						<Badge className={carouselStyles.badge} pill>
							Featured Items
						</Badge>
					</a>
					<div className="d-none d-sm-block">
						<p className={carouselStyles.carouselTag}>Our newest additions.</p>
					</div>
					<div id="featured_items"></div>
				</Carousel.Caption> */}
			</Carousel.Item>
		</Carousel>
	);
};

export default HomePageCarousel;
