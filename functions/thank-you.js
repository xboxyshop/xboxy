export async function onRequest(context) {
  const url = new URL(context.request.url);

  // Dedicated Pages Function for the exact /thank-you route.
  // Do not redirect: serve the root HTML asset while keeping the public URL.
  if (url.hostname.toLowerCase() !== "ma.xboxy.shop") {
    return context.next();
  }

  const target = new URL("/thank-you.html" + url.search, url);
  return context.env.ASSETS.fetch(new Request(target.toString(), context.request));
}
