import { useMqttState, useSubscription } from 'mqtt-react-hooks';
import { useEffect } from 'react';

export interface IChat extends React.ComponentPropsWithoutRef<'div'> {}

const ChatController: React.FC<IChat> = ({ children }) => {
  const { client } = useMqttState();
  const { message } = useSubscription(['testsub']);
  const { connectionStatus } = useMqttState();

  useEffect(() => {
    console.log(connectionStatus);
  }, [connectionStatus]);

  useEffect(() => {
    if (message) {
      console.log(message);
    }
  }, [message]);

  return <>{children}</>;
};

export default ChatController;
