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
     

      {/* Categories */}
      <div className="space-y-3">
        <h3 className="text-[22px] py-3 font-semibold">Categories</h3>
        <div className="flex flex-wrap gap-3">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => handleCategoryClick(category.id)}
              className={`rounded-full border px-4 py-2 text-xs font-medium transition ${
                activeCategory === category.id
                    ? "border-primary bg-muted text-black"
                    : "border-border bg- text-foreground hover:bg-muted"
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
