import { AppProps } from 'next/app';

import '../styles/main.css';
import '../../public/assets/fonts/noyh-geometric-slim-cufonfonts-webfont/style.css';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <Component {...pageProps} />
);

export default MyApp;
