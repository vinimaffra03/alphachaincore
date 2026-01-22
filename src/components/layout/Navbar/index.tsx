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
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const supabaseClient = useSupabaseClient();

	const { user } = useUser();

	const handleLogout = async () => {
		const { error } = await supabaseClient.auth.signOut();
		if (error) {
			console.log(error);
		}
	};

	return (
		<div className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200/50">
			<div className="py-2 mx-auto w-full max-w-screen-2xl relative flex items-center justify-between px-[100px]">
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
					<span className="text-xl font-bold tracking-wide text-gray-900 leading-none">
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
								className="tracking-wide text-gray-600 transition-colors duration-200 hover:text-gray-900">
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
								className="rounded-lg hover:bg-gray-100 transition-colors duration-200">
								<Link href="/sign-in">Entrar</Link>
							</Button>
							<Button variant="default">
								<Link href="/#comunidade">Começar agora</Link>
							</Button>
						</>
					) : (
						<>
							<Button variant="ghost">
								<Link href="/dashboard">Painel</Link>
							</Button>
							<Button variant="default" onClick={handleLogout}>
								Sair
							</Button>
						</>
					)}
					<ModeToggle />
				</div>
				<div className="lg:hidden">
					<button
						aria-label="Open Menu"
						title="Open Menu"
						className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-gray-100 focus:bg-gray-100"
						onClick={() => setIsMenuOpen(true)}>
						<svg className="w-5 text-gray-600" viewBox="0 0 24 24">
							<path
								fill="currentColor"
								d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
							/>
							<path
								fill="currentColor"
								d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
							/>
							<path
								fill="currentColor"
								d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
							/>
						</svg>
					</button>
					{isMenuOpen && (
						<div className="absolute top-0 left-0 w-full z-50">
							<div className="p-5 bg-white/90 backdrop-blur-md border border-gray-200/50 rounded shadow-lg">
								<div className="flex items-center justify-between mb-4">
									<div>
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
											<span className="text-xl font-bold tracking-wide text-gray-900 leading-none">
												AlphaChain
											</span>
										</Link>
									</div>
									<div>
										<button
											aria-label="Close Menu"
											title="Close Menu"
											className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
											onClick={() => setIsMenuOpen(false)}>
											<svg className="w-5 text-gray-600" viewBox="0 0 24 24">
												<path
													fill="currentColor"
													d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
												/>
											</svg>
										</button>
									</div>
								</div>
								<nav>
									<ul className="space-y-4">
										<li>
											<Link
												href="/#"
												aria-label="Início"
												title="Início"
												className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-gray-900">
												Início
											</Link>
										</li>
										<li>
											<Link
												href="/#aulas"
												aria-label="Aulas"
												title="Aulas"
												className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-gray-900">
												Aulas
											</Link>
										</li>
										<li>
											<Link
												href="/#comunidade"
												aria-label="Comunidade"
												title="Comunidade"
												className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-gray-900">
												Comunidade
											</Link>
										</li>
										<li>
											<Link
												href="/#contato"
												aria-label="Contato"
												title="Contato"
												className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-gray-900">
												Contato
											</Link>
										</li>
										<li>
											<Link
												href="/#calculadora"
												aria-label="Calculadora"
												title="Calculadora"
												className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-gray-900">
												Calculadora
											</Link>
										</li>
										<Button variant="default">Começar agora</Button>
									</ul>
								</nav>
							</div>
						</div>
					)}
				</div>
			</div>
		</div>
	);
};

export default Navbar;
