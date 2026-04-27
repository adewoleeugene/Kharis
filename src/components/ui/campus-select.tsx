"use client";

import { useEffect, useMemo, useRef, useState } from "react";

export type CampusOption = {
  slug: string;
  label: string;
  meta: string;
  group: string;
};

export function CampusSelect({
  options,
  defaultSlug,
  name = "campus",
}: {
  options: CampusOption[];
  defaultSlug?: string;
  name?: string;
}) {
  const initial = options.find((o) => o.slug === defaultSlug) ?? null;
  const [value, setValue] = useState<CampusOption | null>(initial);
  const [query, setQuery] = useState(initial?.label ?? "");
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    function onMouseDown(e: MouseEvent) {
      if (!containerRef.current?.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("mousedown", onMouseDown);
    return () => document.removeEventListener("mousedown", onMouseDown);
  }, []);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q || (value && q === value.label.toLowerCase())) return options;
    return options.filter(
      (o) =>
        o.label.toLowerCase().includes(q) ||
        o.meta.toLowerCase().includes(q) ||
        o.group.toLowerCase().includes(q) ||
        o.slug.toLowerCase().includes(q)
    );
  }, [options, query, value]);

  const grouped = useMemo(() => {
    const map = new Map<string, CampusOption[]>();
    for (const o of filtered) {
      if (!map.has(o.group)) map.set(o.group, []);
      map.get(o.group)!.push(o);
    }
    return Array.from(map.entries());
  }, [filtered]);

  function pick(o: CampusOption | null) {
    setValue(o);
    setQuery(o?.label ?? "");
    setOpen(false);
    inputRef.current?.blur();
  }

  function onKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setOpen(true);
      setActive((i) => Math.min(i + 1, filtered.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActive((i) => Math.max(i - 1, 0));
    } else if (e.key === "Enter") {
      if (open && filtered[active]) {
        e.preventDefault();
        pick(filtered[active]);
      }
    } else if (e.key === "Escape") {
      setOpen(false);
    }
  }

  let runningIndex = -1;

  return (
    <div ref={containerRef} className="relative">
      <input type="hidden" name={name} value={value?.slug ?? ""} />
      <div className="relative">
        <input
          ref={inputRef}
          type="text"
          autoComplete="off"
          value={query}
          placeholder="Search a campus or ministry…"
          onFocus={() => {
            setOpen(true);
            setActive(0);
          }}
          onChange={(e) => {
            setQuery(e.target.value);
            setOpen(true);
            setActive(0);
            if (e.target.value === "") setValue(null);
          }}
          onKeyDown={onKeyDown}
          aria-haspopup="listbox"
          aria-expanded={open}
          className="w-full bg-transparent border-b hairline focus:border-grace-dark py-2 pr-8 outline-none text-ink transition-colors"
        />
        <span
          aria-hidden
          className={`pointer-events-none absolute right-1 top-1/2 -translate-y-1/2 text-ink-500 transition-transform ${
            open ? "rotate-180" : ""
          }`}
        >
          ▾
        </span>
      </div>

      {open && (
        <div className="absolute left-0 right-0 z-20 mt-1 max-h-80 overflow-auto bg-parchment-50 border hairline shadow-sm">
          <button
            type="button"
            onClick={() => pick(null)}
            className={`w-full text-left px-4 py-2.5 text-sm text-ink-500 hover:bg-parchment-100 ${
              !value ? "bg-parchment-100" : ""
            }`}
          >
            No specific branch — general enquiry
          </button>
          {grouped.length === 0 ? (
            <div className="px-4 py-3 text-sm text-ink-500">No matches.</div>
          ) : (
            grouped.map(([group, items]) => (
              <div key={group} className="border-t hairline">
                <div className="px-4 pt-3 pb-1 text-[10px] uppercase tracking-[0.22em] text-grace-dark">
                  {group}
                </div>
                <ul>
                  {items.map((o) => {
                    runningIndex += 1;
                    const idx = runningIndex;
                    const isActive = idx === active;
                    const isSelected = value?.slug === o.slug;
                    return (
                      <li key={o.slug}>
                        <button
                          type="button"
                          onMouseEnter={() => setActive(idx)}
                          onClick={() => pick(o)}
                          className={`w-full text-left px-4 py-2.5 transition-colors ${
                            isActive ? "bg-parchment-100" : ""
                          } ${isSelected ? "ring-1 ring-inset ring-grace-dark/30" : ""}`}
                        >
                          <span className="block text-ink text-sm font-display leading-tight">
                            {o.label}
                          </span>
                          <span className="block text-xs text-ink-500 mt-0.5">
                            {o.meta}
                          </span>
                        </button>
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
}
