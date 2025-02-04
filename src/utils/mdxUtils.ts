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

export function getSortedRealidadesData(): RealidadeData[] {
  // Obtém nomes de arquivos em /posts
  const fileNames = fs.readdirSync(contentDirectory).filter(isMarkdownFile);

  const allRealidadesData = fileNames.map((fileName) => {
    // Remove ".md" do nome do arquivo para obter o slug
    const slug = fileName.replace(/\.md$/, "");

    // Lê conteúdo do arquivo como string
    const fullPath = path.join(contentDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    // Usa gray-matter para analisar os metadados
    const matterResult = matter(fileContents);

    // Combina os dados com o slug
    return {
      slug,
      title: matterResult.data.title as string,
      order: matterResult.data.order as number | undefined,
      ...matterResult.data,
    } as RealidadeData;
  });

  // Ordena as realidades por ordem
  return allRealidadesData.sort((a, b) => (a.order || 0) - (b.order || 0));
}

export function getRealidadeBySlug(slug: string): RealidadeData & { content: string } {
  const fullPath = path.join(contentDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  // Usa gray-matter para analisar os metadados
  const matterResult = matter(fileContents);

  return {
    slug,
    title: matterResult.data.title as string,
    order: matterResult.data.order as number | undefined,
    ...matterResult.data,
    content: matterResult.content,
  } as RealidadeData & { content: string };
}
