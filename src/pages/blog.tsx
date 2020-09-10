import React from 'react';
import Layout from '../components/layout';
import Head from '../components/head';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Link, graphql } from 'gatsby';
import Img from 'gatsby-image';

import blogStyles from './blog.module.scss';

interface BlogPageProps {
	data: {
		allShopifyArticle: {
			nodes: {
				id: string;
				author: {
					name: string;
				};
				handle: string;
				content: string;
				title: string;
				image: any;
				publishedAt: string;
			}[];
		};
	};
}

const BlogPage: React.FC<BlogPageProps> = ({ data }) => {
	return (
		<Layout>
			<Head title="Blog" />
			<Container>
				<div className="my-5 text-center">
					<div className={blogStyles.copenhagen}>learn more</div>
					<h3 className={blogStyles.header}>Read Our Blog</h3>
				</div>
				{data.allShopifyArticle.nodes.map(blog => (
					<Link
						key={blog.id}
						to={`/blog/${blog.handle}`}
						className={blogStyles.link}
					>
						<Card
							className={blogStyles.card}
							border="0"
							style={{ borderRadius: 0 }}
						>
							<Row noGutters>
								<Col lg={4}>
									<Img fluid={blog.image.localFile.childImageSharp.fluid} />
								</Col>
								<Col lg={8} className="d-flex align-items-center">
									<Card.Body>
										<Card.Title>{blog.title}</Card.Title>
										<small className="text-muted">{blog.publishedAt}</small>
										<Card.Text className={blogStyles.lineClamp}>
											{blog.content}
										</Card.Text>
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
		allShopifyArticle(sort: { fields: publishedAt, order: DESC }) {
			nodes {
				id
				handle
				content
				title
				image {
					localFile {
						childImageSharp {
							fluid(maxHeight: 550) {
								...GatsbyImageSharpFluid
							}
						}
					}
				}
				publishedAt(formatString: "MMMM DD, YYYY")
			}
		}
	}
`;
