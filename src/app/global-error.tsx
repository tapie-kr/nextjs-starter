'use client';

import * as Sentry from '@sentry/nextjs';
import NextError from 'next/error';
import { useEffect } from 'react';

export default function GlobalError(props: ErrorPageProps) {
	const { error } = props;

	useEffect(() => {
		Sentry.captureException(error);
	}, [error]);

	return (
		<html lang='ko'>
			<body>
				<NextError statusCode={0} />
			</body>
		</html>
	);
}
