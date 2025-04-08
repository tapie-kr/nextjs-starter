import { withSentryConfig } from '@sentry/nextjs';
import { createVanillaExtractPlugin } from '@vanilla-extract/next-plugin';
import packageJson from './package.json' with { type: 'json' };

const withVanillaExtract = createVanillaExtractPlugin();

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
	typescript: { ignoreBuildErrors: true },
	eslint: { ignoreDuringBuilds: true },
};

const vanillaAppliedConfig = withVanillaExtract(nextConfig);

export default withSentryConfig(vanillaAppliedConfig, {
	org: process.env.SENTRY_ORG,
	project: process.env.SENTRY_PROJECT,
	sentryUrl: process.env.SENTRY_URL || 'https://sentry.io',
	release: packageJson.version,
	silent: !process.env.CI,
	widenClientFileUpload: true,
	reactComponentAnnotation: {
		enabled: true,
	},
	disableLogger: true,
	tunnelRoute: '/monitoring',
});
