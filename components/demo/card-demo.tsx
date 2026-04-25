import { Button } from "@/components/ui/button"
import {
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  GlassCard,
} from "@/components/ui/glasscn/glass-card"
import { type FrostGlassVariant } from "@/components/ui/glasscn/glass-variants"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { GlassButton } from "../ui/glasscn/glass-button"

type CardDemoProps = {
  variant?: FrostGlassVariant
}

export function CardDemo({ variant = "clear" }: CardDemoProps) {
  return (
    <GlassCard variant={variant} className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>Login to your account</CardTitle>
        <CardDescription className={'text-foreground/80'}>
          Enter your email below to login to your account
        </CardDescription>
        <CardAction>
          <Button variant="link">Sign Up</Button>
        </CardAction>
      </CardHeader>
      <CardContent>
        <form>
          <div className="flex flex-col gap-6">
            <div className="grid gap-2">
              <Label htmlFor={`email-${variant}`}>Email</Label>
              <Input
                id={`email-${variant}`}
                type="email"
                placeholder="m@example.com"
                required
              />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor={`password-${variant}`}>Password</Label>
                <a
                  href="#"
                  className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                >
                  Forgot your password?
                </a>
              </div>
              <Input id={`password-${variant}`} type="password" required />
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex-col gap-2">
        <Button type="submit" className="w-full">
          Login
        </Button>
        <GlassButton className="w-full text-black dark:text-white">
          Login with Google
        </GlassButton>
      </CardFooter>
    </GlassCard>
  )
}
