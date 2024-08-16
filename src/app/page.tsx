import Link from "next/link";

import { LatestPost } from "~/app/_components/post";
import { api, HydrateClient } from "~/trpc/server";
import Hero from "./(main)/Hero";
import Services from "./(main)/Services";
import Tiers from "./(main)/Tiers";

export default async function Home() {
  const hello = await api.post.hello({ text: "from tRPC" });

  void api.post.getLatest.prefetch();

  return (
    <HydrateClient>
      <main className="min-h-screen">
        <Hero />
        <Services />
        <Tiers />
      </main>
    </HydrateClient>
  );
}
