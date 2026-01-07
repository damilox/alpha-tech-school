"use client";

import { useState } from "react";
import { Search } from "lucide-react";

interface Category {
  id: string;
  label: string;
}

interface ProgramFilterProps {
  categories: Category[];
  onSearch?: (value: string) => void;
  onCategoryChange?: (categoryId: string) => void;
}

export default function ProgramFilter({
  categories,
  onSearch,
  onCategoryChange,
}: ProgramFilterProps) {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [searchValue, setSearchValue] = useState("");

  const handleCategoryClick = (id: string) => {
    setActiveCategory(id);
    onCategoryChange?.(id);
  };

  const handleSearch = (value: string) => {
    setSearchValue(value);
    onSearch?.(value);
  };

  return (
    <section className="w-full space-y-6">
      {/* Search */}
      <div className="relative">
        <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <input
          type="text"
          placeholder="Search programs..."
          value={searchValue}
          onChange={(e) => handleSearch(e.target.value)}
          className="w-full rounded-xl border border-border bg-background py-3 pl-11 pr-4 text-sm outline-none focus:ring-2 focus:ring-primary"
        />
      </div>

      {/* Categories */}
      <div className="space-y-3">
        <h3 className="text-sm font-semibold">Categories</h3>
        <div className="flex flex-wrap gap-3">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => handleCategoryClick(category.id)}
              className={`rounded-full border px-4 py-2 text-xs font-medium transition ${
                activeCategory === category.id
                    ? "border-primary bg-primary text-red-700"
                    : "border-border bg-background text-foreground hover:bg-muted"
                }`}
               >
              {category.label}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
