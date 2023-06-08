import { store } from '@/data/store';
import Chat from '@/lib/chat';
import '@/styles/globals.css';
import { IClientOptions } from 'mqtt';
import { Connector } from 'mqtt-react-hooks';
import { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import { NextPageWithLayout } from './page';

interface AppPropsWithLayout extends AppProps {
  Component: NextPageWithLayout;
}

const options: IClientOptions = {
  username: process.env.NEXT_PUBLIC_MQTT_USERNAME,
  password: process.env.NEXT_PUBLIC_MQTT_PASSWORD,
  keepalive: 10,
  clientId: 'MyClient',
};
const brokerUrl = process.env.NEXT_PUBLIC_MQTT_URI ?? '';

function App({ Component, pageProps }: AppPropsWithLayout) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout || ((page) => page);

  return (
    <Provider store={store}>
      <Connector brokerUrl={brokerUrl} options={options}>
        <Chat> {getLayout(<Component {...pageProps} />)}</Chat>
      </Connector>
    </Provider>
  );
}

export default App;
