import { redirect } from "next/navigation";
import { getAuthToken } from "@/app/actions/auth";
import LoginForm from "./LoginForm";

export default async function LoginPage() {
  const token = await getAuthToken();
  if (token) {
    redirect("/");
  }

  return (
    <main className="min-h-screen flex items-center justify-center bg-slate-100 p-4">
      <LoginForm />
    </main>
  );
}
