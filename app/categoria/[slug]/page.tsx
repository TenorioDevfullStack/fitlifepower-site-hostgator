import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { ProductGrid } from "@/components/product-grid";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

const categoryInfo = {
  suplementos: {
    title: "Suplementos",
    description: "Os melhores suplementos para potencializar seus resultados",
    icon: "💊",
    banner: "/images/categorias/suplementos-banner.jpg",
    products: ["Whey Protein", "Creatina", "BCAA", "Pré-treino"],
  },
  equipamentos: {
    title: "Equipamentos",
    description:
      "Equipamentos de qualidade para seu treino em casa ou academia",
    icon: "🏋️",
    banner: "/images/categorias/equipamentos-banner.jpg",
    products: ["Halteres", "Barras", "Anilhas", "Esteiras"],
  },
  "roupas-fitness": {
    title: "Roupas Fitness",
    description: "Roupas confortáveis e funcionais para seus treinos",
    icon: "👕",
    banner: "/images/categorias/roupas-banner.jpg",
    products: ["Camisetas", "Shorts", "Leggings", "Tênis"],
  },
  acessorios: {
    title: "Acessórios",
    description: "Acessórios essenciais para otimizar seus treinos",
    icon: "🧤",
    banner: "/images/categorias/acessorios-banner.jpg",
    products: [
      "Luvas",
      "Cintos",
      "Straps",
      "Shakers",
      "Munhequeiras",
      "Joelheiras",
    ],
  },
  lutas: {
    title: "Lutas",
    description: "Equipamentos e acessórios para artes marciais",
    icon: "🥋",
    banner: "/images/categorias/lutas-banner.jpg",
    products: ["Kimonos", "Luvas de MMA", "Protetores", "Tatames"],
  },
  musculacao: {
    title: "Musculação",
    description: "Tudo para seu treino de musculação",
    icon: "💪",
    banner: "/images/categorias/musculacao-banner.jpg",
    products: [
      "Pesos",
      "Máquinas",
      "Bancos",
      "Cabos",
      "Barras",
      "Anilhas",
      "Elásticos",
    ],
  },
};

export async function generateStaticParams() {
  return Object.keys(categoryInfo).map((slug) => ({
    slug: slug,
  }));
}

export default function CategoryPage({ params }: { params: { slug: string } }) {
  const category = categoryInfo[params.slug as keyof typeof categoryInfo];

  if (!category) {
    return <div>Categoria não encontrada</div>;
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <div className="container px-4 py-8">
        <Breadcrumb className="mb-6">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Início</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>{category.title}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        {/* Banner da Categoria */}
        <div className="relative w-full bg-gray-100 aspect-[16/9] md:aspect-[16/9] lg:aspect-[16/9] rounded-2xl overflow-hidden mb-8">
          <Image
            src={category.banner}
            alt={category.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center p-4">
            <span className="text-4xl mb-2">{category.icon}</span>
            <h1 className="text-3xl md:text-4xl font-bold mb-2">
              {category.title}
            </h1>
            <p className="text-lg opacity-90 max-w-2xl">
              {category.description}
            </p>
          </div>
        </div>

        {/* Grade de Produtos */}
        <ProductGrid categoryFilter={params.slug} />
      </div>

      <Footer />
    </div>
  );
}
