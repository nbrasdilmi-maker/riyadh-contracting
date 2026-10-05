"use client";
/**
 * مخزن المختبر — localStorage فقط. يحاكي DB المستقبلية.
 * المفتاح versioned لسهولة إعادة الضبط.
 */
import { useCallback, useEffect, useState } from "react";
import { labSectionsSeed, type LabSection } from "@/data/lab/sections.seed";

export const LAB_STORAGE_KEY = "lab-sections-v5-final";

function readStore(): LabSection[] {
  if (typeof window === "undefined") return labSectionsSeed;
  try {
    const raw = window.localStorage.getItem(LAB_STORAGE_KEY);
    if (!raw) {
      window.localStorage.setItem(LAB_STORAGE_KEY, JSON.stringify(labSectionsSeed));
      return labSectionsSeed;
    }
    const parsed = JSON.parse(raw) as LabSection[];
    if (!Array.isArray(parsed)) throw new Error("bad store");
    return parsed;
  } catch {
    return labSectionsSeed;
  }
}

function writeStore(sections: LabSection[]) {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(LAB_STORAGE_KEY, JSON.stringify(sections));
}

export function resetLabStore() {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(LAB_STORAGE_KEY, JSON.stringify(labSectionsSeed));
}

export function useLabSections() {
  const [sections, setSections] = useState<LabSection[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // محاكاة loading 400ms لاختبار Skeleton
    const t = setTimeout(() => {
      setSections(readStore().sort((a, b) => a.order - b.order));
      setLoading(false);
    }, 400);
    return () => clearTimeout(t);
  }, []);

  const persist = useCallback((next: LabSection[]) => {
    const sorted = [...next].sort((a, b) => a.order - b.order);
    setSections(sorted);
    writeStore(sorted);
  }, []);

  const createSection = useCallback(
    (s: LabSection) => persist([...sections, s]),
    [sections, persist]
  );
  const updateSection = useCallback(
    (slug: string, patch: Partial<LabSection>) =>
      persist(sections.map((s) => (s.slug === slug ? { ...s, ...patch } : s))),
    [sections, persist]
  );
  const removeSection = useCallback(
    (slug: string) => persist(sections.filter((s) => s.slug !== slug)),
    [sections, persist]
  );
  const moveSection = useCallback(
    (slug: string, dir: -1 | 1) => {
      const idx = sections.findIndex((s) => s.slug === slug);
      const j = idx + dir;
      if (idx < 0 || j < 0 || j >= sections.length) return;
      const next = [...sections];
      const [item] = next.splice(idx, 1);
      next.splice(j, 0, item);
      persist(next.map((s, i) => ({ ...s, order: i + 1 })));
    },
    [sections, persist]
  );
  const toggleActive = useCallback(
    (slug: string) => {
      const cur = sections.find((s) => s.slug === slug);
      if (cur) updateSection(slug, { active: !cur.active });
    },
    [sections, updateSection]
  );

  return { sections, loading, createSection, updateSection, removeSection, moveSection, toggleActive, resetLabStore: () => { resetLabStore(); setSections(labSectionsSeed); }, refresh: () => setSections(readStore()) };
}
