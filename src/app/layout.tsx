export default function RootLayout(props: LayoutProps) {
	const { children } = props;

	return (
		<html lang='ko'>
			<body>{children}</body>
		</html>
	);
}
