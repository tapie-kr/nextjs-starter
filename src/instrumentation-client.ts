import * as Sentry from '@sentry/nextjs';

Sentry.init({
	dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,
	environment:
		process.env.NEXT_PUBLIC_SENTRY_ENVIRONMENT || process.env.NODE_ENV,
	tracesSampleRate: 1,
	sampleRate: 1,
	integrations: [
		Sentry.replayIntegration({
			maskAllText: false,
			maskAllInputs: false,
			blockAllMedia: false,
		}),
		Sentry.replayCanvasIntegration(),
	],
	replaysSessionSampleRate: process.env.NODE_ENV === 'production' ? 0.1 : 1,
	replaysOnErrorSampleRate: 1,
});
