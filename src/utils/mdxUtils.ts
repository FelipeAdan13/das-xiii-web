import fs from "fs";
import path from "path";
import matter from "gray-matter";

interface RealidadeData {
  slug: string;
  title: string;
  order?: number;
  [key: string]: any;
}

const contentDirectory = path.join(process.cwd(), "src/content/realidades");

// Filter out page.tsx files
function isMarkdownFile(fileName: string): boolean {
  return fileName.endsWith('.md');
}

function romanToNumber(roman: string): number {
  const romanValues: { [key: string]: number } = {
    'I': 1,
    'II': 2,
    'III': 3,
    'IV': 4,
    'V': 5,
    'VI': 6,
    'VII': 7,
    'VIII': 8,
    'IX': 9,
    'X': 10,
    'XI': 11,
    'XII': 12,
    'XIII': 13
  };
  return romanValues[roman] || 0;
}

export function getSortedRealidadesData(): RealidadeData[] {
  // Obtém nomes de arquivos em /posts
  const fileNames = fs.readdirSync(contentDirectory).filter(isMarkdownFile);

  const allRealidadesData = fileNames.map((fileName) => {
    // Remove ".md" do nome do arquivo para obter o slug
    const slug = fileName.replace(/\.md$/, "");

    // Extrai o número romano do slug (assume formato nome-NUMERO.md)
    const romanNumeral = slug.split('-').pop() || '';

    // Lê conteúdo do arquivo como string
    const fullPath = path.join(contentDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    // Usa gray-matter para analisar os metadados
    const matterResult = matter(fileContents);

    // Combina os dados com o slug
    return {
      slug,
      title: matterResult.data.title as string,
      order: romanToNumber(romanNumeral),
      ...matterResult.data,
    } as RealidadeData;
  });

  // Ordena as realidades por ordem numérica (I -> XIII)
  return allRealidadesData.sort((a, b) => {
    const orderA = romanToNumber(a.slug.split('-').pop() || '');
    const orderB = romanToNumber(b.slug.split('-').pop() || '');
    return orderA - orderB;
  });
}

export function getRealidadeBySlug(slug: string): RealidadeData & { content: string } {
  const fullPath = path.join(contentDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  // Extrai o número romano do slug
  const romanNumeral = slug.split('-').pop() || '';

  // Usa gray-matter para analisar os metadados
  const matterResult = matter(fileContents);

  return {
    slug,
    title: matterResult.data.title as string,
    order: romanToNumber(romanNumeral),
    ...matterResult.data,
    content: matterResult.content,
  } as RealidadeData & { content: string };
}
