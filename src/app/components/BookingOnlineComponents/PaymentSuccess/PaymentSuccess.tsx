import { useAppSelector } from '@/app/rtk-state/hooks';
import Image from 'next/image';

const AppointmentSuccessful: React.FC = () => {
  const bookingInfo = useAppSelector((state) => state?.booking);
  let appointmentMessage = 'Your booking has been confirmed. Please check your email/phone for details!';
  let appointmentUndecidedMessage = 'Your request successfully submitted. Our team members will contact you soon!';

  // const message = bookingInfo?.bookingType != 2 ? appointmentMessage : appointmentUndecidedMessage;

  return (
    <div className="appointmentSuccessfulWrapper">
      <Image
        src="/images/global/submitted.gif"
        alt="Booking Success"
        width={190} 
        height={190}
        className="img-fluid"
        quality={80}
        priority 
      />
      <h1 style={{ color: '#F58220' }}>
        <i>Congratulations!</i>
      </h1>
      {/* <h4 style={{ color: '#5C5C5C' }}>{message}</h4> */}

      <h5 className="appointmentId">
        Your reference number is: <span className="text-primary">reference</span>
      </h5>

      <h2 className="text-info py-3">description</h2>
    </div>
  );
};

export default AppointmentSuccessful;
