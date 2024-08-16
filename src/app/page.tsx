import Link from "next/link";

import { LatestPost } from "~/app/_components/post";
import { api, HydrateClient } from "~/trpc/server";
import Hero from "./(main)/Hero";
import Services from "./(main)/Services";
import Tiers from "./(main)/Tiers";
import Footer from "./_components/Footer";
import Navbar from "./_components/Navbar";

export default async function Home() {
  const hello = await api.post.hello({ text: "from tRPC" });

  void api.post.getLatest.prefetch();

  return (
    <HydrateClient>
      <main className="min-h-screen">
        <Navbar />
        <Hero />
        <Services />
        <Tiers />
        <Footer />
      </main>
    </HydrateClient>
  );
}
