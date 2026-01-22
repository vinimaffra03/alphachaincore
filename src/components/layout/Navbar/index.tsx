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
		<div className="fixed top-0 left-0 right-0 z-[100] bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200/50 dark:border-gray-700/50">
			<div className="py-2 mx-auto w-full max-w-screen-2xl relative flex items-center justify-between px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-[100px]">
				<Link
					href="/"
					aria-label="AlphaChain"
					title="AlphaChain"
					className="inline-flex items-center gap-3 leading-none">
					<Image
						src="/images/logo-lion.svg"
						alt="AlphaChain Logo"
						width={56}
						height={56}
						className="w-14 h-14 block"
					/>
					<span className="text-xl font-bold tracking-wide text-gray-900 dark:text-white leading-none">
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
								className="tracking-wide text-gray-600 dark:text-gray-300 transition-colors duration-200 hover:text-gray-900 dark:hover:text-white">
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
								className="rounded-lg bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-200">
								<Link href="/sign-in">Entrar</Link>
							</Button>
							<Button variant="default" className="bg-gray-900 hover:bg-gray-700 dark:bg-white dark:hover:bg-gray-200 text-white dark:text-gray-900">
								<Link href="/#comunidade">Começar agora</Link>
							</Button>
						</>
					) : (
						<>
							<Button variant="ghost" className="hover:bg-gray-100 dark:hover:bg-gray-800">
								<Link href="/dashboard">Painel</Link>
							</Button>
							<Button variant="default" onClick={handleLogout} className="bg-gray-900 hover:bg-gray-700 dark:bg-white dark:hover:bg-gray-200 text-white dark:text-gray-900">
								Sair
							</Button>
						</>
					)}
					<ModeToggle />
				</div>
				<div className="lg:hidden">
					<button
						aria-label="Toggle Menu"
						title="Toggle Menu"
						className="relative w-6 h-5 flex flex-col justify-center items-center group"
						onClick={() => setIsMenuOpen(!isMenuOpen)}
					>
						<span className="sr-only">Toggle menu</span>
						<span 
							className={`absolute h-0.5 w-6 bg-gray-600 dark:bg-gray-300 transition-all duration-300 ease-in-out ${
								isMenuOpen ? 'rotate-45 translate-y-0' : '-translate-y-2'
							}`}
						/>
						<span 
							className={`h-0.5 w-6 bg-gray-600 dark:bg-gray-300 transition-all duration-300 ease-in-out ${
								isMenuOpen ? 'opacity-0' : 'opacity-100'
							}`}
						/>
						<span 
							className={`absolute h-0.5 w-6 bg-gray-600 dark:bg-gray-300 transition-all duration-300 ease-in-out ${
								isMenuOpen ? '-rotate-45 translate-y-0' : 'translate-y-2'
							}`}
						/>
					</button>
					
					{/* Mobile Menu - Always visible */}
					<div className={`fixed top-16 left-0 right-0 bg-white dark:bg-gray-900 shadow-xl z-[90] transition-all duration-300 ease-in-out ${
						isMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0 pointer-events-none'
					}`}>
						<div className="flex flex-col p-4 border-b border-gray-200 dark:border-gray-700">
							<div className="flex items-center justify-between mb-4">
								<span className="text-lg font-bold tracking-wide text-gray-900 dark:text-white leading-none">
									MENU
								</span>
								<button
									aria-label="Close Menu"
									title="Close Menu"
									className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
									onClick={() => setIsMenuOpen(false)}
								>
									<svg className="w-5 h-5 text-gray-600 dark:text-gray-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
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
											className="block px-4 py-3 text-base font-medium text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-white transition-colors duration-200"
										>
											{link.label}
										</Link>
									</li>
								))}
							</ul>
							
							{/* Mobile Auth Buttons - Always visible */}
							<div className="mt-4 space-y-3 border-t border-gray-200 dark:border-gray-700 pt-4">
								{!user ? (
									<>
										<Button
											variant="ghost"
											className="w-full justify-center h-12 text-base font-medium rounded-lg bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-200"
										>
											<Link href="/sign-in">Entrar</Link>
										</Button>
										<Button variant="default" className="w-full justify-center h-12 text-base font-medium rounded-lg bg-gray-900 hover:bg-gray-700 dark:bg-white dark:hover:bg-gray-200 text-white dark:text-gray-900">
											<Link href="/#comunidade">Começar agora</Link>
										</Button>
									</>
								) : (
									<>
										<Button variant="ghost" className="w-full justify-center h-12 text-base font-medium rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800">
											<Link href="/dashboard">Painel</Link>
										</Button>
										<Button variant="default" onClick={handleLogout} className="w-full justify-center h-12 text-base font-medium rounded-lg bg-gray-900 hover:bg-gray-700 dark:bg-white dark:hover:bg-gray-200 text-white dark:text-gray-900">
											Sair
										</Button>
									</>
								)}
							</div>
						</nav>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
