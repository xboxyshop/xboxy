export async function onRequest(context) {
  const url = new URL(context.request.url);
  const host = url.hostname.toLowerCase();

  // Serve MeSpazzo thank-you page at the clean public URL, without redirecting to /me/.
  if (host === "me.xboxy.shop" && (url.pathname === "/thank-you" || url.pathname === "/thank-you/")) {
    const target = new URL("/me/thank-you/index.html", url);
    return context.env.ASSETS.fetch(new Request(target.toString(), context.request));
  }

  // Route each subdomain homepage to its corresponding folder.
  if (url.pathname === "/" && (host === "mi.xboxy.shop" || host === "go.xboxy.shop" || host === "me.xboxy.shop" || host === "ma.xboxy.shop" || host === "le.xboxy.shop")) {
    const folder = host === "ma.xboxy.shop" ? "ma" : host === "mi.xboxy.shop" ? "mi" : host === "me.xboxy.shop" ? "me" : host === "le.xboxy.shop" ? "le" : "go";
    const target = new URL("/" + folder + "/", url);
    return context.env.ASSETS.fetch(new Request(target.toString(), context.request));
  }
  if (host === "le.xboxy.shop" && (url.pathname === "/set_pennelli-make-up.jpg" || url.pathname === "/specchietto-luce-led-03.mp4")) {
    const target = new URL("/le" + url.pathname, url);
    return context.env.ASSETS.fetch(new Request(target.toString(), context.request));
  }
  return context.next();
}
