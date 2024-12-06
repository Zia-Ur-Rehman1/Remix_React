import { Link } from "@remix-run/react";
import home from "../styles/home.css";
export default function Index() {
  return (
    <main id="content">
      <h1>A better way to keep track of your notes </h1>
      <p>Try our new beta and never lose track of your imp notes</p>
      <p id="cta">
        <Link
          to="/notes"
          className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
        >
          Try now
        </Link>
      </p>
    </main>
  );
}
export function links() {
  return [{ rel: "stylesheet", href: home }];
}
