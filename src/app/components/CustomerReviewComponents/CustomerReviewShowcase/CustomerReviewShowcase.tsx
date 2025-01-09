import Showcase from '../../Showcase/Showcase';
import './CustomerReviewShowcase.css'
import customerreviewbanner from '../../../../assets/images/customer-review.jpg'

function CustomerReviewShowcase() {
  return (
    <>
      <Showcase backgroundImage={'/customer-review.jpg'} title='Customers' highlights='Review' 
        paragraph='At Geekify, our customers are the heart of everything we do. Here is what some of our satisfied clients have to say about their experience with our services' />
    </>
  );
}

export default CustomerReviewShowcase;
