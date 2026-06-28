import { Outlet, ScrollRestoration, useNavigation } from "react-router-dom";

function AppLayout() {
  const { state } = useNavigation();

  return (
    <div className="min-h-screen w-full bg-background flex flex-col items-center text-white select-none">
      {state === "loading" && (
        <div className="fixed inset-0 z-10 flex items-center justify-center bg-black/10">
          <div className="w-25 h-25 border-5 border-[hsl(200,100%,10%)] border-t-transparent rounded-full animate-spin" />
        </div>
      )}

      <main>
        <Outlet />
      </main>

      <ScrollRestoration />
    </div>
  );
}

export default AppLayout;
