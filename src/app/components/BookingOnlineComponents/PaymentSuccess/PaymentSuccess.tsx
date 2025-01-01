


import { useAppSelector } from '@/app/rtk-state/hooks';
import Image from 'next/image';
import { useRouter } from 'next/router';

const AppointmentSuccessful: React.FC = () => {
  const router = useRouter();
  const bookingInfo = useAppSelector((state) => state?.booking);
  const { reference, description } = router.query;
  let appointmentMessage = 'Your booking has been confirmed. Please check your email/phone for details!';
  let appointmentUndecidedMessage = 'Your request successfully submitted. Our team members will contact you soon!';

  // const message = bookingInfo?.bookingType != 2 ? appointmentMessage : appointmentUndecidedMessage;

  return (
    <div className="appointmentSuccessfulWrapper">
      <Image
        src="/images/global/submitted.gif"
        alt="Booking Success"
        width={190} // Adjusted dimensions as Next.js requires explicit width and height.
        height={190}
        className="img-fluid"
        quality={80}
        priority // Preload the image.
      />
      <h1 style={{ color: '#F58220' }}>
        <i>Congratulations!</i>
      </h1>
      {/* <h4 style={{ color: '#5C5C5C' }}>{message}</h4> */}

      <h5 className="appointmentId">
        Your reference number is: <span className="text-primary">{reference}</span>
      </h5>

      <h2 className="text-info py-3">{description || ''}</h2>

      {/* Uncomment and customize the button below if payment functionality is required */}
      {/* <div className="d-flex justify-content-center">
        <button
          onClick={() =>
            router.push({
              pathname: '/appointmentPayment',
              query: { reference },
            })
          }
          className="btn form-btn"
        >
          Pay Now <i className="fas fa-long-arrow-alt-right"></i>
        </button>
      </div> */}
    </div>
  );
};

export default AppointmentSuccessful;
