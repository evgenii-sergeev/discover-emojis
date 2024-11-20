"use client";
import { Search } from "lucide-react";
import { useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import EmojiCards from "~/components/emoji-cards";
import Footer from "~/components/footer";

const queryClient = new QueryClient();

export default function HomePage() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-b from-indigo-900 to-purple-900">
      <div className="mx-auto w-full max-w-6xl flex-1 px-4">
        <header className="sticky top-0 z-10 flex flex-col items-center space-y-4 bg-gradient-to-b from-indigo-900 pb-4 pt-6">
          <h1 className="text-center text-3xl font-bold text-white md:text-4xl">
            Discover <span className="text-purple-400">Emojis</span>
          </h1>

          <div className="relative w-full max-w-md">
            <Search
              className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-600 z-10"
              strokeWidth={2}
            />
            <input
              type="text"
              className="w-full rounded-lg bg-white/95 py-2 pl-10 pr-4 text-gray-900 shadow-lg backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-purple-400"
              placeholder="Search emoji..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </header>

        <main className="h-[calc(100vh-14rem)] py-4">
          <QueryClientProvider client={queryClient}>
            <EmojiCards searchQuery={searchQuery} />
          </QueryClientProvider>
        </main>
      </div>

      <Footer />
    </div>
  );
}
