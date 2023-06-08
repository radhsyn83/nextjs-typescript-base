import Head from 'next/head';
import styles from './PrimaryLayout.module.css';

export interface IPrimaryLayout extends React.ComponentPropsWithoutRef<'div'> {
  // justify?: 'items-center' | 'items-start';
}

const PrimaryLayout: React.FC<IPrimaryLayout> = ({ children }) => {
  // const mqtt = useAppSelector(mqttSelector);
  // const dispatch = useDispatch();
  // const mqttClientRef = useRef<MqttClient | null>(null);
  // const incommingMessageHandlers = useRef([
  //   {
  //     topic: 'topic1',
  //     handler: (msg: string) => {
  //       addMessage(msg);
  //     },
  //   },
  // ]);

  // useMqtt({
  //   uri: process.env.NEXT_PUBLIC_MQTT_URI ?? '',
  //   options: {
  //     protocol: 'wss',
  //     username: process.env.NEXT_PUBLIC_MQTT_USERNAME,
  //     password: process.env.NEXT_PUBLIC_MQTT_PASSWORD,
  //   },
  //   topicHandlers: incommingMessageHandlers.current,
  //   onConnectedHandler: (client) => setMqttClient(client),
  // });

  // const setMqttClient = (client: MqttClient) => {
  //   console.log(client.connected);
  //   dispatch(updateMqtt(client));
  //   mqttClientRef.current = client;
  // };

  // const addMessage = (message: any) => {
  //   // setIncommingMessages((incommingMessages) => [
  //   //   ...incommingMessages,
  //   //   message,
  //   // ]);
  // };
  return (
    <>
      <Head>
        <title>NextJs Fullstack App Template</title>
      </Head>
      <main className={styles.container}>{children}</main>
    </>
  );
};

export default PrimaryLayout;
