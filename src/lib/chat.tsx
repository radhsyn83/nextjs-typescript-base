import { useMqttState, useSubscription } from 'mqtt-react-hooks';
import { useEffect } from 'react';

export interface IChat extends React.ComponentPropsWithoutRef<'div'> {}

const ChatController: React.FC<IChat> = ({ children }) => {
  const { client } = useMqttState();
  const { message } = useSubscription(['testsub', 'testsub2']);
  const { connectionStatus } = useMqttState();

  useEffect(() => {
    console.log(connectionStatus);
  }, [connectionStatus]);

  useEffect(() => {
    if (message) {
      console.log(message);
    }
  }, [message]);

  client?.on('message', (topic: string, rawPayload: any, packet: any) => {
    console.log(rawPayload, 's');
  });

  return <div>{children}</div>;
};

export default ChatController;
