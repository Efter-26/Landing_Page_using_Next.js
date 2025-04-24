export default function HeroSection() {
  return (
    <section
      className="w-full h-screen bg-cover bg-center flex flex-col items-center justify-center text-white px-4"
      style={{
        backgroundImage: "url('/food.jpg')",
      }}
    >
      <div className="bg-black bg-opacity-60 p-8 rounded-xl text-center max-w-2xl">
        <h1 className="text-5xl font-bold mb-4">Welcome to TastyBite</h1>
        <p className="text-xl mb-6 text-gray-200">
          Fresh, fast, and finger-lickin’ good!
        </p>
        <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full shadow-lg transition-all duration-300">
          Get Started
        </button>
      </div>
    </section>
  );
}
