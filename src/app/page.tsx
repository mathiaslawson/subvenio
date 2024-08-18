import { api, HydrateClient } from "~/trpc/server";
import Hero from "./(main)/Hero";
import Services from "./(main)/Services";
import Tiers from "./(main)/Tiers";


export default async function Home() {
 
  return (
    <HydrateClient>
      <main className="min-h-screen mb-20">
      
        <Hero />
        <Services />
        <Tiers />
      
      </main>
    </HydrateClient>
  );
}
