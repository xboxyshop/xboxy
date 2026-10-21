export async function onRequest(context) {
  const url = new URL(context.request.url);
  const host = url.hostname.toLowerCase();
  if (url.pathname === "/" && (host === "mi.xboxy.shop" || host === "go.xboxy.shop" || host === "me.xboxy.shop")) {
    const folder = host === "mi.xboxy.shop" ? "mi" : host === "me.xboxy.shop" ? "me" : "go";
    const target = new URL("/" + folder + "/", url);
    return context.env.ASSETS.fetch(new Request(target.toString(), context.request));
  }
  return context.next();
}
