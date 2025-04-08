'use client';

import * as Sentry from '@sentry/nextjs';
import Link from 'next/link';

export default function Page() {
	return (
		<>
			<h1>Hello from Seoul.</h1>
			<Link href='https://github.com/tapie-kr/nextjs-starter' target='_blank'>
				<p>
					Visit <code>@tapie-kr/nextjs-starter</code> Github
				</p>
			</Link>
			<button
				type='button'
				onClick={() => {
					try {
						throw new Error('Error from test button');
					} catch (error) {
						Sentry.captureException(error);
					}
				}}
			>
				Raise Test Error (will catch by Sentry)
			</button>
			<button
				type='button'
				onClick={() => {
					throw new Error('Unhandled error');
				}}
			>
				Raise unhandled error
			</button>
		</>
	);
}
