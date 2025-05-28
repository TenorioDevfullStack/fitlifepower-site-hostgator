import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, User, ArrowRight, Heart, Zap, Target } from "lucide-react";
import Link from "next/link";

const articles = [
  {
    id: 5,
    title: "Jejum intermitente para lutadores",
    excerpt:
      "Ajuda ou prejudica o desempenho? Descubra o impacto no universo esportivo.",
    category: "Ciência da Luta",
    author: "Blog Venum Brasil",
    date: "14 Maio 2025",
    readTime: "... min",
    image: "/images/dicas-fitness/artigos/ciencia-luta/jejum-intermitente.jpg",
    thumbnail:
      "/images/dicas-fitness/thumbnails/ChatGPT-Image-13-de-mai.-de-2025-980x589.png",
    featured: false,
    slug: "jejum-intermitente-para-lutadores-ajuda-ou-prejudica-o-desempenho",
    externalLink:
      "https://venum.com.br/blog/jejum-intermitente-para-lutadores-ajuda-ou-prejudica-o-desempenho/",
  },
  {
    id: 6,
    title: "Refeições pré-luta que aumentam o desempenho",
    excerpt: "O que a ciência recomenda para atletas de esportes de combate.",
    category: "Ciência da Luta",
    author: "Blog Venum Brasil",
    date: "Abr 22, 2025",
    readTime: "... min",
    image: "/images/dicas-fitness/artigos/ciencia-luta/refeicoes-pre-luta.jpg",
    thumbnail: "/images/dicas-fitness/thumbnails/refeicoes-pre-luta.jpg",
    featured: false,
    slug: "refeicoes-pre-luta-que-aumentam-o-desempenho-o-que-a-ciencia-recomenda",
    externalLink:
      "https://venum.com.br/blog/refeicoes-pre-luta-que-aumentam-o-desempenho-o-que-a-ciencia-recomenda/",
  },
  {
    id: 7,
    title: "Como Construir o Melhor Smoothie de Recuperação Pós-Treino",
    excerpt:
      "Guia prático, nutritivo e delicioso para otimizar seus ganhos musculares.",
    category: "Nutrição",
    author: "Blog Venum Brasil",
    date: "Dez 9, 2024",
    readTime: "... min",
    image: "/images/dicas-fitness/artigos/nutricao/smoothie-recuperacao.jpg",
    thumbnail:
      "/images/dicas-fitness/thumbnails/como-construir-o-melhor-smothie-de-recuperacao.jpg",
    featured: false,
    slug: "como-construir-o-melhor-smoothie-de-recuperacao-pos-treino",
    externalLink:
      "https://venum.com.br/blog/como-construir-o-melhor-smoothie-de-recuperacao-pos-treino/",
  },
  {
    id: 8,
    title: "Treino funcional e seus benefícios",
    excerpt:
      "Descubra os benefícios do treino funcional para sua saúde e bem-estar.",
    category: "Treino",
    author: "Blog Cia Athletica",
    date: "...",
    readTime: "... min",
    image: "/images/dicas-fitness/artigos/treino/treino-funcional.jpg",
    thumbnail: "/images/dicas-fitness/thumbnails/treino-funcional.jpg",
    featured: false,
    slug: "treino-funcional-e-seus-beneficios",
    externalLink:
      "https://blog.ciaathletica.com.br/a-cia-athletica/modalidades/treino-funcional-e-seus-beneficios/",
  },
  {
    id: 9,
    title: "A prática do Jiu Jitsu para a qualidade de vida",
    excerpt: "Descubra como o Jiu Jitsu pode melhorar sua qualidade de vida.",
    category: "Lutas",
    author: "Blog Cia Athletica",
    date: "...",
    readTime: "... min",
    image: "/images/dicas-fitness/artigos/lutas/jiu-jitsu.jpg",
    thumbnail: "/images/dicas-fitness/thumbnails/jiu-jitsu.jpg",
    featured: false,
    slug: "a-pratica-do-jiu-jitsu-para-a-qualidade-de-vida",
    externalLink:
      "https://blog.ciaathletica.com.br/a-cia-athletica/modalidades/a-pratica-do-jiu-jitsu-para-a-qualidade-de-vida/",
  },
  {
    id: 10,
    title: "Exercícios para bumbum",
    excerpt:
      "Confira os melhores exercícios para tonificar e fortalecer os glúteos.",
    category: "Musculação",
    author: "Blog Cia Athletica",
    date: "...",
    readTime: "... min",
    image: "/images/dicas-fitness/artigos/musculacao/exercicios-bumbum.jpg",
    thumbnail: "/images/dicas-fitness/thumbnails/exercicios-para-bumbum.jpg",
    featured: false,
    slug: "exercicios-para-bumbum",
    externalLink:
      "https://blog.ciaathletica.com.br/definicao/exercicios-para-bumbum/",
  },
  {
    id: 11,
    title: "Comecei a malhar, engordei",
    excerpt: "Entenda por que isso pode acontecer e o que fazer a respeito.",
    category: "Nutrição",
    author: "Blog Cia Athletica",
    date: "...",
    readTime: "... min",
    image: "/images/dicas-fitness/artigos/nutricao/comecei-malhar.jpg",
    thumbnail: "/images/dicas-fitness/thumbnails/comecei-malhar-engordei.jpg",
    featured: false,
    slug: "comecei-malhar-engordei",
    externalLink:
      "https://blog.ciaathletica.com.br/definicao/comecei-malhar-engordei/",
  },
  {
    id: 12,
    title: "Série de musculação",
    excerpt:
      "Descubra como montar uma série de musculação eficaz para seus objetivos.",
    category: "Musculação",
    author: "Blog Cia Athletica",
    date: "...",
    readTime: "... min",
    image: "/images/dicas-fitness/artigos/musculacao/serie-musculacao.jpg",
    thumbnail: "/images/dicas-fitness/thumbnails/serie-musculacao.jpg",
    featured: false,
    slug: "serie-de-musculacao",
    externalLink:
      "https://blog.ciaathletica.com.br/definicao/serie-de-musculacao/",
  },
  {
    id: 13,
    title: "Musculação: treinar menos traz resultados?",
    excerpt:
      "Descubra se é possível ter resultados treinando com menor frequência.",
    category: "Musculação",
    author: "Blog Cia Athletica",
    date: "...",
    readTime: "... min",
    image: "/images/dicas-fitness/artigos/musculacao/treinar-menos.jpg",
    thumbnail:
      "/images/dicas-fitness/thumbnails/treinar-menos-traz-resultados.jpg",
    featured: false,
    slug: "musculacao-treinar-menos-traz-resultados",
    externalLink:
      "https://blog.ciaathletica.com.br/definicao/musculacao-treinar-menos-traz-resultados/",
  },
  {
    id: 14,
    title: "Você precisa saber: definição muscular",
    excerpt:
      "Tudo o que você precisa saber para alcançar a definição muscular desejada.",
    category: "Musculação",
    author: "Blog Cia Athletica",
    date: "...",
    readTime: "... min",
    image: "/images/dicas-fitness/artigos/musculacao/definicao-muscular.jpg",
    thumbnail: "/images/dicas-fitness/thumbnails/defnicao-muscular.jpg",
    featured: false,
    slug: "voce-precisa-saber-definicao-muscular",
    externalLink:
      "https://blog.ciaathletica.com.br/definicao/voce-precisa-saber-definicao-muscular/",
  },
  {
    id: 15,
    title: "Desenvolvimento Arnold",
    excerpt:
      "Aprenda a executar o Desenvolvimento Arnold corretamente para ombros.",
    category: "Musculação",
    author: "Blog Cia Athletica",
    date: "...",
    readTime: "... min",
    image:
      "/images/dicas-fitness/artigos/musculacao/desenvolvimento-arnold.jpg",
    thumbnail: "/images/dicas-fitness/thumbnails/desenvolvimento-arnold.jpg",
    featured: false,
    slug: "desenvolvimento-arnold",
    externalLink:
      "https://blog.ciaathletica.com.br/definicao/desenvolvimento-arnold/",
  },
];

export default function DicasFitnessPage() {
  const featuredArticles = articles.filter((article) => article.featured);
  const regularArticles = articles.filter((article) => !article.featured);

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <div className="container px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="relative mb-8">
            <img
              src="/images/banner/dicas-fitness-banner-novo.jpg"
              alt="Dicas Fitness"
              className="w-full h-[400px] object-cover rounded-2xl"
            />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Dicas{" "}
            <span className="bg-gradient-to-r from-green-600 to-green-500 bg-clip-text text-transparent">
              Fitness
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Conteúdo especializado para potencializar seus resultados e alcançar
            seus objetivos fitness
          </p>
        </div>

        {/* Categorias */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <Badge
            variant="default"
            className="bg-green-600 hover:bg-green-700 cursor-pointer"
          >
            Todos
          </Badge>
          <Badge variant="outline" className="cursor-pointer hover:bg-green-50">
            Musculação
          </Badge>
          <Badge variant="outline" className="cursor-pointer hover:bg-green-50">
            Suplementos
          </Badge>
          <Badge variant="outline" className="cursor-pointer hover:bg-green-50">
            Nutrição
          </Badge>
          <Badge variant="outline" className="cursor-pointer hover:bg-green-50">
            Equipamentos
          </Badge>
          <Badge variant="outline" className="cursor-pointer hover:bg-green-50">
            Treino
          </Badge>
        </div>

        {/* Artigos em Destaque */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Artigos em Destaque</h2>
          <div className="grid lg:grid-cols-2 gap-8">
            {featuredArticles.map((article) => (
              <Card
                key={article.id}
                className="overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="relative">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-48 object-cover"
                  />
                  <Badge className="absolute top-4 left-4 bg-green-600">
                    {article.category}
                  </Badge>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3 line-clamp-2">
                    {article.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-2">
                    {article.excerpt}
                  </p>

                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-1">
                        <User className="h-4 w-4" />
                        <span>{article.author}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-4 w-4" />
                        <span>{article.date}</span>
                      </div>
                    </div>
                    <span>{article.readTime} de leitura</span>
                  </div>

                  <Link href={article.externalLink} passHref legacyBehavior>
                    <a target="_blank" rel="noopener noreferrer">
                      <Button variant="outline" className="w-full">
                        Ler Artigo
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </a>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Outros Artigos */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Mais Artigos</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {regularArticles.map((article) => (
              <Card
                key={article.id}
                className="overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="relative">
                  <img
                    src={article.thumbnail}
                    alt={article.title}
                    className="w-full h-40 object-cover"
                  />
                  <Badge variant="secondary" className="absolute top-3 left-3">
                    {article.category}
                  </Badge>
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold mb-2 line-clamp-2">
                    {article.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                    {article.excerpt}
                  </p>

                  <div className="flex items-center justify-between text-xs text-gray-500 mb-3">
                    <span>{article.author}</span>
                    <span>{article.readTime}</span>
                  </div>

                  <Link href={article.externalLink} passHref legacyBehavior>
                    <a target="_blank" rel="noopener noreferrer">
                      <Button variant="outline" size="sm" className="w-full">
                        Ler Mais
                      </Button>
                    </a>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Newsletter */}
        <div className="bg-gradient-to-r from-green-600 to-green-500 rounded-2xl p-8 md:p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Receba Dicas Exclusivas</h2>
          <p className="text-xl mb-6 opacity-90">
            Inscreva-se em nossa newsletter e receba as melhores dicas fitness
            diretamente no seu email
          </p>
          <div className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              placeholder="Seu melhor email"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500"
            />
            <Button
              variant="secondary"
              className="bg-white text-green-600 hover:bg-gray-100"
            >
              Inscrever
            </Button>
          </div>
        </div>

        {/* Benefícios */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-center mb-12">
            Por que seguir nossas dicas?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                  <Target className="h-8 w-8 text-green-600" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Conteúdo Especializado
              </h3>
              <p className="text-gray-600">
                Dicas criadas por profissionais experientes da área fitness e
                nutrição.
              </p>
            </div>

            <div className="text-center">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                  <Zap className="h-8 w-8 text-green-600" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Resultados Comprovados
              </h3>
              <p className="text-gray-600">
                Estratégias testadas e aprovadas que realmente funcionam na
                prática.
              </p>
            </div>

            <div className="text-center">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                  <Heart className="h-8 w-8 text-green-600" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2">Foco na Saúde</h3>
              <p className="text-gray-600">
                Priorizamos sempre sua saúde e bem-estar em todas as nossas
                recomendações.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
