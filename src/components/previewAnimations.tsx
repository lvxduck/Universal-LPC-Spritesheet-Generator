import { useEffect, useRef } from 'react';
import { animInfo } from '../configs/data';
import { getTile } from '../utils/pixelsUtils';
import { useStore } from './../store'
import PreviewSelect from './previewSelector';

const PreviewAnimations = () => {
  const animType = useStore((state) => state.animType);
  const canvasRender = useRef<HTMLCanvasElement | null>(null);
  const imageData = useStore(state => state.imageData);

  useEffect(() => {
    const canvas = canvasRender.current;
    let tileX = 0;
    const tileY = animInfo[animType]?.index;
    let loop = setInterval(function () {
      if (canvas && imageData) {
        const context = canvas.getContext('2d');
        context?.putImageData(getTile({ tileX: tileX, tileY: tileY, imageData: imageData }), 0, 0);
        context?.putImageData(getTile({ tileX: tileX, tileY: tileY+1, imageData: imageData }), 0, 64);
        context?.putImageData(getTile({ tileX: tileX, tileY: tileY+2, imageData: imageData }), 0, 128);
        context?.putImageData(getTile({ tileX: tileX, tileY: tileY+3, imageData: imageData }), 0, 192);
      }
      tileX += 1;
      if (tileX >= animInfo[animType]?.length) tileX = 0;
    }, 100);
    return () => {
      clearInterval(loop);
    }
  }, [animType, imageData])

  return (
    <div className="flex">
      <div className="flex column justify-center">
        <PreviewSelect />
        <button>Dowload</button>
      </div>
      <canvas ref={ canvasRender } height={ 256 } width={ 128 } />
    </div>
  )
}

export default PreviewAnimations
