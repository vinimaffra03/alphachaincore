import { useEffect, useRef, useState } from 'react';

interface Snowflake {
	id: number;
	x: number;
	y: number;
	size: number;
	speed: number;
	opacity: number;
	type: 'snow' | 'bitcoin';
}

const SnowEffect = () => {
	const canvasRef = useRef<HTMLCanvasElement>(null);
	const animationRef = useRef<number>();
	const [snowflakes, setSnowflakes] = useState<Snowflake[]>([]);

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

		// Criar flocos
		const flakes: Snowflake[] = [];
		const totalFlakes = 80; // Mais flocos para efeito mais intenso
		
		for (let i = 0; i < totalFlakes; i++) {
			flakes.push({
				id: i,
				x: Math.random() * window.innerWidth,
				y: Math.random() * window.innerHeight, // Começa do meio da tela
				size: Math.random() * 1.5 + 0.5, // Tamanhos menores (0.5-2px)
				speed: Math.random() * 3 + 1, // Velocidades mais rápidas (1-4px)
				opacity: Math.random() * 0.4 + 0.1, // Opacidade mais baixa (0.1-0.5)
				type: Math.random() > 0.6 ? 'bitcoin' : 'snow' // Mais moedinhas (40% bitcoin, 60% neve)
			});
		}
		setSnowflakes(flakes);

		// Animação
		const animate = () => {
			ctx.clearRect(0, 0, canvas.width, canvas.height);
			
			flakes.forEach((flake) => {
				// Atualizar posição
				flake.y += flake.speed;
				
				// Resetar se sair da tela
				if (flake.y > canvas.height) {
					flake.y = -10;
					flake.x = Math.random() * canvas.width;
				}
				
				// Desenhar floco
				ctx.save();
				ctx.globalAlpha = flake.opacity;
				
				if (flake.type === 'bitcoin') {
					// Desenhar moedinha de bitcoin clara e pequena
					ctx.fillStyle = '#9CA3AF'; // Azul claro
					ctx.font = `bold ${flake.size * 8}px Arial`; // Fonte proporcional ao tamanho menor
					ctx.textAlign = 'center';
					ctx.textBaseline = 'middle';
					ctx.fillText('₿', flake.x, flake.y);
				} else {
					// Desenhar floco de neve claro
					ctx.fillStyle = 'rgba(200, 200, 200, 0.8)'; // Cinza muito claro
					ctx.beginPath();
					ctx.arc(flake.x, flake.y, flake.size, 0, Math.PI * 2);
					ctx.fill();
				}
				
				ctx.restore();
			});
			
			animationRef.current = requestAnimationFrame(animate);
		};

		animate();

		return () => {
			window.removeEventListener('resize', resizeCanvas);
			if (animationRef.current) {
				cancelAnimationFrame(animationRef.current);
			}
		};
	}, []);

	return (
		<canvas
			ref={canvasRef}
			className="fixed top-0 left-0 w-full h-full pointer-events-none z-[1000]"
			style={{ background: 'transparent' }}
		/>
	);
};

export default SnowEffect;
