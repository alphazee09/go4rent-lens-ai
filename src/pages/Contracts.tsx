
import React, { useState } from 'react';
import { FileText, HelpCircle, CheckCircle, Camera, Loader, ChevronRight } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { useAuth } from '@/contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import DeviceScanner from '@/components/DeviceScanner';
import ContractGenerator from '@/components/ContractGenerator';
import Navbar from '@/components/Navbar';
import { findDeviceByBarcode } from '@/utils/deviceData';

const Contracts = () => {
  const [step, setStep] = useState<'guide' | 'scan' | 'contract'>('guide');
  const [scannedDevice, setScannedDevice] = useState<any | null>(null);
  const [rentalDays, setRentalDays] = useState(1);
  const [isSuccess, setIsSuccess] = useState(false);
  const { toast } = useToast();
  const { user } = useAuth();
  const navigate = useNavigate();
  
  const handleDeviceScan = (deviceId: string) => {
    const device = findDeviceByBarcode(deviceId);
    
    if (device) {
      setScannedDevice(device);
      setStep('contract');
    } else {
      toast({
        title: "Device Not Found",
        description: "We couldn't find this device in our system. Please try again.",
        variant: "destructive"
      });
    }
  };

  const handleContractComplete = () => {
    setIsSuccess(true);
    
    setTimeout(() => {
      setIsSuccess(false);
      setStep('guide');
      setScannedDevice(null);
      navigate('/');
    }, 3000);
  };

  const renderGuide = () => (
    <div className="px-4 py-6">
      <div className="glass-effect rounded-lg p-5 mb-5">
        <div className="flex items-center mb-4">
          <HelpCircle size={24} className="text-go4rent-turquoise mr-3" />
          <h2 className="text-xl font-medium">How It Works</h2>
        </div>
        
        <div className="space-y-6">
          <div className="flex">
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-go4rent-turquoise flex items-center justify-center mr-3">
              <span className="font-medium text-go4rent-dark">1</span>
            </div>
            <div>
              <h3 className="font-medium mb-1">Scan Your Device</h3>
              <p className="text-sm text-gray-300">
                Scan the barcode on your rented equipment to verify it.
              </p>
            </div>
          </div>
          
          <div className="flex">
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-go4rent-turquoise flex items-center justify-center mr-3">
              <span className="font-medium text-go4rent-dark">2</span>
            </div>
            <div>
              <h3 className="font-medium mb-1">Review Contract</h3>
              <p className="text-sm text-gray-300">
                Review the rental terms and conditions for your equipment.
              </p>
            </div>
          </div>
          
          <div className="flex">
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-go4rent-turquoise flex items-center justify-center mr-3">
              <span className="font-medium text-go4rent-dark">3</span>
            </div>
            <div>
              <h3 className="font-medium mb-1">Sign Agreement</h3>
              <p className="text-sm text-gray-300">
                Your device information will be collected as a digital signature.
              </p>
            </div>
          </div>
          
          <div className="flex">
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-go4rent-turquoise flex items-center justify-center mr-3">
              <span className="font-medium text-go4rent-dark">4</span>
            </div>
            <div>
              <h3 className="font-medium mb-1">Enjoy Your Rental</h3>
              <p className="text-sm text-gray-300">
                Once completed, you can start using your equipment right away!
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="glass-effect rounded-lg p-5">
        <h3 className="font-medium mb-3">Device Verification Required</h3>
        <p className="text-sm text-gray-300 mb-4">
          For verification purposes, we'll collect the following device information:
        </p>
        
        <ul className="text-sm text-gray-300 space-y-2 mb-4">
          <li className="flex items-center">
            <CheckCircle size={16} className="text-go4rent-turquoise mr-2" /> Device Model
          </li>
          <li className="flex items-center">
            <CheckCircle size={16} className="text-go4rent-turquoise mr-2" /> Operating System
          </li>
          <li className="flex items-center">
            <CheckCircle size={16} className="text-go4rent-turquoise mr-2" /> IP Address
          </li>
          <li className="flex items-center">
            <CheckCircle size={16} className="text-go4rent-turquoise mr-2" /> Location Data
          </li>
        </ul>
        
        <button 
          onClick={() => setStep('scan')}
          className="button-primary w-full flex items-center justify-center"
        >
          Continue to Scanning
          <ChevronRight size={16} className="ml-1" />
        </button>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-go4rent-dark">
      <div className="pt-4 px-4">
        <h1 className="text-xl font-semibold mb-1">Equipment Contract</h1>
        <p className="text-gray-400 text-sm mb-4">
          {step === 'guide' 
            ? 'Learn how to sign your equipment rental contract' 
            : step === 'scan'
            ? 'Scan the barcode on your rental equipment'
            : 'Review and sign your rental agreement'
          }
        </p>
      </div>
      
      {isSuccess ? (
        <div className="fixed inset-0 bg-black/90 flex flex-col items-center justify-center z-50 animate-fade-in">
          <div className="text-center p-6">
            <div className="w-24 h-24 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-6">
              <CheckCircle size={48} className="text-green-500" />
            </div>
            <h2 className="text-2xl font-bold mb-4">Contract Signed!</h2>
            <p className="text-lg text-gray-300 mb-8">Your rental agreement is now active</p>
            <div className="w-full max-w-sm h-1 bg-gray-800 rounded-full overflow-hidden">
              <div className="h-full bg-go4rent-turquoise animate-pulse" style={{width: '100%'}}></div>
            </div>
          </div>
        </div>
      ) : step === 'guide' ? (
        renderGuide()
      ) : step === 'scan' ? (
        <DeviceScanner onScan={handleDeviceScan} scanType="barcode" />
      ) : (
        <div className="min-h-screen bg-go4rent-dark pt-4">
          <div className="p-4 pb-0">
            <h1 className="text-xl font-semibold mb-1">Rental Agreement</h1>
            <p className="text-gray-400 text-sm mb-4">Review and sign to complete your rental</p>
          </div>
          
          <ContractGenerator 
            deviceId={scannedDevice?.id}
            deviceName={scannedDevice?.name}
            rentalDays={rentalDays}
            price={scannedDevice?.price}
            currency={scannedDevice?.currency}
            onComplete={handleContractComplete}
          />
        </div>
      )}
      
      <Navbar />
    </div>
  );
};

export default Contracts;
