
import React, { useState } from 'react';
import { Brain, X } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface AIRecommendationProps {
  onRecommendation: (recommendations: any[]) => void;
}

const AIRecommendation: React.FC<AIRecommendationProps> = ({ onRecommendation }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [question, setQuestion] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!question.trim()) return;
    
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
        }
      ];
      
      onRecommendation(mockRecommendations);
      setIsLoading(false);
      setQuestion('');
      setIsOpen(false);
      
      toast({
        title: "Recommendations Ready!",
        description: "We've found some perfect equipment for your needs.",
      });
    }, 2000);
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
                onClick={() => setIsOpen(false)}
                className="text-gray-400 hover:text-white"
              >
                <X size={20} />
              </button>
            </div>
            
            <div className="p-4">
              <p className="text-sm text-gray-300 mb-4">
                Describe what you want to shoot, your experience level, or any specific requirements, and I'll recommend the best equipment for your needs.
              </p>
              
              <form onSubmit={handleSubmit}>
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
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-go4rent-dark" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
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
