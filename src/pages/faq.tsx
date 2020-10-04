import React from 'react';
import Head from '../components/head';
import Layout from '../components/layout';

interface FAQPageProps {}

const FAQPage: React.FC<FAQPageProps> = () => {
	return (
		<Layout>
			<Head title="FAQ" />
			<div>
				<div>Shipping and Handling </div>
				<div>
					All orders require 1-3 business days for processing. Your order will
					ship once it is processed. We ship orders Monday thru Friday,
					excluding holidays. All orders are shipped through UPS. The shipping
					speed chosen at checkout is based on the estimated speed at which UPS
					will deliver your package once it leaves our facility and does not
					effect the speed at which your order will be processed. Please contact
					us directly regarding international orders.  Please verify your
					shipping address prior to checking out as we are not able to re-route
					an order once shipped. You will receive an email with tracking
					information once your order ships. Please be aware that we do not
					provide delivery instructions for orders.
				</div>{' '}
				<div>Returns and Exchanges</div>{' '}
				<div>
					Returns of non-vintage items are accepted within 10 days of
					receipt. Items must be unaltered and in original condition and
					packaging. Return shipping charges are the customer’s responsibility.
					Please contact us regarding returns. We will refund the original form
					of payment, excluding shipping costs. Depending on your bank's
					policies, it may take several business days for the refund to reach
					your bank account once it has processed by us. All vintage items are
					final sale. All sale items are final sale. We are unable to accept
					exchanges. If you wish to exchange a non-vintage item, simply return
					the item per the policy described above and purchase the item you wish
					to receive.{' '}
				</div>{' '}
				<div>Damaged, Incorrect or Incomplete Orders</div>{' '}
				<div>
					If your order is damaged, please contact us. Please provide your order
					number and evidence of the damage in your message. We will handle it
					from there. If you receive an incorrect order, please contact us so we
					can take care of it. If your order is incomplete, please contact us.
					We will ship your missing item(s) provided the item is in stock. If
					the item is out of stock, you will be refunded for the cost of the
					item.
				</div>
				<div>
					{' '}
					Lost Packages UPS is responsible for the delivery of your order. If
					your package is lost, please contact UPS directly and let us know if
					we can provide any additional information.
				</div>
				<div>Local Pickup in Birmingham, Alabama</div>{' '}
				<div>
					To pick up your order in Birmingham, Alabama, select “BHM Pickup” at
					checkout. Once your order has been processed, you will receive a
					confirmation email with pickup instructions.
				</div>
			</div>
		</Layout>
	);
};

export default FAQPage;
