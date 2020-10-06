import React from 'react';
import { Link } from 'gatsby';
import { Container } from 'react-bootstrap';

import Head from '../components/head';
import Layout from '../components/layout';
import faqStyles from './faq.module.scss';

interface FAQPageProps {}

const FAQPage: React.FC<FAQPageProps> = () => {
	return (
		<Layout>
			<Head title="FAQ" />
			<Container>
				<div className="my-5 text-center">
					<div className={faqStyles.copenhagen}>the fine print</div>
					<h3 className={faqStyles.header}>Frequently Asked Questions</h3>
				</div>
				<h3 className={faqStyles.title}>Shipping and Handling </h3>
				<div>
					<p className={faqStyles.paragraph}>
						All orders require 1-3 business days for processing. Your order will
						ship once it is processed. We ship orders Monday thru Friday,
						excluding holidays.
					</p>
					<p className={faqStyles.paragraph}>
						All orders are shipped through UPS. The shipping speed chosen at
						checkout is based on the estimated speed at which UPS will deliver
						your package once it leaves our facility and does not effect the
						speed at which your order will be processed. Please{' '}
						<Link to="/contact">contact us</Link> directly regarding
						international orders. 
					</p>
					<p className={faqStyles.paragraph}>
						Please verify your shipping address prior to checking out as we are
						not able to re-route an order once shipped. You will receive an
						email with tracking information once your order ships. Please be
						aware that we do not provide delivery instructions for orders.
					</p>
				</div>
				<h3 className={faqStyles.title}>Returns and Exchanges</h3>
				<div>
					<p className={faqStyles.paragraph}>
						Returns of non-vintage items are accepted within 10 days of
						receipt. Items must be unaltered and in original condition and
						packaging. Return shipping charges are the customer’s
						responsibility.
					</p>
					<p className={faqStyles.paragraph}>
						Please <Link to="/contact">contact us</Link> regarding returns. We
						will refund the original form of payment, excluding shipping costs.
						Depending on your bank's policies, it may take several business days
						for the refund to reach your bank account once it has processed by
						us.
					</p>
					<p className={faqStyles.paragraph}>
						All vintage items are final sale. All sale items are final sale.
					</p>
					<p className={faqStyles.paragraph}>
						We are unable to accept exchanges. If you wish to exchange a
						non-vintage item, simply return the item per the policy described
						above and purchase the item you wish to receive.
					</p>
				</div>
				<h3 className={faqStyles.title}>
					Damaged, Incorrect or Incomplete Orders
				</h3>
				<div>
					<p className={faqStyles.paragraph}>
						If your order is damaged, please{' '}
						<Link to="/contact">contact us</Link>. Please provide your order
						number and evidence of the damage in your message. We will handle it
						from there.
					</p>
					<p className={faqStyles.paragraph}>
						If you receive an incorrect order, please{' '}
						<Link to="/contact">contact us</Link> so we can take care of it.
					</p>
					<p className={faqStyles.paragraph}>
						If your order is incomplete, please{' '}
						<Link to="/contact">contact us</Link>. We will ship your missing
						item(s) provided the item is in stock. If the item is out of stock,
						you will be refunded for the cost of the item.
					</p>
				</div>
				<h3 className={faqStyles.title}>Lost Packages</h3>
				<div>
					<p className={faqStyles.paragraph}>
						UPS is responsible for the delivery of your order. If your package
						is lost, please contact UPS directly and let us know if we can
						provide any additional information.
					</p>
				</div>
				<h3 className={faqStyles.title}>Local Pickup in Birmingham, Alabama</h3>
				<div className="mb-5">
					<p className={faqStyles.paragraph}>
						To pick up your order in Birmingham, Alabama, select “BHM Pickup” at
						checkout. Once your order has been processed, you will receive a
						confirmation email with pickup instructions.
					</p>
				</div>
			</Container>
		</Layout>
	);
};

export default FAQPage;
