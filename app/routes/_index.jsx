import NavBar from "~/components/navBar";
import { index } from "~/bd/data";
import { push } from "~/bd/data";
import styles from "~/styles/index.css";
import { useLocation } from "@remix-run/react";

export const meta = () => {
  return [{ title: "What’s new in Live 11 | Ableton" }];
};

export const links = () => {
  return [{ rel: "stylesheet", href: styles }];
};

export default function Index() {
  const location = useLocation();

  return <NavBar addresses={index} />;
}
