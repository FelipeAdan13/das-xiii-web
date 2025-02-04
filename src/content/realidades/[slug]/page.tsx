import { getRealidadeBySlug } from '@/utils/mdxUtils';
import Link from 'next/link';

interface PageProps {
  params: {
    slug: string;
  };
}

export default async function RealidadePage({ params }: PageProps) {
  const realidade = await getRealidadeBySlug(params.slug);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <Link 
          href="/content/realidades"
          className="text-purple-400 hover:text-purple-300 mb-4 inline-block"
        >
          ← Voltar para Realidades
        </Link>
        
        <h1 className="text-4xl font-bold mb-6 text-white">{realidade.title}</h1>
        
        <div className="prose prose-invert max-w-none">
          {realidade.content}
        </div>
      </div>
    </div>
  );
}
