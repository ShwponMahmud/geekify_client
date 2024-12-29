import Showcase from '../../Showcase/Showcase';
import './CustomerReviewShowcase.css'
import customerreviewbanner from '../../../../assets/images/customer-review.jpg'

function CustomerReviewShowcase() {
  return (
    <>
      <Showcase backgroundImage={customerreviewbanner} title='Customers' highlights='Review' paragraph='Our customers are our biggest supporters. Would you like to know what our customers think about us? Check 
        out the reviews below!' />
    </>
  );
}

export default CustomerReviewShowcase;
