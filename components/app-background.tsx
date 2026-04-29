export function AppBackground() {
  return (
    <>
      <style>{`
        @keyframes app-background-blob-1 {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(40px, -60px) scale(1.05); }
          66% { transform: translate(-20px, 40px) scale(0.95); }
          100% { transform: translate(0px, 0px) scale(1); }
        }

        @keyframes app-background-blob-2 {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(-50px, 40px) scale(1.1); }
          66% { transform: translate(30px, -30px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }

        @keyframes app-background-blob-3 {
          0% { transform: translate(0px, 0px) scale(1); }
          50% { transform: translate(30px, 30px) scale(1.1); }
          100% { transform: translate(0px, 0px) scale(1); }
        }

        @keyframes app-background-blob-4 {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(20px, -40px) scale(1.1); }
          66% { transform: translate(-30px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }

        .animate-app-background-blob-1 { animation: app-background-blob-1 14s ease-in-out infinite; }
        .animate-app-background-blob-2 { animation: app-background-blob-2 18s ease-in-out infinite; }
        .animate-app-background-blob-3 { animation: app-background-blob-3 12s ease-in-out infinite; }
        .animate-app-background-blob-4 { animation: app-background-blob-4 16s ease-in-out infinite; }
      `}</style>

      <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#fdf3e1] via-[#fce7f1] to-[#e8edfc] dark:from-[#07080d] dark:via-[#07080d] dark:to-[#07080d]" />
        <div className="absolute inset-0 bg-[radial-gradient(rgba(0,0,0,0.06)_1px,transparent_1px)] [background-size:24px_24px] dark:bg-[radial-gradient(rgba(255,255,255,0.15)_1px,transparent_1px)]" />
        <div
          className="animate-app-background-blob-1 absolute top-[5%] left-[10%] h-[35vw] w-[35vw] rounded-full opacity-100 mix-blend-multiply dark:mix-blend-screen"
          style={{ background: "radial-gradient(circle at 30% 30%, rgba(91,141,239,0.85) 0%, transparent 60%)" }}
        />
        <div
          className="animate-app-background-blob-2 absolute right-[5%] bottom-[5%] h-[40vw] w-[40vw] rounded-full opacity-100 mix-blend-multiply dark:mix-blend-screen"
          style={{ background: "radial-gradient(circle at 70% 70%, rgba(180,134,255,0.85) 0%, transparent 60%)" }}
        />
        <div
          className="animate-app-background-blob-3 absolute top-[30%] left-[60%] h-[25vw] w-[25vw] rounded-full opacity-100 mix-blend-multiply dark:mix-blend-screen"
          style={{ background: "radial-gradient(circle at 50% 50%, rgba(255,126,182,0.8) 0%, transparent 60%)" }}
        />
        <div
          className="animate-app-background-blob-4 absolute bottom-[-5%] left-[5%] h-[35vw] w-[35vw] rounded-full opacity-100 mix-blend-multiply dark:mix-blend-screen"
          style={{ background: "radial-gradient(circle at 40% 60%, rgba(200,255,100,0.8) 0%, transparent 60%)" }}
        />
      </div>
    </>
  );
}
