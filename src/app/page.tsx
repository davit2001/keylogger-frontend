import { Suspense } from "react";
import { redirect } from "next/navigation";
import OpeningAnimationGate from "@/components/opening-animation/OpeningAnimationGate";
import LogsView from "@/components/logs/LogsView";
import { getAuthToken } from "@/app/actions/auth";

export default async function Home() {
  const token = await getAuthToken();
  if (!token) {
    redirect("/login");
  }

  return (
    <>
      <OpeningAnimationGate />
      <Suspense fallback={null}>
        <LogsView />
      </Suspense>
    </>
  );
}
