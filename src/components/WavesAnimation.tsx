import { useEffect, useRef } from 'react';

interface WavesCanvasProps {
  waveCount?: number;
  amplitude?: number;
  baseSpeed?: number;
  waveSpacing?: number;
  baseColor?: number[];
  lineWidth?: number;
  direction?: 'left' | 'right';
  leftOffset?: number;
  rightOffset?: number;
  className?: string;
}

export default function WavesAnimation({ 
  waveCount = 9,
  amplitude = 50,
  baseSpeed = 0.005,
  waveSpacing = 30,
  baseColor = [0, 160, 255],
  lineWidth = 1,
  direction = 'left',
  leftOffset = 0,
  rightOffset = 0,
  className = ''
}: WavesCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const wavesInstanceRef = useRef<any>(null);

  useEffect(() => {
    class WavesCanvas {
      canvas: HTMLCanvasElement;
      ctx!: CanvasRenderingContext2D;
      settings: any;
      waves: any[] = [];
      animationFrame: number = 0;
      Wave: any;

      constructor(elm: HTMLCanvasElement, options = {}) {
        this.canvas = elm;
        if (!this.canvas) return;
        
        const data = this.canvas.dataset;

        this.settings = {
          waveCount: parseInt(data.waveCount as string) || (options as any).waveCount || 9,
          amplitude: parseInt(data.amplitude as string) || (options as any).amplitude || 50,
          baseSpeed: parseFloat(data.baseSpeed as string) || (options as any).baseSpeed || 0.005,
          waveSpacing: parseInt(data.waveSpacing as string) || (options as any).waveSpacing || 30,
          baseColor: data.baseColor ? (data.baseColor as string).split(',').map(Number) : (options as any).baseColor || [0, 160, 255],
          lineWidth: parseInt(data.lineWidth as string) || (options as any).lineWidth || 1,
          direction: data.direction || (options as any).direction || "left",
          leftOffset: data.leftOffset || (options as any).leftOffset || 0,
          rightOffset: data.rightOffset || (options as any).rightOffset || 0,
        };

        this.ctx = this.canvas.getContext("2d")!;
        this.waves = [];
        this.animationFrame = 0;

        this.Wave = class {
          index: number;
          phase: number;
          settings: any;
          canvas: HTMLCanvasElement;
          color: string;
          yOffset: number;

          constructor(index: number, settings: any, canvas: HTMLCanvasElement) {
            this.index = index;
            this.phase = index * 0.3;
            this.settings = settings;
            this.canvas = canvas;
            this.color = `rgba(${settings.baseColor[0]}, ${
              settings.baseColor[1]
            }, ${settings.baseColor[2]}, ${1 - (this.index / this.settings.waveCount)})`;
            this.yOffset = 0;
            this.updateOffset();
          }

          updateOffset() {
            const totalHeight =
              (this.settings.waveCount - 1) * this.settings.waveSpacing;
            const centerOffset = (this.canvas.height - totalHeight) / 2;
            this.yOffset = centerOffset + this.index * this.settings.waveSpacing;
          }

          draw(ctx: CanvasRenderingContext2D) {
            ctx.beginPath();
            ctx.strokeStyle = this.color;
            ctx.lineWidth = this.settings.lineWidth;

            // Initial point with leftOffset as percentage
            let firstX = 0;
            const leftOffsetPx =
              (this.settings.leftOffset / 100) * this.canvas.height;
            let firstY =
              this.yOffset +
              leftOffsetPx +
              Math.sin(firstX * 0.005 + this.phase) * this.settings.amplitude +
              Math.cos(firstX * 0.002 + this.phase) * this.settings.amplitude * 0.5;
            ctx.moveTo(firstX, firstY);

            // Draw wave with interpolation between leftOffset and rightOffset as percentage
            for (let x = 0; x <= this.canvas.width; x += 20) {
              const t = x / this.canvas.width; // Normalized position (0 - start, 1 - end)
              const leftOffsetPx =
                (this.settings.leftOffset / 100) * this.canvas.height;
              const rightOffsetPx =
                (this.settings.rightOffset / 100) * this.canvas.height;
              const offset = leftOffsetPx * (1 - t) + rightOffsetPx * t; // Interpolation
              const y =
                this.yOffset +
                offset +
                Math.sin(x * 0.005 + this.phase) * this.settings.amplitude +
                Math.cos(x * 0.002 + this.phase) * this.settings.amplitude * 0.5;
              ctx.lineTo(x, y);
            }

            ctx.stroke();
          }

          update() {
            const speed =
              this.settings.direction === "right"
                ? -this.settings.baseSpeed
                : this.settings.baseSpeed;
            this.phase += speed;
          }
        };

        this.init();
      }

      resizeCanvas = () => {
        const rect = this.canvas.getBoundingClientRect();
        this.canvas.width = rect.width;
        this.canvas.height = rect.height;
        this.waves.forEach((wave) => wave.updateOffset());
      }

      init() {
        window.addEventListener("resize", this.resizeCanvas);
        this.resizeCanvas();

        for (let i = 0; i < this.settings.waveCount; i++) {
          this.waves.push(new this.Wave(i, this.settings, this.canvas));
        }

        this.animate();
      }

      animate = () => {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        this.waves.forEach((wave) => {
          wave.updateOffset();
          wave.update();
          wave.draw(this.ctx);
        });

        this.animationFrame = requestAnimationFrame(this.animate);
      }

      destroy() {
        window.removeEventListener("resize", this.resizeCanvas);
        this.waves = [];
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        cancelAnimationFrame(this.animationFrame);
      }

      updateSettings(newSettings: any) {
        this.settings = { ...this.settings, ...newSettings };
        this.waves = [];
        for (let i = 0; i < this.settings.waveCount; i++) {
          this.waves.push(new this.Wave(i, this.settings, this.canvas));
        }
      }
    }

    if (canvasRef.current) {
      const options = {
        waveCount,
        amplitude,
        baseSpeed,
        waveSpacing,
        baseColor,
        lineWidth,
        direction,
        leftOffset,
        rightOffset
      };
      
      wavesInstanceRef.current = new WavesCanvas(canvasRef.current, options);
    }

    return () => {
      if (wavesInstanceRef.current) {
        wavesInstanceRef.current.destroy();
      }
    };
  }, [waveCount, amplitude, baseSpeed, waveSpacing, baseColor, lineWidth, direction, leftOffset, rightOffset]);

  return (
    <canvas
      ref={canvasRef}
      className={`waves-canvas ${className}`}
      data-waves="true"
    />
  );
}