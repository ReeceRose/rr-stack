import { TuariClient } from '@rr/client/tuari';
import App from '@rr/ui/App';
import '@rr/ui/style/syles.css';
import React from 'react';
import ReactDOM from 'react-dom/client';

const client = new TuariClient();

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<App client={client} />
	</React.StrictMode>
);
