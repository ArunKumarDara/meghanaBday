import { Cake } from "lucide-react";

export default function LoadingSpinner() {
  return (
    <div className="flex justify-center items-center h-screen">
      <Cake className="h-12 w-12 animate-spin text-primary" />
    </div>
  );
}
