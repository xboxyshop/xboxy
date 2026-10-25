export async function onRequest(context) {
  const url = new URL(context.request.url);
  const host = url.hostname.toLowerCase();

  // Route each subdomain homepage to its corresponding folder.
  if (url.pathname === "/" && (host === "mi.xboxy.shop" || host === "go.xboxy.shop" || host === "me.xboxy.shop" || host === "ma.xboxy.shop" || host === "le.xboxy.shop")) {
    const folder = host === "ma.xboxy.shop" ? "ma" : host === "mi.xboxy.shop" ? "mi" : host === "me.xboxy.shop" ? "me" : host === "le.xboxy.shop" ? "le" : "go";
    const target = new URL("/" + folder + "/", url);
    return context.env.ASSETS.fetch(new Request(target.toString(), context.request));
  }
  return context.next();
}
