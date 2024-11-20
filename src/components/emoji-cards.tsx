import { useQuery } from "@tanstack/react-query";
import json from "~/static/emoji.json";
import type { EmojiData } from "~/types";

const searchEmojis = async (query: string) => {
  const mock: EmojiData = json;
  const searchTerms = query.toLowerCase().trim().split(" ");
  return mock.emojis.filter((emoji) =>
    searchTerms.every((term) => emoji.name.toLowerCase().includes(term)),
  );
};

export default function EmojiCards({
  searchQuery = "",
}: {
  searchQuery: string;
}) {
  const {
    data: emojis,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["emojis", searchQuery],
    queryFn: () => searchEmojis(searchQuery),
    enabled: searchQuery.length > 0,
    initialData: searchQuery === "" ? json.emojis : undefined,
  });

  return (
    <div className="scrollbar-thin scrollbar-track-transparent scrollbar-thumb-white/20 hover:scrollbar-thumb-white/30 h-full overflow-y-auto">
      <div className="p-4">
        {isLoading ? (
          <div className="flex h-full items-center justify-center text-white">
            <div className="h-8 w-8 animate-spin rounded-full border-4 border-white border-t-transparent" />
          </div>
        ) : isError ? (
          <div className="flex h-full items-center justify-center text-white">
            <div className="text-center">
              <p className="text-xl">Error loading emojis</p>
              <p className="mt-2 text-gray-400">Please try again later</p>
            </div>
          </div>
        ) : !emojis?.length ? (
          <div className="flex h-full items-center justify-center text-white">
            <div className="text-center">
              <p className="text-xl">No emojis found</p>
              <p className="mt-2 text-gray-400">Try a different search term</p>
            </div>
          </div>
        ) : (
          <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {emojis.map((card, index) => (
              <div
                key={index}
                className="group cursor-pointer rounded-xl bg-white/10 p-6 backdrop-blur-sm transition-all duration-300 hover:bg-white/20"
              >
                <div className="flex flex-col items-center space-y-3 text-center">
                  <span className="text-5xl transition-transform duration-300 group-hover:scale-110">
                    {card.emoji}
                  </span>
                  <h3 className="text-sm font-medium text-gray-200">
                    {card.name}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
