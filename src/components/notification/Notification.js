// styles
import { NotificationContainer, ProgressBar } from './Notification.styles';

export default function Notification({ text }) {
  return (
    <NotificationContainer
      initial={{
        opacity: 0,
        transform: 'translate(-50%, -50%) translateY(-5px)', // Combine transforms here
      }}
      animate={{
        opacity: 1,
        transform: 'translate(-50%, -50%) translateY(0)', // Ensure centering is included
      }}
      exit={{
        opacity: 0,
        transform: 'translate(-50%, -50%) translateY(-5px)', // Include centering when exiting
      }}
      transition={{ duration: 0.2 }}
      className="panel-bg"
    >
      <h3>{text}</h3>
      <ProgressBar
        initial={{ width: '0%' }}
        animate={{ width: '100%' }}
        transition={{ duration: 4.0, ease: "easeOut" }}
      />
    </NotificationContainer >
  );
}