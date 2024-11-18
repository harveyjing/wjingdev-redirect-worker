/**
 * Welcome to Cloudflare Workers! This is your first worker.
 *
 * - Run `npm run dev` in your terminal to start a development server
 * - Open a browser tab at http://localhost:8787/ to see your worker in action
 * - Run `npm run deploy` to publish your worker
 *
 * Bind resources to your worker in `wrangler.toml`. After adding bindings, a type definition for the
 * `Env` object can be regenerated with `npm run cf-typegen`.
 *
 * Learn more at https://developers.cloudflare.com/workers/
 */

export default {
	async fetch(request, env, ctx): Promise<Response> {
		// check if request's domain is wjing.dev,
		// if it is, redirect to www.wjing.dev，
		// otherwise, return error 400 and message "domain not allowed"
		// Don't lost the path and query string
		
		const url = new URL(request.url);
		if (url.hostname === 'wjing.dev') {
			url.hostname = 'www.wjing.dev';
			return Response.redirect(url.toString(), 301);
		}
		return new Response('domain not allowed', { status: 400 });
	},
} satisfies ExportedHandler<Env>;
