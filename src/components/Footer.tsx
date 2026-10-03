const YEAR = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="border-t border-hairline py-10 text-xs">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p>© {YEAR} Fairuz. Built with passion.</p>
        <nav aria-label="Legal" className="flex items-center gap-5">
          <a href="/privacy.html" className="text-white/50 hover:text-heading transition-colors duration-400 ease-spring">Privacy</a>
          <a href="/terms.html" className="text-white/50 hover:text-heading transition-colors duration-400 ease-spring">Terms</a>
        </nav>
      </div>
    </footer>
  );
}
