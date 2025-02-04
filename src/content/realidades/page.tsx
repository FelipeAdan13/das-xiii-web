import Link from 'next/link';
import { getSortedRealidadesData } from '@/utils/mdxUtils';

export default async function RealidadesPage() {
  const realidades = await getSortedRealidadesData();

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-white">Realidades de Das XIII</h1>

      <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-6">
        {realidades.map((realidade) => (
          <Link
            key={realidade.slug}
            href={`/content/realidades/${realidade.slug}`}
            className="bg-das-xiii-purple/50 p-6 rounded-lg hover:bg-das-xiii-purple/70 transition-colors"
          >
            <h2 className="text-xl font-semibold text-white">
              {realidade.title}
            </h2>
          </Link>
        ))}
      </div>
    </div>
  );
}
