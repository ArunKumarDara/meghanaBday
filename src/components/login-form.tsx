import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useNavigate } from "react-router"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Terminal } from "lucide-react"
import React, { useState } from "react"


export function LoginForm({
  className,
  ...props
}: React.ComponentProps<"form">) {
  const navigate = useNavigate();
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setError(null);
    const formData = new FormData(e.currentTarget);
    const userName = formData.get("userName") as string;
    const password = formData.get("password") as string;

    if (userName === "Meghana@2398" && password === "Meghana@2398") {
      localStorage.setItem("isAuthenticated", "true");
      navigate("/meghana");
    } else {
      setError("Invalid credentials! Please try again.");
    }
  }
  return (
    <form className={cn("flex flex-col gap-6", className)} {...props} onSubmit={handleSubmit}>
      <div className="flex flex-col items-center gap-2 text-center">
        <h1 className="text-2xl font-bold">Login to your account</h1>
        <p className="text-muted-foreground text-sm text-balance">
          Enter Secret userName and password to login
        </p>
      </div>
      {error && (
        <Alert variant="destructive" className="flex items-center gap-2">
          <Terminal className="h-4 w-4" />
          <div>
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>{error}</AlertDescription>
          </div>
        </Alert>
      )}
      <div className="grid gap-6">
        <div className="grid gap-3">
          <Label htmlFor="userName">User Name</Label>
          <Input id="userName" type="text" name="userName" placeholder="User name" required />
        </div>
        <div className="grid gap-3">
          <div className="flex items-center">
            <Label htmlFor="password">Password</Label>
          </div>
          <Input id="password" type="password" name="password" required placeholder="Password" />
        </div>
        <Button type="submit" className="w-full cursor-pointer">
          Login
        </Button>
      </div>
    </form>
  )
}
