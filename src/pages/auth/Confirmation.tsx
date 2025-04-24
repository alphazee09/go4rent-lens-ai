
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle } from 'lucide-react';

const Confirmation = () => {
  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-go4rent-dark">
      <div className="w-full max-w-md">
        <Link to="/" className="block mb-6 mx-auto text-center">
          <img 
            src="/lovable-uploads/b1966c7b-cd0c-4480-ab0c-f9b823e53984.png" 
            alt="Go4Rent Logo" 
            className="h-12 mx-auto"
          />
        </Link>
        
        <Card className="bg-gray-900 border-gray-800">
          <CardHeader className="space-y-1">
            <div className="mx-auto bg-go4rent-turquoise/20 p-2 rounded-full w-16 h-16 flex items-center justify-center">
              <CheckCircle size={32} className="text-go4rent-turquoise" />
            </div>
            <CardTitle className="text-2xl font-bold text-center mt-4">Check your email</CardTitle>
          </CardHeader>
          
          <CardContent className="text-center">
            <p className="text-gray-400 mb-6">
              We've sent you a verification link to your email address. 
              Please check your inbox and click the link to complete your registration.
            </p>
            
            <div className="space-y-4">
              <Button 
                variant="outline"
                className="w-full border-gray-700 text-gray-300 hover:bg-gray-800"
                asChild
              >
                <Link to="/auth/login">
                  Return to login
                </Link>
              </Button>
              
              <div className="text-sm text-gray-500">
                Didn't receive the email? Check your spam folder or 
                <Button variant="link" className="text-go4rent-turquoise p-0 h-auto mx-1">
                  resend the verification link
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Confirmation;
