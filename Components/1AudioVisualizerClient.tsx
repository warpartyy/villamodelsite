import React, { useRef, useEffect } from 'react';
import dynamic from 'next/dynamic';

const AudioVisualizerClient: React.FC = () => {
  const sketchRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const loadP5 = async () => {
      const p5 = (await import('p5')).default;
      await import('p5/lib/addons/p5.sound'); // Import p5.sound

      const sketch = (p: any) => {
        let audio: any;
        let fft: any;

        p.setup = () => {
          p.createCanvas(p.windowWidth, p.windowHeight);
          p.colorMode(p.HSB, 255);
          audio = new p.AudioIn();
          fft = new p.FFT();
          audio.start();
          fft.setInput(audio);
        };

        p.draw = () => {
          p.background(0);
          let spectrum = fft.analyze();
          p.noStroke();
          for (let i = 0; i < spectrum.length; i++) {
            let x = p.map(i, 0, spectrum.length, 0, p.width);
            let h = -p.map(spectrum[i], 0, 255, 0, p.height);
            p.fill(i, 255, 255);
            p.rect(x, p.height, p.width / spectrum.length, h);
          }
        };

        p.windowResized = () => {
          p.resizeCanvas(p.windowWidth, p.windowHeight);
        };
      };

      if (sketchRef.current) {
        new p5(sketch, sketchRef.current);
      }
    };

    loadP5();

    // Cleanup p5 instance on component unmount
    return () => {
      if (sketchRef.current) {
        sketchRef.current.innerHTML = '';
      }
    };
  }, []);

  return <div ref={sketchRef} style={{ width: '100%', height: '100%' }} />;
};

export default dynamic(() => Promise.resolve(AudioVisualizerClient), { ssr: false });
