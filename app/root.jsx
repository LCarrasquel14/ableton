import { Links, LiveReload, Meta, Outlet, Scripts } from "@remix-run/react";
import Footer from "./components/footer";
import Header from "./components/header";
import styles from "~/styles/index.css";

export function links() {
  return [
    {
      rel: "stylesheet",
      href: styles,
    },
    {
      href: "https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css",
      rel: "stylesheet",
    },
    { rel: "preconnect", href: "https://fonts.googleapis.com" },
    {
      rel: "preconnect",
      href: "https://fonts.gstatic.com",
      crossOrigin: "true",
    },
    {
      href: "https://fonts.googleapis.com/css2?family=Lato:wght@400;700;900&family=Nunito:wght@400;700;900&family=Poppins:wght@400;700;900&family=Roboto:wght@400;700;900&display=swap",
      rel: "stylesheet",
    },
  ];
}

<link></link>;

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <Header />
        <Outlet />
        <hr />
        <Footer />
        <Scripts />
        <LiveReload />
      </body>
      <script src="https://unpkg.com/boxicons@2.1.4/dist/boxicons.js"></script>
    </html>
  );
}
