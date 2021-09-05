import { useEffect, useRef } from "react";
import { animInfo } from "../configs/data";
import { useStore } from "../store";
import { cropImage, getTile } from "../utils/pixelsUtils";

const Spritesheet = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const setImageData = useStore(state => state.setImageData);
  const setImageDataURL = useStore(state => state.setImageDataURL);
  const animType = useStore((state) => state.animType);
  const imageData = useStore(state => state.imageData);

  useEffect(() => {
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');  
    const imageObj1 = new Image();
    
    imageObj1.crossOrigin = 'Anonymous';
    imageObj1.src = "https://res.cloudinary.com/leduck/image/upload/v1630768065/Universal%20Sprite%20Sheet/body/male/light_n0zq1q.png"
    imageObj1.onload = function() {
      canvas.width=imageObj1.width;
      canvas.height=imageObj1.height;
      context?.drawImage(imageObj1, 0, 0, imageObj1.width, imageObj1.height);
      let imageData = context?.getImageData(0, 0, canvas.width, canvas.height);
      setImageData(imageData);
      setImageDataURL(canvas.toDataURL());
    };
  }, [setImageData, setImageDataURL])

  useEffect(() => {
    const context = canvasRef.current?.getContext('2d');
    const tileY = animInfo[animType]?.index;
    imageData
    && context?.putImageData(cropImage({ x: 0, y: tileY*64, width: imageData.width, height: 64*4, imageData: imageData }), 0, 0);
  }, [animType, imageData])

  return (
    <div className="inline-block" style={{width:'600px'}}>
      <canvas ref={canvasRef} height={256} width={640}/>
    </div>
  )
}


export default Spritesheet
