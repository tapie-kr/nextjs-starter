interface LayoutProps {
	children: React.ReactNode;
}

interface ErrorPageProps {
	error: Error & { digest?: string };
}

interface PageParams<
	P extends string | number | symbol = '',
	S extends string | number | symbol = '',
> {
	params: Promise<Record<P, string>>;
	searchParams: Promise<Record<S, string>>;
}
