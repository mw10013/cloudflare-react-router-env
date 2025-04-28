import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";
import { env } from "cloudflare:workers";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export function loader({ context }: Route.LoaderArgs) {
  return { message: context.cloudflare.env.VALUE_FROM_CLOUDFLARE, env };
}

export default function Home({ loaderData }: Route.ComponentProps) {
  return (
    <div className="p-6">
      <Welcome message={loaderData.message} />;
      <pre>{JSON.stringify(loaderData, null, 2)}</pre>
    </div>
  );
}
