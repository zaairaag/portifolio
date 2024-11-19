"use client";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-background/50 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-6">
        <p className="text-sm text-center text-muted-foreground">
          {currentYear} Zaira Candido
        </p>
      </div>
    </footer>
  );
}
