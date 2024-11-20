"use client";
import { Search } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

export default function HomePage() {
  const [searchQuery, setSearchQuery] = useState('');
  
  const emojiCards = [
    { emoji: "🚀", title: "Rocket" },
    { emoji: "💡", title: "Light Bulb" },
    { emoji: "🎮", title: "Game Controller" },
    { emoji: "🎨", title: "Artist Palette" },
    { emoji: "🌟", title: "Glowing Star" },
    { emoji: "🎵", title: "Musical Note" },
    { emoji: "📱", title: "Mobile Phone" },
    { emoji: "🔥", title: "Fire" },
    { emoji: "🌈", title: "Rainbow" }
  ];

  const filteredEmojis = emojiCards.filter(card => 
    card.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    card.emoji.includes(searchQuery)
  );

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  return (
    <main className="flex min-h-screen flex-col items-center bg-gradient-to-b from-indigo-900 to-purple-900">
      <div className="w-full max-w-4xl px-4 flex flex-col min-h-screen">
        <div className="flex-grow flex flex-col items-center gap-12 py-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white text-center">
            Discover <span className="text-purple-400">Emojis</span>
          </h1>
          
          <div className="relative w-full max-w-2xl">
            <Search 
              className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-600 z-10" 
              strokeWidth={2}
            />
            <input
              type="text"
              className="w-full py-4 pl-12 pr-4 text-gray-900 rounded-xl bg-white/95 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-purple-400 shadow-lg"
              placeholder="Search emoji..."
              value={searchQuery}
              onChange={(e) => handleSearch(e.target.value)}
            />
          </div>

          {filteredEmojis.length === 0 ? (
            <div className="text-center text-white">
              <p className="text-xl">No emojis found</p>
              <p className="text-gray-400 mt-2">Try a different search term</p>
            </div>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 w-full">
              {filteredEmojis.map((card, index) => (
                <div
                  key={index}
                  className="group p-6 rounded-xl bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300 cursor-pointer"
                >
                  <div className="flex flex-col items-center text-center space-y-3">
                    <span className="text-5xl group-hover:scale-110 transition-transform duration-300">
                      {card.emoji}
                    </span>
                    <h3 className="text-sm font-medium text-gray-200">{card.title}</h3>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        <footer className="py-3 border-t border-white/5">
          <div className="flex justify-center items-center gap-6">
            <Link 
              href="/about"
              className="text-gray-400 hover:text-white transition-colors duration-200 text-xs"
            >
              About
            </Link>
            <div className="w-0.5 h-0.5 rounded-full bg-gray-500"></div>
            <Link 
              href="/contact"
              className="text-gray-400 hover:text-white transition-colors duration-200 text-xs"
            >
              Contact
            </Link>
          </div>
        </footer>
      </div>
    </main>
  );
}
