"use client";

import { Projects } from "@/components/sections/projects";

export default function ProjectsPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Projects locale="pt" />
    </main>
  );
}
