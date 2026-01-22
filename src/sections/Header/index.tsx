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
	colorClassName = "text-gray-900",
	trackClassName = "text-gray-200",
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
				colorClassName={showProgress ? "text-gray-900" : "text-gray-200"}
				trackClassName="text-gray-200"
			/>
			<div className="absolute inset-0 flex items-center justify-center">
				<span className="text-lg font-semibold text-gray-900 leading-none">
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
		<div className="w-full min-h-screen flex items-center justify-center flex-col text-center relative overflow-hidden gap-8 px-4">
			{/* Badge */}
			<div className="inline-flex items-center px-4 py-2 rounded-full bg-gray-200 text-gray-700 text-sm font-medium">
				5.000+ membros ativos
			</div>

			{/* Título Principal */}
			<h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-gray-900 max-w-4xl">
				AlphaChain: bots e inteligência para cripto
			</h1>

			{/* Subtítulo */}
			<p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl mt-6">
				Hedge para LP, bots de trade, indicadores, aulas e consultorias em um só lugar. Dados, estratégias e newsletters para decisões melhores.
			</p>

			{/* Botões de Ação */}
			<div className="flex items-center justify-center gap-4 mt-8">
				<Button size="lg" className="bg-gray-900 hover:bg-gray-700 text-white px-8 py-3 rounded-lg transition-colors duration-200">
					Quero o AlphaChain
				</Button>
				<Link href="/#pricing">
					<Button variant="outline" size="lg" className="border-gray-300 text-gray-700 hover:bg-gray-100 hover:text-gray-900 px-8 py-3 rounded-lg transition-colors duration-200">
						Ver planos
					</Button>
				</Link>
			</div>

			<div className="mt-10 w-full max-w-3xl">
				<div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
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
			className="rounded-xl border border-gray-200 bg-white/70 backdrop-blur-sm px-4 py-4 flex flex-col items-center justify-center text-center gap-2">
			<div className="flex items-center justify-center">{visual}</div>
			<div className="text-sm text-gray-600">{label}</div>
		</div>
	);
};

export default Header;
