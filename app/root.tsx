import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import type { LinksFunction } from "@remix-run/node";
import "./tailwind.css";
import React, { useState, useEffect } from "react";

export const links: LinksFunction = () => [
  {
    rel: "preload",
    href: "/folder.webp",
    as: "image",
  },
  {
    rel: "preload",
    href: "/wallpaper.webp",
    as: "image",
  },
  {
    rel: "preload",
    href: "/basketball2.webp",
    as: "image",
  },
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
  },
];

export function Layout({ children }: { children: React.ReactNode }) {

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}

export function HydrateFallback() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 80) {
          clearInterval(interval);
          return prev;
        }
        return prev + 1;
      });
    }, 50);
    return () => clearInterval(interval);
  }, []);
  return(
<div className="bg-black min-h-screen">
  <div className="bg-black min-h-screen relative">
    <img
    src="/applew.png"
    alt="Apple Logo"
    className="w-40 h-40 absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
    />
  </div>
  <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 w-64">
        <div className="w-full bg-gray-700 rounded-full h-1.5">
          <div
            className="bg-white h-1.5 rounded-full"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>
  </div>
  
  );
  
}
