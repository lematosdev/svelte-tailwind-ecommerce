import App from './App.svelte';
import type { Person } from './types'

const app = new App({
	target: document.body,
	props: {
		person: {
			firstName: 'Carlos',
			lastName: 'Matos'
		} as Person
	}
});

export default app;