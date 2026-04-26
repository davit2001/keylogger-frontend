"use client";
import { useActionState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { loginAction, type LoginResult } from "@/app/actions/auth";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { LoaderCircle, LockKeyhole } from "lucide-react";

export default function LoginForm() {
  const router = useRouter();
  const [state, formAction, pending] = useActionState<
    LoginResult | null,
    FormData
  >(loginAction, null);

  useEffect(() => {
    if (state?.ok) {
      router.replace("/");
    }
  }, [state, router]);

  const error = state && !state.ok ? state.error : null;

  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <div className="flex items-center gap-2 text-sky-600">
          <LockKeyhole className="size-4" />
          <CardTitle className="font-mono tracking-tight">
            Keylogger access
          </CardTitle>
        </div>
        <CardDescription>
          Sign in with your administrator credentials.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form action={formAction} className="flex flex-col gap-4">
          <div className="grid gap-1.5">
            <Label htmlFor="username">Username</Label>
            <Input
              id="username"
              name="username"
              autoComplete="username"
              required
              disabled={pending}
            />
          </div>
          <div className="grid gap-1.5">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
              disabled={pending}
            />
          </div>
          {error ? (
            <p className="text-xs font-mono text-destructive">{error}</p>
          ) : null}
          <Button type="submit" disabled={pending} className="mt-1 w-full">
            {pending ? <LoaderCircle className="animate-spin" /> : null}
            {pending ? "Signing in…" : "Sign in"}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
