const MainContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="flex flex-col justify-center items-center min-h-screen bg-gray-50 gap-2">
      {children}
    </main>
  );
};

export default MainContainer;
