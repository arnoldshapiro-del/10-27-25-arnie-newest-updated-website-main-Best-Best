import { AlertCircle } from "lucide-react";

const EmergencyDisclaimer = () => {
  return (
    <div className="bg-muted/30 border-t border-border py-6 mt-8">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground max-w-3xl mx-auto">
          <AlertCircle className="h-4 w-4 flex-shrink-0" />
          <p className="text-center">
            If you're experiencing a psychiatric emergency, call 911 or go to your nearest emergency room.
          </p>
        </div>
      </div>
    </div>
  );
};

export default EmergencyDisclaimer;
