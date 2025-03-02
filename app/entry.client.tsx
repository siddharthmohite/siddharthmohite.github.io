/**
 * By default, Remix will handle hydrating your app on the client for you.
 * You are free to delete this file if you'd like to, but if you ever want it revealed again, you can run `npx remix reveal` ✨
 * For more information, see https://remix.run/file-conventions/entry.client
 */

import { RemixBrowser } from "@remix-run/react";
import { startTransition, StrictMode, useEffect } from "react";
import { hydrateRoot } from "react-dom/client";


function GoogleAnalytics() {
  useEffect(() => {

   const script = document.createElement("script");
   script.async = true;
   script.src = `https://www.googletagmanager.com/gtag/js?id=G-RY5T39HZT9`;
   document.head.appendChild(script);

   const script2 = document.createElement("script");
   script2.innerHTML = `
     window.dataLayer = window.dataLayer || [];
     function gtag(){dataLayer.push(arguments);}
     gtag('js', new Date());
     gtag('config', 'G-RY5T39HZT9');
   `;
   document.head.appendChild(script2);
  }, []);
  return null;
}
startTransition(() => {
  hydrateRoot(
    document,
    <StrictMode>
      <GoogleAnalytics />
      <RemixBrowser />
    </StrictMode>
  );
});
