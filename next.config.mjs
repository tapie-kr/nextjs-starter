import { withSentryConfig } from '@sentry/nextjs';
import { createVanillaExtractPlugin } from '@vanilla-extract/next-plugin';

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
	org: 'tapie-kr',
	project: 'template-test',
	sentryUrl: 'https://sentry.vport.dev/',
	silent: !process.env.CI,
	widenClientFileUpload: true,
	reactComponentAnnotation: {
		enabled: true,
	},
	disableLogger: true,
	tunnelRoute: '/monitoring',
});
