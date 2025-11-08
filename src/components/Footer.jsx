export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black px-6 py-10 text-white">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <p className="text-sm text-white/60">© {new Date().getFullYear()} AI Development Studio. All rights reserved.</p>
          <nav className="flex items-center gap-6 text-sm">
            <a className="text-white/70 hover:text-white" href="#features">Features</a>
            <a className="text-white/70 hover:text-white" href="#showcase">Showcase</a>
            <a className="text-white/70 hover:text-white" href="https://spline.design" target="_blank" rel="noreferrer">Spline</a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
