
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { Loader2 } from "lucide-react";

interface PaymentSectionProps {
  onPaymentComplete: () => void;
  onSkipPayment?: () => void;
}

const PaymentSection = ({ onPaymentComplete, onSkipPayment }: PaymentSectionProps) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvc, setCvc] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    
    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false);
      onPaymentComplete();
    }, 2000);
  };

  return (
    <div className="py-6">
      <div className="text-center mb-8">
        <h3 className="text-lg font-medium text-slate-900 mb-2">Analysis Complete!</h3>
        <p className="text-slate-500">
          Your report is ready. You can complete the payment to access your full analysis or continue with the free version.
        </p>
      </div>
      
      <div className="bg-blue-50 rounded-lg p-4 border border-blue-100 mb-8">
        <div className="flex justify-between items-center">
          <div>
            <h4 className="font-medium text-slate-900">Website Design Analysis Report</h4>
            <p className="text-sm text-slate-500">One-time purchase with lifetime access</p>
          </div>
          <div className="text-xl font-bold text-slate-900">$49</div>
        </div>
      </div>
      
      {onSkipPayment && (
        <div className="mb-6 text-center">
          <Button 
            variant="outline"
            onClick={onSkipPayment}
            className="w-full mb-4"
          >
            Continue with Free Version
          </Button>
          <p className="text-sm text-slate-500">
            The free version includes basic analysis results.
          </p>
        </div>
      )}
      
      <div className="relative mb-6">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t border-slate-200"></span>
        </div>
        <div className="relative flex justify-center text-sm">
          <span className="px-2 bg-white text-slate-500">Or Pay for Premium Report</span>
        </div>
      </div>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 gap-6">
          <div>
            <Label htmlFor="name">Full Name</Label>
            <Input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="John Smith"
              required
            />
          </div>
          
          <div>
            <Label htmlFor="email">Email Address</Label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="john@example.com"
              required
            />
          </div>
          
          <div>
            <Label htmlFor="card-number">Card Number</Label>
            <Input
              id="card-number"
              type="text"
              value={cardNumber}
              onChange={(e) => setCardNumber(e.target.value)}
              placeholder="4242 4242 4242 4242"
              required
            />
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="expiry">Expiry Date</Label>
              <Input
                id="expiry"
                type="text"
                value={expiry}
                onChange={(e) => setExpiry(e.target.value)}
                placeholder="MM/YY"
                required
              />
            </div>
            
            <div>
              <Label htmlFor="cvc">CVC</Label>
              <Input
                id="cvc"
                type="text"
                value={cvc}
                onChange={(e) => setCvc(e.target.value)}
                placeholder="123"
                required
              />
            </div>
          </div>
        </div>
        
        <Button type="submit" className="w-full" disabled={isProcessing}>
          {isProcessing ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Processing...
            </>
          ) : (
            "Pay $49 and Get Your Report"
          )}
        </Button>
        
        <p className="text-center text-sm text-slate-500">
          Secure payment processed by Stripe. Your information is never stored.
        </p>
      </form>
    </div>
  );
};

export default PaymentSection;
