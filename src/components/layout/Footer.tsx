import { SocialIcons } from "@/components/ui/SocialIcons";
import { portfolioData } from "@/data/portfolio";

export function Footer() {
  return (
    <footer className="bg-slate-950 py-4 border-t border-slate-900">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-center md:text-left">
          <p className="text-slate-400 text-sm">
            &copy; {new Date().getFullYear()} {portfolioData.name}. All rights
            reserved.
          </p>
        </div>

        <SocialIcons variant="footer" />
      </div>
    </footer>
  );
}
