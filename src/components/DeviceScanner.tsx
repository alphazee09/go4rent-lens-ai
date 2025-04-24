
import React, { useState, useRef } from 'react';
import { Camera, CheckCircle, X, Loader } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface DeviceScannerProps {
  onScan: (deviceId: string, scanType: 'barcode' | 'image') => void;
  scanType: 'barcode' | 'image';
}

const DeviceScanner: React.FC<DeviceScannerProps> = ({ onScan, scanType }) => {
  const [isScanning, setIsScanning] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [capturedImage, setCapturedImage] = useState<string | null>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { toast } = useToast();

  const startScanner = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ 
        video: { facingMode: 'environment' } 
      });
      
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        setIsScanning(true);
      }
    } catch (error) {
      toast({
        title: "Camera Error",
        description: "Unable to access your camera. Please check permissions.",
        variant: "destructive",
      });
    }
  };

  const stopScanner = () => {
    if (videoRef.current && videoRef.current.srcObject) {
      const tracks = (videoRef.current.srcObject as MediaStream).getTracks();
      tracks.forEach(track => track.stop());
      videoRef.current.srcObject = null;
    }
    setIsScanning(false);
  };

  const captureImage = () => {
    if (videoRef.current && canvasRef.current) {
      const video = videoRef.current;
      const canvas = canvasRef.current;
      const context = canvas.getContext('2d');
      
      if (context) {
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;
        context.drawImage(video, 0, 0, canvas.width, canvas.height);
        
        const imageData = canvas.toDataURL('image/jpeg');
        setCapturedImage(imageData);
        stopScanner();
        processImage(imageData);
      }
    }
  };

  const processImage = (imageData: string) => {
    setIsProcessing(true);
    
    // Simulate processing time
    setTimeout(() => {
      // For demo purposes, we'll just return a mock device ID
      const mockDeviceId = scanType === 'barcode' ? 'CAM12345-B' : 'sony-a7siii';
      onScan(mockDeviceId, scanType);
      setIsProcessing(false);
    }, 2000);
  };

  const resetScanner = () => {
    setCapturedImage(null);
    setIsProcessing(false);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <div className="relative flex-1 flex items-center justify-center bg-black">
        {isScanning ? (
          <>
            <video 
              ref={videoRef} 
              autoPlay 
              playsInline 
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 z-10">
              <div className="relative h-full">
                <div className="absolute inset-0 flex items-center justify-center">
                  {scanType === 'barcode' ? (
                    <div className="w-3/4 h-1/4 border-2 border-go4rent-turquoise/70 rounded-lg">
                      <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-go4rent-turquoise/70 animate-pulse-light"></div>
                    </div>
                  ) : (
                    <div className="w-4/5 h-3/5 border-2 border-dashed border-go4rent-turquoise/70 rounded-lg"></div>
                  )}
                </div>
              </div>
            </div>
          </>
        ) : capturedImage ? (
          <img src={capturedImage} alt="Captured" className="w-full h-full object-contain" />
        ) : (
          <div className="text-center p-8 flex flex-col items-center">
            <Camera size={64} className="text-go4rent-turquoise mb-4" />
            <h3 className="text-xl font-medium mb-2">
              {scanType === 'barcode' ? 'Scan Device Barcode' : 'Capture Device Image'}
            </h3>
            <p className="text-gray-400 text-sm mb-6">
              {scanType === 'barcode' 
                ? 'Position the barcode within the frame to scan' 
                : 'Take a clear photo of the device to identify it'
              }
            </p>
            <button onClick={startScanner} className="button-primary">
              Start Camera
            </button>
          </div>
        )}
      </div>

      <canvas ref={canvasRef} className="hidden" />
      
      {isScanning && (
        <div className="absolute bottom-24 left-0 right-0 flex justify-center p-4 z-20">
          <div className="flex space-x-4">
            <button 
              onClick={stopScanner} 
              className="bg-white/20 p-3 rounded-full"
            >
              <X size={24} className="text-white" />
            </button>
            <button 
              onClick={captureImage}
              className="bg-white p-4 rounded-full"
            >
              <div className="w-12 h-12 rounded-full border-4 border-go4rent-turquoise"></div>
            </button>
          </div>
        </div>
      )}
      
      {isProcessing && (
        <div className="absolute inset-0 bg-black/80 flex items-center justify-center z-30">
          <div className="text-center">
            <Loader size={40} className="text-go4rent-turquoise mx-auto animate-spin" />
            <p className="mt-4 text-white">
              {scanType === 'barcode' ? 'Reading barcode...' : 'Analyzing image...'}
            </p>
          </div>
        </div>
      )}
      
      {capturedImage && !isProcessing && (
        <div className="absolute bottom-24 left-0 right-0 flex justify-center p-4 z-20">
          <div className="flex space-x-4">
            <button 
              onClick={resetScanner} 
              className="bg-white/20 p-3 rounded-full"
            >
              <X size={24} className="text-white" />
            </button>
            <button 
              onClick={() => processImage(capturedImage)}
              className="bg-go4rent-turquoise p-3 rounded-full"
            >
              <CheckCircle size={24} className="text-go4rent-dark" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default DeviceScanner;
