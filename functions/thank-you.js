// Dedicated Pages Function for /thank-you.
// functions/index.js only handles the homepage route (/).
export async function onRequest(context) {
  const url = new URL(context.request.url);
  if (url.hostname.toLowerCase() !== "me.xboxy.shop") {
    return context.next();
  }
  // Fetch the MeSpazzo-specific asset rather than the root thank-you.html
  // (which belongs to the face massager).
  const assetUrl = new URL("/me/thank-you.html", url);
  const response = await context.env.ASSETS.fetch(new Request(assetUrl.toString(), context.request));
  if (response.status >= 300 && response.status < 400) {
    // Cloudflare Pages may canonicalize HTML assets. Follow it internally
    // so the browser stays on https://me.xboxy.shop/thank-you.
    const location = response.headers.get("Location");
    if (location) {
      const redirected = new URL(location, assetUrl);
      if (redirected.origin === assetUrl.origin && redirected.pathname.startsWith("/me/thank-you")) {
        return context.env.ASSETS.fetch(new Request(redirected.toString(), context.request));
      }
    }
  }
  return response;
}
