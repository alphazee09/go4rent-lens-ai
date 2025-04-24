
import React, { useState, useRef } from 'react';
import { Brain, X, Camera, Upload, Loader } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface AIRecommendationProps {
  onRecommendation: (recommendations: any[]) => void;
}

const AIRecommendation: React.FC<AIRecommendationProps> = ({ onRecommendation }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [question, setQuestion] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [image, setImage] = useState<string | null>(null);
  const [showCamera, setShowCamera] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!question.trim() && !image) {
      toast({
        title: "Input Required",
        description: "Please describe your needs or upload an image",
        variant: "destructive",
      });
      return;
    }
    
    setIsLoading(true);
    
    // Simulate AI response with demo data
    setTimeout(() => {
      const mockRecommendations = [
        {
          id: 'canon-r5',
          name: 'Canon EOS R5',
          category: 'Mirrorless Camera',
          image: 'https://images.unsplash.com/photo-1516724562728-afc824a36e84',
          price: 55,
          currency: 'OMR',
          rating: 4.9,
          featured: true
        },
        {
          id: 'sony-a7siii',
          name: 'Sony A7S III',
          category: 'Mirrorless Camera',
          image: 'https://images.unsplash.com/photo-1588069356416-80ef5539c03a',
          price: 50,
          currency: 'OMR',
          rating: 4.8
        },
        {
          id: 'blackmagic-6k',
          name: 'Blackmagic Pocket 6K',
          category: 'Cinema Camera',
          image: 'https://images.unsplash.com/photo-1585155802409-129fb855414a',
          price: 65,
          currency: 'OMR',
          rating: 4.7
        },
        {
          id: 'canon-c70',
          name: 'Canon C70',
          category: 'Cinema Camera',
          image: 'https://images.unsplash.com/photo-1599631438183-bac2f789f2a7',
          price: 80,
          currency: 'OMR',
          rating: 4.6
        }
      ];
      
      onRecommendation(mockRecommendations);
      setIsLoading(false);
      setQuestion('');
      setImage(null);
      setIsOpen(false);
      
      toast({
        title: "Recommendations Ready!",
        description: "We've found some perfect equipment for your needs.",
      });
    }, 2000);
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const triggerFileInput = () => {
    fileInputRef.current?.click();
  };

  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ 
        video: { facingMode: 'environment' } 
      });
      
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        setShowCamera(true);
      }
    } catch (error) {
      toast({
        title: "Camera Error",
        description: "Unable to access your camera. Please check permissions.",
        variant: "destructive",
      });
    }
  };

  const captureImage = () => {
    if (videoRef.current) {
      const canvas = document.createElement('canvas');
      canvas.width = videoRef.current.videoWidth;
      canvas.height = videoRef.current.videoHeight;
      
      const context = canvas.getContext('2d');
      if (context) {
        context.drawImage(videoRef.current, 0, 0, canvas.width, canvas.height);
        const imageData = canvas.toDataURL('image/jpeg');
        setImage(imageData);
        stopCamera();
      }
    }
  };

  const stopCamera = () => {
    if (videoRef.current && videoRef.current.srcObject) {
      const tracks = (videoRef.current.srcObject as MediaStream).getTracks();
      tracks.forEach(track => track.stop());
      setShowCamera(false);
    }
  };

  const resetImage = () => {
    setImage(null);
    if (showCamera) {
      stopCamera();
    }
  };

  return (
    <>
      <button 
        onClick={() => setIsOpen(true)}
        className="flex items-center justify-center bg-secondary rounded-full p-3 fixed bottom-24 right-4 z-40 border border-go4rent-turquoise/40 turquoise-glow"
      >
        <Brain size={24} className="text-go4rent-turquoise" />
      </button>
      
      {isOpen && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="glass-effect rounded-xl w-full max-w-md animate-fade-in">
            <div className="flex items-center justify-between p-4 border-b border-gray-700">
              <div className="flex items-center">
                <Brain size={20} className="text-go4rent-turquoise mr-2" />
                <h3 className="font-medium text-white">AI Equipment Advisor</h3>
              </div>
              <button 
                onClick={() => {
                  setIsOpen(false);
                  resetImage();
                }}
                className="text-gray-400 hover:text-white"
              >
                <X size={20} />
              </button>
            </div>
            
            <div className="p-4">
              <p className="text-sm text-gray-300 mb-4">
                Describe what you want to shoot, your experience level, or upload an image of equipment similar to what you need.
              </p>
              
              <form onSubmit={handleSubmit}>
                {showCamera ? (
                  <div className="relative w-full rounded-lg overflow-hidden mb-3 bg-secondary aspect-video">
                    <video ref={videoRef} autoPlay playsInline className="w-full h-full object-cover" />
                    <div className="absolute bottom-2 left-0 right-0 flex justify-center space-x-3">
                      <button 
                        type="button"
                        onClick={stopCamera}
                        className="p-2 rounded-full bg-gray-800/70"
                      >
                        <X size={20} className="text-white" />
                      </button>
                      <button 
                        type="button"
                        onClick={captureImage}
                        className="p-2 rounded-full bg-white"
                      >
                        <div className="w-6 h-6 rounded-full border-2 border-go4rent-turquoise"></div>
                      </button>
                    </div>
                  </div>
                ) : image ? (
                  <div className="relative rounded-lg overflow-hidden mb-3">
                    <img src={image} alt="Uploaded" className="w-full object-cover rounded-lg" />
                    <button 
                      type="button"
                      onClick={resetImage}
                      className="absolute top-2 right-2 p-1 rounded-full bg-gray-800/70"
                    >
                      <X size={16} className="text-white" />
                    </button>
                  </div>
                ) : (
                  <div className="flex space-x-2 mb-3">
                    <button 
                      type="button"
                      onClick={startCamera}
                      className="flex-1 p-2 bg-secondary hover:bg-secondary/80 rounded-lg flex items-center justify-center"
                    >
                      <Camera size={18} className="mr-2 text-go4rent-turquoise" />
                      <span>Take Photo</span>
                    </button>
                    <button 
                      type="button"
                      onClick={triggerFileInput}
                      className="flex-1 p-2 bg-secondary hover:bg-secondary/80 rounded-lg flex items-center justify-center"
                    >
                      <Upload size={18} className="mr-2 text-go4rent-turquoise" />
                      <span>Upload Image</span>
                    </button>
                    <input 
                      type="file" 
                      ref={fileInputRef}
                      onChange={handleFileUpload}
                      accept="image/*"
                      className="hidden"
                    />
                  </div>
                )}
                
                <textarea 
                  className="w-full p-3 rounded-lg bg-secondary border border-gray-700 text-white resize-none focus:outline-none focus:ring-1 focus:ring-go4rent-turquoise"
                  placeholder="e.g., I need to shoot a wedding in low light conditions..."
                  rows={4}
                  value={question}
                  onChange={(e) => setQuestion(e.target.value)}
                />
                
                <button 
                  type="submit"
                  disabled={isLoading}
                  className="button-primary w-full mt-3 flex items-center justify-center"
                >
                  {isLoading ? (
                    <span className="flex items-center">
                      <Loader size={16} className="animate-spin mr-2 text-go4rent-dark" />
                      Processing...
                    </span>
                  ) : (
                    'Get Recommendations'
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AIRecommendation;
