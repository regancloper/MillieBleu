import React from 'react';
import Layout from '../components/layout';
import Head from '../components/head';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Link, graphql } from 'gatsby';
import Img from 'gatsby-image';

import blogStyles from './blog.module.scss';
import { renderRichText } from 'gatsby-source-contentful/rich-text';
import { INLINES } from '@contentful/rich-text-types';

interface BlogPageProps {
	data: {
		allContentfulBlogPost: {
			nodes: {
				id: string;
				content: any;
				title: string;
				image: any;
				publishDate: string;
			}[];
		};
	};
}

const BlogPage: React.FC<BlogPageProps> = ({ data }) => {
	const options = {
		renderNode: {
			[INLINES.HYPERLINK]: (node: any) => <span>{node.data.uri}</span>,
		},
	};
	return (
		<Layout>
			<Head title="Blog" />
			<Container>
				<div className="my-5 text-center">
					<div className={blogStyles.copenhagen}>learn more</div>
					<h3 className={blogStyles.header}>Read Our Blog</h3>
				</div>
				{data.allContentfulBlogPost.nodes.map(blog => (
					<Link
						key={blog.id}
						to={`/blog/${blog.title}`}
						className={blogStyles.link}
					>
						<Card
							className={blogStyles.card}
							border="0"
							style={{ borderRadius: 0 }}
						>
							<Row noGutters>
								<Col lg={4}>
									<Img fluid={blog.image.fluid} />
								</Col>
								<Col lg={8} className="d-flex align-items-center">
									<Card.Body>
										<Card.Title>{blog.title}</Card.Title>
										<small className="text-muted">{blog.publishDate}</small>
										<div className={blogStyles.lineClamp}>
											{renderRichText(blog.content, options)}
										</div>
									</Card.Body>
								</Col>
							</Row>
						</Card>
					</Link>
				))}
			</Container>
		</Layout>
	);
};

export default BlogPage;

export const query = graphql`
	query {
		allContentfulBlogPost(sort: { fields: publishDate, order: DESC }) {
			nodes {
				id
				title
				content {
					raw
				}
				image {
					fluid {
						...GatsbyContentfulFluid
					}
				}
				publishDate(formatString: "MMMM DD, YYYY")
			}
		}
	}
`;
