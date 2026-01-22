import { useEffect, useRef } from 'react';

interface Candle {
	id: number;
	x: number;
	y: number;
	width: number;
	height: number;
	color: 'green' | 'red';
	speed: number;
	opacity: number;
}

const CandleEffect = () => {
	const canvasRef = useRef<HTMLCanvasElement>(null);
	const animationRef = useRef<number>();
	const candlesRef = useRef<Candle[]>([]);

	useEffect(() => {
		const canvas = canvasRef.current;
		if (!canvas) return;

		const ctx = canvas.getContext('2d');
		if (!ctx) return;

		// Configurar canvas
		const resizeCanvas = () => {
			canvas.width = window.innerWidth;
			canvas.height = window.innerHeight;
		};
		resizeCanvas();
		window.addEventListener('resize', resizeCanvas);

		// Criar candles
		const createCandles = () => {
			const candles: Candle[] = [];
			const totalCandles = 15; // Poucos candles para serem sutis
			
			for (let i = 0; i < totalCandles; i++) {
				const isGreen = Math.random() > 0.5;
				candles.push({
					id: i,
					x: Math.random() * window.innerWidth,
					y: Math.random() * window.innerHeight, // Começa do meio da tela
					width: Math.random() * 2 + 1, // 1-3px de largura (menor)
					height: Math.random() * 8 + 5, // 5-13px de altura (menor)
					color: isGreen ? 'green' : 'red',
					speed: Math.random() * 2 + 1, // Velocidades mais rápidas (1-3px por frame)
					opacity: Math.random() * 0.05 + 0.02 // 0.02-0.07 (quase invisível)
				});
			}
			return candles;
		};

		candlesRef.current = createCandles();

		// Animação
		const animate = () => {
			ctx.clearRect(0, 0, canvas.width, canvas.height);
			
			candlesRef.current.forEach((candle) => {
				// Atualizar posição
				candle.y += candle.speed;
				
				// Resetar se sair da tela
				if (candle.y > canvas.height) {
					candle.y = -30;
					candle.x = Math.random() * canvas.width;
				}
				
				// Desenhar candle (vela)
				ctx.save();
				ctx.globalAlpha = candle.opacity;
				
				// Cor da vela baseada no tipo
				const candleColor = candle.color === 'green' 
					? 'rgba(34, 197, 94, 0.8)'  // Verde claro
					: 'rgba(239, 68, 68, 0.8)';   // Vermelho claro
				
				// Desenhar corpo da vela (retângulo)
				ctx.fillStyle = candleColor;
				ctx.fillRect(
					candle.x - candle.width / 2, 
					candle.y - candle.height, 
					candle.width, 
					candle.height
				);
				
				// Desenhar pavio (linha fina)
				ctx.strokeStyle = candleColor;
				ctx.lineWidth = 0.5;
				ctx.beginPath();
				ctx.moveTo(candle.x, candle.y - candle.height - 2);
				ctx.lineTo(candle.x, candle.y - candle.height - 5);
				ctx.stroke();
				
				// Desenhar sombra/wick
				if (candle.color === 'green') {
					ctx.fillStyle = 'rgba(34, 197, 94, 0.3)'; // Verde bem claro
				} else {
					ctx.fillStyle = 'rgba(239, 68, 68, 0.3)';  // Vermelho bem claro
				}
				ctx.fillRect(
					candle.x - candle.width / 2 - 1, 
					candle.y - candle.height, 
					candle.width + 2, 
					2
				);
				
				ctx.restore();
			});
			
			animationRef.current = requestAnimationFrame(animate);
		};

		animate();

		// Recriar candles periodicamente para variedade
		const interval = setInterval(() => {
			candlesRef.current = createCandles();
		}, 10000); // A cada 10 segundos

		return () => {
			window.removeEventListener('resize', resizeCanvas);
			if (animationRef.current) {
				cancelAnimationFrame(animationRef.current);
			}
			if (interval) {
				clearInterval(interval);
			}
		};
	}, []);

	return (
		<canvas
			ref={canvasRef}
			className="fixed top-0 left-0 w-full h-full pointer-events-none z-[500]"
			style={{ background: 'transparent' }}
		/>
	);
};

export default CandleEffect;
