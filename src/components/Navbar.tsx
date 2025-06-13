"use client";

export default function Navbar() {
  const handleLogin = () => {
    console.log("Login button clicked");
  };

  return (
    <div className="backdrop-blur-xl flex justify-between items-center p-4 bg-gray-500/30 rounded-3xl p-2 md:p-4">
      <div className="flex items-center gap-2">
        <img
          src={"https://www.curations.club/assets/logo/logo-dark.svg"}
          width={40}
          height={40}
        />
        <div className="text-3xl font-extrabold text-white">Curations</div>
      </div>
      <button
        onClick={handleLogin}
        className="bg-black text-white rounded-full p-3 text-sm font-extrabold px-6"
      >
        Sign in now
      </button>
    </div>
  );
}
