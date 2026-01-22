import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/theme-toggle";
import { useUser } from "@/hooks/useUser";
import { useSupabaseClient } from "@supabase/auth-helpers-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const links = [
	{
		label: "Início",
		href: "/",
	},
	{
		label: "Aulas",
		href: "/#aulas",
	},
	{
		label: "Comunidade",
		href: "/#comunidade",
	},
	{
		label: "Contato",
		href: "/#contato",
	},
	{
		label: "Calculadora",
		href: "/#calculadora",
	},
];

const Navbar = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(true);

  const supabaseClient = useSupabaseClient();

  const { user } = useUser();

  const handleLogout = async () => {
    const { error } = await supabaseClient.auth.signOut();
    if (error) {
      console.log(error);
    }
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-[100] bg-background/80 backdrop-blur-md border-b border-border">
      <div className="py-2 mx-auto w-full max-w-screen-2xl relative flex items-center justify-between px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-[100px]">
        <Link
          href="/"
          aria-label="AlphaChain"
          title="AlphaChain"
          className="inline-flex items-center gap-3 leading-none"
        >
          <Image
            src="/images/logo-lion.svg"
            alt="AlphaChain Logo"
            width={56}
            height={56}
            className="w-14 h-14 block"
          />
          <span className="text-xl font-bold tracking-wide text-foreground leading-none">
            AlphaChain
          </span>
        </Link>
        <ul className="hidden items-center gap-12 lg:flex">
          {links.map((link) => (
            <li key={link.label}>
              <Link
                href={link.href}
                aria-label={link.label}
                title={link.label}
                className="tracking-wide text-muted-foreground transition-colors duration-300 hover:text-foreground"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="lg:flex items-center gap-4 hidden">
          {!user ? (
            <>
              <Button
                variant="ghost"
                className="rounded-lg bg-muted hover:bg-muted/80 transition-colors duration-300"
              >
                <Link href="/sign-in">Entrar</Link>
              </Button>
              <Button variant="default" className="bg-foreground hover:bg-foreground/90 text-background transition-colors duration-300">
                <Link href="/#comunidade">Começar agora</Link>
              </Button>
            </>
          ) : (
            <>
              <Button variant="ghost" className="hover:bg-muted transition-colors duration-300">
                <Link href="/dashboard">Painel</Link>
              </Button>
              <Button variant="default" onClick={handleLogout} className="bg-foreground hover:bg-foreground/90 text-background transition-colors duration-300">
                Sair
              </Button>
            </>
          )}
          <ModeToggle />
        </div>
        <div className="lg:hidden flex items-center gap-2">
					<ModeToggle />
					<button
						aria-label="Toggle Menu"
						title="Toggle Menu"
						className="relative w-6 h-5 flex flex-col justify-center items-center group"
						onClick={() => setIsMenuOpen(!isMenuOpen)}
					>
            <span className="sr-only">Toggle menu</span>
            <span 
              className={`absolute h-0.5 w-6 bg-muted-foreground transition-all duration-300 ease-in-out ${
                isMenuOpen ? 'rotate-45 translate-y-0' : '-translate-y-2'
              }`}
            />
            <span 
              className={`h-0.5 w-6 bg-muted-foreground transition-all duration-300 ease-in-out ${
                isMenuOpen ? 'opacity-0' : 'opacity-100'
              }`}
            />
            <span 
              className={`absolute h-0.5 w-6 bg-muted-foreground transition-all duration-300 ease-in-out ${
                isMenuOpen ? '-rotate-45 translate-y-0' : 'translate-y-2'
              }`}
            />
          </button>
        </div>
        
        {/* Mobile Menu - Always visible */}
        <div className={`fixed top-16 left-0 right-0 bg-background shadow-xl z-[90] transition-all duration-300 ease-in-out ${
          isMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0 pointer-events-none'
        }`}>
          <div className="flex flex-col p-4 border-b border-border">
            <div className="flex items-center justify-between mb-4">
              <span className="text-lg font-bold tracking-wide text-foreground leading-none">
                MENU
              </span>
              <button
                aria-label="Close Menu"
                title="Close Menu"
                className="p-2 rounded-lg hover:bg-muted transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                <svg className="w-5 h-5 text-muted-foreground" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
          
          {/* Mobile Navigation - Always visible */}
          <nav className="px-4 pb-4">
            <ul className="space-y-2">
              {links.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    aria-label={link.label}
                    title={link.label}
                    className="block px-4 py-3 text-base font-medium text-foreground rounded-lg hover:bg-muted hover:text-foreground transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            
            {/* Mobile Auth Buttons - Always visible */}
            <div className="mt-4 space-y-3 border-t border-border pt-4">
              {!user ? (
                <>
                  <Button
                    variant="ghost"
                    className="w-full justify-center h-12 text-base font-medium rounded-lg bg-muted hover:bg-muted/80 transition-colors duration-300"
                  >
                    <Link href="/sign-in">Entrar</Link>
                  </Button>
                  <Button variant="default" className="w-full justify-center h-12 text-base font-medium rounded-lg bg-foreground hover:bg-foreground/90 text-background transition-colors duration-300">
                    <Link href="/#comunidade">Começar agora</Link>
                  </Button>
                </>
              ) : (
                <>
                  <Button variant="ghost" className="w-full justify-center h-12 text-base font-medium rounded-lg hover:bg-muted transition-colors duration-300">
                    <Link href="/dashboard">Painel</Link>
                  </Button>
                  <Button variant="default" onClick={handleLogout} className="w-full justify-center h-12 text-base font-medium rounded-lg bg-foreground hover:bg-foreground/90 text-background transition-colors duration-300">
                    Sair
                  </Button>
                </>
              )}
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
