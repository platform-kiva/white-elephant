// styles
import { NotificationContainer } from './Notification.styles';

export default function Notification({ text }) {
  return (
    <NotificationContainer
      initial={{ opacity: 0, y: -5 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -5 }}
      transition={{ duration: 0.2 }}
      className="panel-bg"
    >
      <h3>{text}</h3>
    </NotificationContainer>
  );
}