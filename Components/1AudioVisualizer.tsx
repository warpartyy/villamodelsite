import React, { useEffect } from 'react';

const AudioVisualizerContent: React.FC = () => {
  useEffect(() => {
    const loadP5 = async () => {
      try {
        const p5Module = await import('p5');
        const p5 = p5Module.default;

        const sketch = (p: any) => {
          let audio: any;
          let fft: any;

          p.setup = () => {
            p.createCanvas(window.innerWidth, window.innerHeight);
            audio = new p5.AudioIn();
            fft = new p5.FFT();
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

        const canvasContainer = document.getElementById('p5-canvas');
        if (canvasContainer) {
          new p5(sketch, canvasContainer);
        } else {
          console.error('Canvas container not found');
        }
      } catch (error) {
        console.error('Error loading p5 or p5.sound:', error);
      }
    };

    if (typeof window !== 'undefined') {
      loadP5();
    }
  }, []);

  return (
    <div
      id="p5-canvas"
      style={{
        position: 'relative',
        width: '100%',
        height: '100%',
        zIndex: 10,
        backgroundColor: 'blue', // Optional: For debugging
      }}
    />
  );
};

export default AudioVisualizerContent;
