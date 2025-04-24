
import React, { useState } from 'react';
import { File, Download, Circle, CheckCircle, X } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface ContractGeneratorProps {
  deviceId: string;
  deviceName: string;
  rentalDays: number;
  price: number;
  currency: string;
  onComplete: () => void;
}

const ContractGenerator: React.FC<ContractGeneratorProps> = ({
  deviceId,
  deviceName,
  rentalDays,
  price,
  currency,
  onComplete
}) => {
  const [signatureDrawing, setSignatureDrawing] = useState(false);
  const [signed, setSigned] = useState(false);
  const [terms, setTerms] = useState({
    damage: false,
    lateReturn: false,
    responsibility: false
  });
  const [deviceInfo, setDeviceInfo] = useState({
    model: 'Unknown Model',
    os: 'Unknown OS',
    ip: '192.168.1.xxx',
    location: 'Muscat, Oman'
  });
  const { toast } = useToast();

  const allTermsAccepted = Object.values(terms).every(value => value);
  const totalPrice = price * rentalDays;
  const vat = totalPrice * 0.05; // 5% VAT
  const totalWithVat = totalPrice + vat;
  const today = new Date().toLocaleDateString();
  const returnDate = new Date();
  returnDate.setDate(returnDate.getDate() + rentalDays);

  const mockCollectDeviceInfo = () => {
    // In a real app, this would collect actual device information
    setDeviceInfo({
      model: navigator.userAgent,
      os: navigator.platform,
      ip: '192.168.1.xxx',
      location: 'Muscat, Oman'
    });
  };
  
  const handleAcceptTerms = () => {
    if (allTermsAccepted && signed) {
      mockCollectDeviceInfo();
      toast({
        title: "Contract Signed!",
        description: "Your rental agreement has been processed successfully."
      });
      onComplete();
    } else {
      toast({
        title: "Missing Requirements",
        description: "Please accept all terms and add your signature.",
        variant: "destructive"
      });
    }
  };
  
  const handleDownload = () => {
    toast({
      title: "Contract Downloaded",
      description: "The rental agreement PDF has been saved to your device."
    });
  };

  const handleSignature = () => {
    setSignatureDrawing(!signatureDrawing);
    if (!signatureDrawing) {
      setSigned(false);
    }
  };

  const completeSignature = () => {
    setSignatureDrawing(false);
    setSigned(true);
  };

  return (
    <div className="p-4">
      <div className="glass-effect rounded-lg p-5">
        <div className="flex items-center justify-between border-b border-gray-700 pb-4 mb-4">
          <div className="flex items-center">
            <File size={24} className="text-go4rent-turquoise mr-2" />
            <h3 className="font-medium">Rental Agreement</h3>
          </div>
          <span className="text-sm text-gray-400">#{deviceId}</span>
        </div>
        
        <div className="space-y-4 mb-6">
          <div>
            <h4 className="text-sm text-gray-400">Equipment</h4>
            <p className="font-medium">{deviceName}</p>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div>
              <h4 className="text-sm text-gray-400">Rental Period</h4>
              <p className="font-medium">{rentalDays} day(s)</p>
            </div>
            <div>
              <h4 className="text-sm text-gray-400">Daily Rate</h4>
              <p className="font-medium">{currency} {price.toFixed(2)}</p>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div>
              <h4 className="text-sm text-gray-400">Checkout Date</h4>
              <p className="font-medium">{today}</p>
            </div>
            <div>
              <h4 className="text-sm text-gray-400">Return Date</h4>
              <p className="font-medium">{returnDate.toLocaleDateString()}</p>
            </div>
          </div>
          
          <div className="border-t border-gray-700 pt-4 mt-4">
            <div className="flex justify-between mb-2">
              <span>Subtotal</span>
              <span>{currency} {totalPrice.toFixed(2)}</span>
            </div>
            <div className="flex justify-between mb-2">
              <span>VAT (5%)</span>
              <span>{currency} {vat.toFixed(2)}</span>
            </div>
            <div className="flex justify-between font-medium">
              <span>Total</span>
              <span className="text-go4rent-turquoise">{currency} {totalWithVat.toFixed(2)}</span>
            </div>
          </div>
        </div>
        
        <div className="space-y-3 mb-6">
          <h3 className="font-medium mb-2">Terms & Conditions</h3>
          
          <div className="flex items-start">
            <div className="flex h-5 items-center mr-2">
              <input
                type="checkbox"
                checked={terms.damage}
                onChange={() => setTerms({...terms, damage: !terms.damage})}
                className="accent-go4rent-turquoise h-4 w-4"
              />
            </div>
            <p className="text-sm text-gray-300">
              I understand I am responsible for any damage to the equipment during the rental period.
            </p>
          </div>
          
          <div className="flex items-start">
            <div className="flex h-5 items-center mr-2">
              <input
                type="checkbox"
                checked={terms.lateReturn}
                onChange={() => setTerms({...terms, lateReturn: !terms.lateReturn})}
                className="accent-go4rent-turquoise h-4 w-4"
              />
            </div>
            <p className="text-sm text-gray-300">
              I agree to pay late fees of {currency} {(price * 1.5).toFixed(2)} per day if returned after the due date.
            </p>
          </div>
          
          <div className="flex items-start">
            <div className="flex h-5 items-center mr-2">
              <input
                type="checkbox"
                checked={terms.responsibility}
                onChange={() => setTerms({...terms, responsibility: !terms.responsibility})}
                className="accent-go4rent-turquoise h-4 w-4"
              />
            </div>
            <p className="text-sm text-gray-300">
              I confirm that I will use the equipment responsibly and for its intended purpose only.
            </p>
          </div>
        </div>
        
        <div className="mb-6">
          <div className="flex justify-between items-center mb-2">
            <h3 className="font-medium">Signature</h3>
            <button 
              onClick={handleSignature}
              className="text-sm text-go4rent-turquoise"
            >
              {signatureDrawing ? 'Cancel' : signed ? 'Redo' : 'Sign'}
            </button>
          </div>
          
          {signatureDrawing ? (
            <div className="relative border border-gray-700 rounded-lg h-40 bg-secondary/50 mb-2">
              <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                <p>Draw your signature here</p>
              </div>
              <div className="absolute bottom-2 right-2">
                <button 
                  onClick={completeSignature}
                  className="p-2 bg-go4rent-turquoise rounded-full"
                >
                  <CheckCircle size={20} className="text-go4rent-dark" />
                </button>
              </div>
            </div>
          ) : signed ? (
            <div className="border border-gray-700 rounded-lg h-40 bg-secondary/50 flex items-center justify-center mb-2">
              <p className="text-go4rent-turquoise italic text-xl">Signature Added</p>
            </div>
          ) : (
            <div className="border border-dashed border-gray-700 rounded-lg h-40 flex items-center justify-center mb-2">
              <p className="text-gray-400">Your signature will appear here</p>
            </div>
          )}
          
          <div className="text-xs text-gray-400">
            By signing, you agree to all terms and conditions of this rental agreement.
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-4">
          <button 
            onClick={handleDownload}
            className="button-outline flex items-center justify-center"
          >
            <Download size={16} className="mr-1" />
            Download
          </button>
          <button 
            onClick={handleAcceptTerms}
            disabled={!allTermsAccepted || !signed}
            className={`button-primary flex items-center justify-center ${!allTermsAccepted || !signed ? 'opacity-50' : ''}`}
          >
            Accept & Sign
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContractGenerator;
