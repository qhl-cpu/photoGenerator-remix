import type { MetaFunction } from "@remix-run/node";
import {Link} from "@remix-run/react";
export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <h1>Welcome to Davis&apos; Remix Projects</h1>
      <ul>
        <li>
          <Link to={`/photoGenerator`}>Photo Generator</Link>
        </li>
        <li>
        <Link to={`/quoteGenerator`}>Quote Generator</Link>
        </li>
        <li>
          <a target="_blank" href="https://remix.run/docs" rel="noreferrer">
            Remix Docs
          </a>
        </li>
      </ul>
    </div>
  );
}
