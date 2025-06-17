/** @type {import('next').NextConfig} */

const nextConfig = {
	// reactStrictMode: true,
	output: 'standalone',
	compiler: {
		styledComponents: true,
	},
	matcher: ['/home', '/users/:path*', '/feedbacks/:path*'],
	async headers() {
		return [
			{
				source: '/api/:path*',
				headers: [
					{ key: 'Access-Control-Allow-Credentials', value: 'true' },
					{ key: 'Access-Control-Allow-Origin', value: '*' },
					{
						key: 'Access-Control-Allow-Methods',
						value: 'GET,DELETE,PATCH,POST,PUT',
					},
					{
						key: 'Access-Control-Allow-Headers',
						value:
							'Origin, Accept, Authorization, X-Request-With, X-CSRF-Token, X-Requested-With, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version,',
					},
				],
			},
		];
	},
	async redirects() {
		return [
			{
				source: '/',
				destination: '/home',
				permanent: true,
			},
		];
	},
};

export default nextConfig;
