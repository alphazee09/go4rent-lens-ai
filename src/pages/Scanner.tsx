
import React, { useState } from 'react';
import { TabsContent, TabsList, TabsTrigger, Tabs } from "@/components/ui/tabs";
import { findDeviceByBarcode, getDeviceById } from '@/utils/deviceData';
import DeviceScanner from '@/components/DeviceScanner';
import ContractGenerator from '@/components/ContractGenerator';
import Navbar from '@/components/Navbar';
import { Link, useNavigate } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';
import { CameraIcon, Barcode } from 'lucide-react';

const Scanner = () => {
  const [activeTab, setActiveTab] = useState<'identify' | 'barcode'>('identify');
  const [scannedDevice, setScannedDevice] = useState<any | null>(null);
  const [showContract, setShowContract] = useState(false);
  const [rentalDays, setRentalDays] = useState(1);
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleDeviceScan = (deviceId: string, scanType: 'barcode' | 'image') => {
    let device;
    
    if (scanType === 'barcode') {
      device = findDeviceByBarcode(deviceId);
      if (device) {
        setScannedDevice(device);
        setShowContract(true);
      } else {
        toast({
          title: "Barcode Not Found",
          description: "We couldn't find a device matching this barcode.",
          variant: "destructive"
        });
      }
    } else {
      device = getDeviceById(deviceId);
      if (device) {
        setScannedDevice(device);
        navigate(`/equipment/${deviceId}`);
      } else {
        toast({
          title: "Device Not Recognized",
          description: "We couldn't identify the device in the image.",
          variant: "destructive"
        });
      }
    }
  };

  const handleContractComplete = () => {
    setShowContract(false);
    setScannedDevice(null);
    toast({
      title: "Rental Complete!",
      description: "Your equipment is now ready to use. Enjoy!",
    });
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-go4rent-dark">
      {showContract ? (
        <div className="min-h-screen bg-go4rent-dark pt-4">
          <div className="p-4 pb-0">
            <h1 className="text-xl font-semibold mb-1">Rental Agreement</h1>
            <p className="text-gray-400 text-sm mb-4">Review and sign to complete your rental</p>
          </div>
          
          <ContractGenerator 
            deviceId={scannedDevice.id}
            deviceName={scannedDevice.name}
            rentalDays={rentalDays}
            price={scannedDevice.price}
            currency={scannedDevice.currency}
            onComplete={handleContractComplete}
          />
        </div>
      ) : (
        <Tabs 
          defaultValue={activeTab} 
          onValueChange={(value) => setActiveTab(value as 'identify' | 'barcode')}
          className="w-full"
        >
          <div className="pt-4 px-4">
            <h1 className="text-xl font-semibold mb-1">Scan Device</h1>
            <p className="text-gray-400 text-sm mb-4">
              {activeTab === 'identify' 
                ? 'Take a photo of any camera or equipment to identify it' 
                : 'Scan the barcode on your rental equipment'
              }
            </p>
            
            <TabsList className="grid grid-cols-2 mb-4 bg-secondary">
              <TabsTrigger value="identify" className="flex items-center">
                <CameraIcon size={16} className="mr-2" />
                Identify Device
              </TabsTrigger>
              <TabsTrigger value="barcode" className="flex items-center">
                <Barcode size={16} className="mr-2" />
                Scan Barcode
              </TabsTrigger>
            </TabsList>
          </div>
          
          <TabsContent value="identify" className="m-0">
            <DeviceScanner onScan={handleDeviceScan} scanType="image" />
          </TabsContent>
          <TabsContent value="barcode" className="m-0">
            <DeviceScanner onScan={handleDeviceScan} scanType="barcode" />
          </TabsContent>
        </Tabs>
      )}
      
      <Navbar />
    </div>
  );
};

export default Scanner;
