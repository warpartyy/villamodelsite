import React, { useEffect } from 'react';

const AudioVisualizerContent: React.FC = () => {
  useEffect(() => {
    const loadP5 = async () => {
      try {
        // Dynamically import p5 and p5.sound
        const p5Module = await import('p5');
        const p5 = p5Module.default;
        await import('p5/lib/addons/p5.sound');

        // Define the p5 sketch
        const sketch = (p: any) => {
          let audio: any;
          let fft: any;

          p.setup = () => {
            console.log('p5 setup');
            p.createCanvas(p.windowWidth, p.windowHeight);
            p.colorMode(p.HSB, 255);
            audio = new p.AudioIn();
            fft = new p.FFT();
            audio.start();
            fft.setInput(audio);
          };

          p.draw = () => {
            p.background(0); // Black background
            let spectrum = fft.analyze();
            p.noStroke();
            for (let i = 0; i < spectrum.length; i++) {
              let x = p.map(i, 0, spectrum.length, 0, p.width);
              let h = -p.map(spectrum[i], 0, 255, 0, p.height);
              p.fill(200, 100, 255); // Blue color
              p.rect(x, p.height, p.width / spectrum.length, h);
            }
          };

          p.windowResized = () => {
            p.resizeCanvas(p.windowWidth, p.windowHeight);
          };
        };

        // Create a new p5 instance
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

    // Ensure this only runs on the client side
    if (typeof window !== 'undefined') {
      loadP5();
    }
  }, []);

  return <div id="p5-canvas" style={{ width: '100%', height: '100%' }} />;
};

export default AudioVisualizerContent;
