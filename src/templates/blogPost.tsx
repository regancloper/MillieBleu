import React from 'react';
import { graphql } from 'gatsby';
import { Container, Card } from 'react-bootstrap';
import Img from 'gatsby-image';

import Layout from '../components/layout';
import blogPostStyles from './blogPost.module.scss';

interface BlogPostProps {
	data: {
		shopifyArticle: any;
	};
}

const BlogPost: React.FC<BlogPostProps> = ({ data }) => {
	return (
		<Layout>
			<div className={blogPostStyles.container}>
				<Container className="px-lg-5">
					<div className="py-3 p-lg-5">
						<Card border="0" style={{ borderRadius: '15px' }}>
							<Img
								fluid={
									data.shopifyArticle.image.localFile.childImageSharp.fluid
								}
								style={{ borderRadius: '15px 15px 0px 0px' }}
							/>
							<Card.Body className="m-2 m-md-4">
								<Card.Title>{data.shopifyArticle.title}</Card.Title>
								<p style={{ color: '#6b8bbb' }}>
									{data.shopifyArticle.publishedAt}
								</p>
								<p>{data.shopifyArticle.content}</p>
								<footer className="blockquote-footer font-italic">
									Written by {data.shopifyArticle.author.name}
								</footer>
							</Card.Body>
						</Card>
					</div>
				</Container>
			</div>
		</Layout>
	);
};

export default BlogPost;

export const BlogPostQuery = graphql`
	query($articleId: String!) {
		shopifyArticle(id: { eq: $articleId }) {
			id
			title
			content
			author {
				name
			}
			image {
				localFile {
					childImageSharp {
						fluid(maxWidth: 2400) {
							...GatsbyImageSharpFluid
						}
					}
				}
			}
			publishedAt(formatString: "MMMM DD, YYYY")
		}
	}
`;
