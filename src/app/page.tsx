import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-4 text-white">Bem-vindo ao Mundo de Das XIII</h1>
        <p className="text-lg text-gray-300 mb-8">
          Explore as diversas realidades deste universo RPG e mergulhe em uma jornada fantástica.
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          <Link
            href="/realidades"
            className="bg-das-xiii-purple/50 p-6 rounded-lg hover:bg-das-xiii-purple/70 transition-colors"
          >
            <h2 className="text-xl font-semibold text-white mb-2">Realidades</h2>
            <p className="text-gray-300">
              Conheça as diferentes realidades que compõem este vasto mundo.
            </p>
          </Link>
          <Link
            href="/sobre"
            className="bg-das-xiii-purple/50 p-6 rounded-lg hover:bg-das-xiii-purple/70 transition-colors"
          >
            <h2 className="text-xl font-semibold text-white mb-2">Sobre</h2>
            <p className="text-gray-300">
              Descubra mais sobre a criação e o universo de Das XIII.
            </p>
          </Link>
        </div>
      </main>
    </div>
  );
}
