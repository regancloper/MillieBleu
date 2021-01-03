import React from 'react';
import { graphql } from 'gatsby';
import { Container, Card, Col, Row } from 'react-bootstrap';
import Img from 'gatsby-image';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS } from '@contentful/rich-text-types';

import Layout from '../components/layout';
import blogPostStyles from './blogPost.module.scss';

interface BlogPostProps {
	data: {
		contentfulBlogPost: any;
	};
}

const BlogPost: React.FC<BlogPostProps> = ({ data }) => {
	const options = {
		renderNode: {
			[BLOCKS.EMBEDDED_ASSET]: (node: any) => {
				const alt = node.data.target.fields.title['en-US'];
				const url = node.data.target.fields.file['en-US'].url;
				return (
					<div className="d-flex justify-content-center mb-4">
						<img src={url} alt={alt} className={blogPostStyles.embedPicture} />
					</div>
				);
			},
			[BLOCKS.PARAGRAPH]: (node: any, children: any) => (
				<p className="text-justify" style={{ fontWeight: 200 }}>
					{children}
				</p>
			),
		},
	};

	return (
		<Layout>
			<div className={blogPostStyles.container}>
				<Container className="px-lg-5">
					<div className="py-3 p-lg-5">
						<Row className="justify-content-center mb-4">
							<Col xs={12} md={5}>
								<Img
									fluid={data.contentfulBlogPost.image.fluid}
									className={blogPostStyles.picture}
								/>
							</Col>
						</Row>

						<Card border="0" style={{ borderRadius: '15px' }}>
							<Card.Body className="m-2 m-md-4">
								<Card.Title>{data.contentfulBlogPost.title}</Card.Title>
								<p style={{ color: '#6b8bbb' }}>
									{data.contentfulBlogPost.publishedDate}
								</p>
								<div>
									{documentToReactComponents(
										data.contentfulBlogPost.content.json,
										options
									)}
								</div>
								<footer className="blockquote-footer font-italic">
									{data.contentfulBlogPost.publishDate}
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
		contentfulBlogPost(id: { eq: $articleId }) {
			id
			title
			content {
				json
			}
			publishDate(formatString: "MMMM DD, YYYY")
			image {
				fluid {
					...GatsbyContentfulFluid
				}
			}
		}
	}
`;
