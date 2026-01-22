"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

const clamp = (value: number, min: number, max: number) =>
	Math.min(max, Math.max(min, value));

const formatIntPtBr = (n: number) => new Intl.NumberFormat("pt-BR").format(n);

type ProgressRingProps = {
	value: number;
	size?: number;
	strokeWidth?: number;
	colorClassName?: string;
	trackClassName?: string;
	animate?: boolean;
};

const ProgressRing = ({
	value,
	size = 56,
	strokeWidth = 6,
	colorClassName = "text-foreground",
	trackClassName = "text-muted",
	animate = true,
}: ProgressRingProps) => {
	const [animatedValue, setAnimatedValue] = useState(animate ? 0 : value);

	useEffect(() => {
		if (!animate) return;
		let raf = 0;
		const durationMs = 900;
		const start = performance.now();
		const target = clamp(value, 0, 100);

		const tick = (now: number) => {
			const t = clamp((now - start) / durationMs, 0, 1);
			const eased = 1 - Math.pow(1 - t, 3);
			setAnimatedValue(target * eased);
			if (t < 1) raf = requestAnimationFrame(tick);
		};

		raf = requestAnimationFrame(tick);
		return () => cancelAnimationFrame(raf);
	}, [animate, value]);

	const normalized = clamp(animatedValue, 0, 100);
	const r = (size - strokeWidth) / 2;
	const c = 2 * Math.PI * r;
	const dashOffset = c - (normalized / 100) * c;

	return (
		<div className="relative" style={{ width: size, height: size }}>
			<svg
				width={size}
				height={size}
				viewBox={`0 0 ${size} ${size}`}
				className="-rotate-90">
				<circle
					cx={size / 2}
					cy={size / 2}
					r={r}
					fill="transparent"
					stroke="currentColor"
					strokeWidth={strokeWidth}
					className={trackClassName}
				/>
				<circle
					cx={size / 2}
					cy={size / 2}
					r={r}
					fill="transparent"
					stroke="currentColor"
					strokeWidth={strokeWidth}
					strokeLinecap="round"
					strokeDasharray={c}
					strokeDashoffset={dashOffset}
					className={colorClassName}
				/>
			</svg>
		</div>
	);
};

type RingStatProps = {
	valueText: string;
	progress?: number;
	animate?: boolean;
};

const RingStat = ({ valueText, progress, animate }: RingStatProps) => {
	const showProgress = typeof progress === "number";
	return (
		<div className="relative">
			<ProgressRing
				value={showProgress ? progress : 100}
				animate={animate ?? false}
				colorClassName={showProgress ? "text-foreground" : "text-muted"}
				trackClassName="text-muted"
			/>
			<div className="absolute inset-0 flex items-center justify-center">
				<span className="text-lg font-semibold text-foreground leading-none transition-colors duration-300">
					{valueText}
				</span>
			</div>
		</div>
	);
};

const useCountUp = (to: number, durationMs = 900) => {
	const [value, setValue] = useState(0);

	useEffect(() => {
		let raf = 0;
		const start = performance.now();
		const target = Math.max(0, Math.floor(to));

		const tick = (now: number) => {
			const t = clamp((now - start) / durationMs, 0, 1);
			const eased = 1 - Math.pow(1 - t, 3);
			setValue(Math.round(target * eased));
			if (t < 1) raf = requestAnimationFrame(tick);
		};

		raf = requestAnimationFrame(tick);
		return () => cancelAnimationFrame(raf);
	}, [durationMs, to]);

	return value;
};

const Header = () => {
	return (
		<div className="w-full min-h-screen flex items-center justify-center flex-col text-center relative overflow-hidden gap-6 sm:gap-8 px-4 sm:px-6 lg:px-8 bg-background transition-colors duration-300">
			{/* Badge */}
			<div className="inline-flex items-center px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-muted text-muted-foreground text-xs sm:text-sm font-medium transition-colors duration-300">
				5.000+ membros ativos
			</div>

			{/* Título Principal */}
			<h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight text-foreground max-w-4xl px-2 transition-colors duration-300">
				AlphaChain: bots e inteligência para cripto
			</h1>

			{/* Subtítulo */}
			<p className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-2xl px-4 transition-colors duration-300">
				Gestão avançada de LP, bots de trade, indicadores, aulas e consultorias em um só lugar. Dados, estratégias e newsletters para decisões melhores.
			</p>

			{/* Botões de Ação */}
			<div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full max-w-md sm:max-w-none">
				<Button size="lg" className="bg-foreground hover:bg-foreground/90 text-background px-6 sm:px-8 py-3 rounded-lg transition-all duration-300 w-full sm:w-auto">
					Quero o AlphaChain
				</Button>
				<Link href="/#pricing">
					<Button variant="outline" size="lg" className="border-border text-foreground hover:bg-muted hover:text-foreground px-6 sm:px-8 py-3 rounded-lg transition-all duration-300 w-full sm:w-auto">
						Ver planos
					</Button>
				</Link>
			</div>

			<div className="mt-8 sm:mt-10 w-full max-w-3xl px-4">
				<div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
					<MetricCard
						label="Taxa de acerto atual"
						visual={<RingStat valueText="71%" progress={71} animate={true} />}
					/>
					<MetricCard
						label="Membros"
						visual={<RingStat valueText={formatIntPtBr(useCountUp(119))} />}
					/>
					<MetricCard
						label="Suporte"
						visual={<RingStat valueText="24h" />}
					/>
				</div>
			</div>
		</div>
	);
};

type MetricCardProps = {
	label: string;
	visual: React.ReactNode;
};

const MetricCard = ({ label, visual }: MetricCardProps) => {
	const aria = useMemo(() => `${label}`, [label]);

	return (
		<div
			aria-label={aria}
			className="rounded-xl border border-border bg-card/70 backdrop-blur-sm px-3 py-3 sm:px-4 sm:py-4 flex flex-col items-center justify-center text-center gap-2 transition-all duration-300">
			<div className="flex items-center justify-center">{visual}</div>
			<div className="text-xs sm:text-sm text-muted-foreground font-medium transition-colors duration-300">{label}</div>
		</div>
	);
};

export default Header;
