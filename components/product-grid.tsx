"use client";

import { useState, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Search,
  Star,
  ExternalLink,
  ChevronLeft,
  ChevronRight,
  X,
  ZoomIn,
  Info,
} from "lucide-react";

// Componente para lightbox de imagens
function ImageLightbox({
  images,
  currentIndex,
  isOpen,
  onClose,
  onNext,
  onPrev,
}: {
  images: string[];
  currentIndex: number;
  isOpen: boolean;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4">
      <div className="relative max-w-4xl max-h-full">
        <button
          onClick={onClose}
          className="absolute -top-12 right-0 text-white hover:text-gray-300 z-10"
        >
          <X className="h-8 w-8" />
        </button>

        <img
          src={images[currentIndex] || "/placeholder.svg"}
          alt={`Imagem ${currentIndex + 1}`}
          className="max-w-full max-h-[80vh] object-contain rounded-lg"
        />

        {images.length > 1 && (
          <>
            <button
              onClick={onPrev}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              onClick={onNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70"
            >
              <ChevronRight className="h-6 w-6" />
            </button>

            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
              {currentIndex + 1} / {images.length}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

// Componente para modal de detalhes do produto
function ProductDetailsModal({
  product,
  isOpen,
  onClose,
}: {
  product: any;
  isOpen: boolean;
  onClose: () => void;
}) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % product.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex(
      (prev) => (prev - 1 + product.images.length) % product.images.length
    );
  };

  const openLightbox = () => {
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const nextLightboxImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % product.images.length);
  };

  const prevLightboxImage = () => {
    setCurrentImageIndex(
      (prev) => (prev - 1 + product.images.length) % product.images.length
    );
  };

  if (!isOpen) return null;

  return (
    <>
      <div className="fixed inset-0 z-40 bg-black/50 flex items-center justify-center p-4">
        <div className="bg-white rounded-lg max-w-4xl max-h-[90vh] overflow-y-auto w-full">
          <div className="sticky top-0 bg-white border-b p-4 flex justify-between items-center">
            <h2 className="text-xl font-bold">{product.name}</h2>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          <div className="p-6">
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Galeria de Imagens */}
              <div className="space-y-4">
                <div className="relative group">
                  <img
                    src={
                      product.images[currentImageIndex] || "/placeholder.svg"
                    }
                    alt={`${product.name} - Imagem ${currentImageIndex + 1}`}
                    className="w-full h-80 object-cover rounded-lg cursor-zoom-in"
                    onClick={openLightbox}
                  />

                  <button
                    onClick={openLightbox}
                    className="absolute top-4 right-4 bg-black/50 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <ZoomIn className="h-4 w-4" />
                  </button>

                  {product.images.length > 1 && (
                    <>
                      <button
                        onClick={prevImage}
                        className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                      >
                        <ChevronLeft className="h-4 w-4" />
                      </button>
                      <button
                        onClick={nextImage}
                        className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                      >
                        <ChevronRight className="h-4 w-4" />
                      </button>
                    </>
                  )}
                </div>

                {/* Thumbnails */}
                {product.images.length > 1 && (
                  <div className="flex gap-2 overflow-x-auto">
                    {product.images.map((image: string, index: number) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`flex-shrink-0 w-16 h-16 rounded border-2 overflow-hidden ${
                          index === currentImageIndex
                            ? "border-green-500"
                            : "border-gray-200"
                        }`}
                      >
                        <img
                          src={image || "/placeholder.svg"}
                          alt={`Thumbnail ${index + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Informações do Produto */}
              <div className="space-y-6">
                <div>
                  <Badge variant="secondary" className="mb-2">
                    {product.category}
                  </Badge>
                  <h3 className="text-2xl font-bold mb-4">{product.name}</h3>
                  <p className="text-gray-600 leading-relaxed">
                    {product.description}
                  </p>
                </div>

                {/* Avaliações */}
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1">
                    <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    <span className="font-medium">{product.rating}</span>
                  </div>
                  <span className="text-gray-500">
                    ({product.reviews} avaliações)
                  </span>
                </div>

                {/* Tags */}
                <div>
                  <h4 className="font-semibold mb-2">Características:</h4>
                  <div className="flex flex-wrap gap-2">
                    {product.tags.map((tag: string) => (
                      <Badge key={tag} variant="outline" className="text-sm">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Informações Adicionais */}
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">
                    Informações do Produto:
                  </h4>
                  <ul className="space-y-1 text-sm text-gray-600">
                    <li>• Produto original com garantia</li>
                    <li>• Envio rápido e seguro</li>
                    <li>• Suporte ao cliente especializado</li>
                    <li>• Melhor custo-benefício do mercado</li>
                  </ul>
                </div>

                {/* Botão de Compra */}
                <Button
                  className="w-full bg-gradient-to-r from-green-600 to-green-500 hover:from-green-700 hover:to-green-600 text-lg py-6"
                  onClick={() => window.open(product.shopeeLink, "_blank")}
                >
                  Ver Ofertas na Shopee
                  <ExternalLink className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ImageLightbox
        images={product.images}
        currentIndex={currentImageIndex}
        isOpen={lightboxOpen}
        onClose={closeLightbox}
        onNext={nextLightboxImage}
        onPrev={prevLightboxImage}
      />
    </>
  );
}

// Componente para galeria de imagens do produto
function ProductImageGallery({
  images,
  productName,
  onImageClick,
}: {
  images: string[];
  productName: string;
  onImageClick: (index: number) => void;
}) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="relative group">
      <div className="aspect-square overflow-hidden">
        <img
          src={images[currentImageIndex] || "/placeholder.svg"}
          alt={`${productName} - Imagem ${currentImageIndex + 1}`}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 cursor-pointer"
          onClick={() => onImageClick(currentImageIndex)}
        />
      </div>

      {/* Navegação das imagens */}
      {images.length > 1 && (
        <>
          <button
            onClick={prevImage}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <button
            onClick={nextImage}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
          >
            <ChevronRight className="h-4 w-4" />
          </button>

          {/* Indicadores de imagem */}
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex space-x-1">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentImageIndex ? "bg-white" : "bg-white/50"
                }`}
              />
            ))}
          </div>
        </>
      )}

      {/* Badge de múltiplas imagens */}
      {images.length > 1 && (
        <div className="absolute top-2 left-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
          {currentImageIndex + 1}/{images.length}
        </div>
      )}

      {/* Ícone de zoom */}
      <div className="absolute top-2 right-2 bg-black/70 text-white p-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
        <ZoomIn className="h-4 w-4" />
      </div>
    </div>
  );
}

// Dados dos produtos com múltiplas imagens
const products = [
  // Suplementos
  {
    id: 1,
    name: "Whey Protein De Chocolate Milkshake 80% Proteína Concentrado 1Kg Growth Original",
    category: "Suplementos",
    rating: 4.8,
    reviews: 1250,
    images: [
      "/images/produtos/whey-protein-choco-growth/imagem-capa.jpg",
      "/images/produtos/whey-protein-choco-growth/Imagem do WhatsApp de 2025-05-27 à(s) 18.18.34_b3b202eb.jpg",
      "/images/produtos/whey-protein-choco-growth/Imagem do WhatsApp de 2025-05-27 à(s) 18.18.34_5ad62595.jpg",
      "/images/produtos/whey-protein-choco-growth/Imagem do WhatsApp de 2025-05-27 à(s) 18.18.34_65b3d513.jpg",
      "/images/produtos/whey-protein-choco-growth/Imagem do WhatsApp de 2025-05-27 à(s) 18.18.34_f86fbcd6.jpg",
      "/images/produtos/whey-protein-choco-growth/Imagem do WhatsApp de 2025-05-27 à(s) 18.18.08_b157a33a.jpg",
    ],
    shopeeLink: "https://s.shopee.com.br/9UpFicokO2",
    tags: ["Proteína", "Ganho de Massa", "Growth"],
    description:
      "Whey protein de alta qualidade para ganho de massa muscular e recuperação pós-treino. 80% de proteína concentrada, sabor Chocolate Milkshake.",
  },
  {
    id: 53,
    name: "Whey Pro Max Titanium 1kg - 3 Sabores (15g Proteína + 3,4g BCAA)",
    category: "Suplementos",
    rating: 4.9,
    reviews: 4250,
    images: [
      "/images/produtos/whey-pro-max/sabor-morango.jpg",
      "/images/produtos/whey-pro-max/sabor-baunilha.jpg",
      "/images/produtos/whey-pro-max/sabor-chocolate.jpg",
      "/images/produtos/whey-pro-max/tabela-nutricional-pt.jpg",
      "/images/produtos/whey-pro-max/tabela-nutricional-en.jpg",
    ],
    shopeeLink: "https://s.shopee.com.br/5AgCvMSaH0",
    tags: [
      "Whey Protein",
      "Max Titanium",
      "15g Proteína",
      "3,4g BCAA",
      "3 Sabores",
      "1kg",
      "Alto Teor",
    ],
    description:
      "Whey Pro Max Titanium 1kg - Whey protein premium com 15g de proteína e 3,4g de BCAA por porção! Alto teor de proteínas que auxiliam na formação dos músculos e ossos. Disponível em 3 sabores deliciosos: Morango, Baunilha e Chocolate. Perfil completo de aminoácidos essenciais.",
  },
  {
    id: 54,
    name: "Hipercalórico Mass Gainer Dark 3kg",
    category: "Suplementos",
    rating: 4.7,
    reviews: 1850,
    images: [
      "/images/produtos/hiper-calorico-mass-gainer/imagem-capa.jpg",
      "/images/produtos/hiper-calorico-mass-gainer/Imagem do WhatsApp de 2025-05-27 à(s) 19.02.29_cfbb215e.jpg",
      "/images/produtos/hiper-calorico-mass-gainer/Imagem do WhatsApp de 2025-05-27 à(s) 19.02.30_60fbe356.jpg",
      "/images/produtos/hiper-calorico-mass-gainer/Imagem do WhatsApp de 2025-05-27 à(s) 19.02.30_070cdcad.jpg",
      "/images/produtos/hiper-calorico-mass-gainer/Imagem do WhatsApp de 2025-05-27 à(s) 19.02.30_821962ed.jpg",
    ],
    shopeeLink: "https://s.shopee.com.br/1LTXvbakxk",
    tags: ["Hipercalórico", "Ganho de Massa", "3kg", "Dark"],
    description:
      "Hipercalórico Mass Gainer Dark 3kg - Suplemento para ganho de massa muscular com alto teor calórico e proteico. Ideal para quem tem dificuldade em ganhar peso.",
  },
  {
    id: 55,
    name: "Creatina 300G Dux Creatina Pura Monohidratada 100% Original",
    category: "Suplementos",
    rating: 4.8,
    reviews: 2100,
    images: [
      "/images/produtos/creatina/principal.jpg",
      "/images/produtos/creatina/tabela-nutricional.jpg",
      "/images/produtos/creatina/dosagem.jpg",
      "/images/produtos/creatina/pote-aberto.jpg",
      "/images/produtos/creatina/rotulo.jpg",
    ],
    shopeeLink: "https://s.shopee.com.br/9pS5P1LZSa",
    tags: ["Creatina", "Monohidratada", "Dux", "300g"],
    description:
      "Creatina 300G Dux - Creatina monohidratada 100% pura e original. Ajuda no ganho de força e massa muscular, além de melhorar a recuperação pós-treino.",
  },
  {
    id: 16,
    name: "BCAA 2:1:1 Growth Supplements - 120 Cápsulas (Nova Fórmula)",
    category: "Suplementos",
    rating: 4.8,
    reviews: 1650,
    images: [
      "/images/produtos/bcaa-growth/produto-principal.jpg",
      "/images/produtos/bcaa-growth/beneficios.jpg",
      "/images/produtos/bcaa-growth/explicacao.jpg",
      "/images/produtos/bcaa-growth/nota-fiscal.jpg",
    ],
    shopeeLink: "https://s.shopee.com.br/5fcXA1RdD7",
    tags: [
      "BCAA",
      "Growth Supplements",
      "120 Cápsulas",
      "2:1:1",
      "Nova Fórmula",
      "Nota Fiscal",
    ],
    description:
      "BCAA 2:1:1 Growth Supplements - Nova fórmula com aminoácidos de cadeia ramificada (Leucina, Valina, Isoleucina). Auxilia no desempenho físico, sistema imunológico e síntese proteica. 120 cápsulas. Produto original com nota fiscal, estoque no Brasil e envio imediato.",
  },
  {
    id: 19,
    name: "Albumina Growth 500g - Sabor Natural e Chocolate",
    category: "Suplementos",
    rating: 4.4,
    reviews: 620,
    images: [
      "/images/produtos/albumina/principal.jpg",
      "/images/produtos/albumina/tabela-natural.jpg",
      "/images/produtos/albumina/tabela-chocolate.jpg",
      "/images/produtos/albumina/informacoes.jpg",
    ],
    shopeeLink: "https://s.shopee.com.br/BHaboXOVk",
    tags: ["Proteína", "Natural", "Chocolate", "Growth"],
    description:
      "Albumina Growth 500g - Proteína de clara de ovo desidratada, disponível nos sabores natural e chocolate. 24g de proteína por porção.",
  },
  {
    id: 45,
    name: "Protein Crisp Bar Integralmédica - 12 Unidades (13 Sabores)",
    category: "Suplementos",
    rating: 4.7,
    reviews: 2150,
    images: [
      "/images/produtos/protein-crisp/promocional.jpg",
      "/images/produtos/protein-crisp/caixa-doce-coco.jpg",
      "/images/produtos/protein-crisp/tabela-nutricional.jpg",
      "/images/produtos/protein-crisp/todos-sabores.jpg",
    ],
    shopeeLink: "https://s.shopee.com.br/7V46QZBn0c",
    tags: [
      "Barra de Proteína",
      "Integralmédica",
      "13 Sabores",
      "14g Proteína",
      "Whey Protein",
    ],
    description:
      "Protein Crisp Bar Integralmédica - Barras de proteína com 14g de whey protein e sabores incríveis! 13 sabores disponíveis: Doce de Coco, Cookies & Cream, Brownie de Chocolate, Peanut Butter e muito mais. Caixa com 12 unidades de 45g.",
  },
  {
    id: 49,
    name: "L-Glutamina Red Fit Nutrition 300g - 100% Pura Importada + Shaker Grátis",
    category: "Suplementos",
    rating: 4.9,
    reviews: 2890,
    images: [
      "/images/produtos/glutamina-redfit/produto-shaker.jpg",
      "/images/produtos/glutamina-redfit/composicao-produto.jpg",
      "/images/produtos/glutamina-redfit/beneficios-completos.jpg",
      "/images/produtos/glutamina-redfit/tabela-nutricional.jpg",
      "/images/produtos/glutamina-redfit/promocao-shakers.jpg",
      "/images/produtos/glutamina-redfit/marca-institucional.jpg",
    ],
    shopeeLink: "https://s.shopee.com.br/2LM5BxPRBo",
    tags: [
      "L-Glutamina",
      "Red Fit",
      "100% Pura",
      "Importada",
      "Shaker Grátis",
      "60 Doses",
      "5000mg",
    ],
    description:
      "L-Glutamina Red Fit Nutrition 300g - Fórmula 100% pura importada e isolada! LIVRE de glúten, açúcar, corantes artificiais, sódio, soja e derivados. ZERO aditivos químicos e conservantes. 5000mg por porção (60 doses). BRINDE: Shaker Red Fit em cores variadas!",
  },
  {
    id: 52,
    name: "Pré-Treino Horus Max Titanium 300g - Limão Yuzu (Resistência e Desempenho)",
    category: "Suplementos",
    rating: 4.9,
    reviews: 3150,
    images: [
      "/images/produtos/pre-treino-horus/produto-principal.jpg",
      "/images/produtos/pre-treino-horus/tabela-nutricional.jpg",
    ],
    shopeeLink: "https://s.shopee.com.br/50MqMvI4Nk",
    tags: [
      "Pré-Treino",
      "Max Titanium",
      "Horus",
      "Limão Yuzu",
      "Beta Alanina",
      "Cafeína",
      "Arginina",
      "Taurina",
    ],
    description:
      "Pré-Treino Horus Max Titanium 300g - Fórmula completa para resistência e desempenho! Beta Alanina 2g, Cafeína 150mg, Taurina 1.000mg, Arginina 1.000mg por porção. Auxilia no aumento do estado de alerta e melhora da concentração. Sabor Limão Yuzu refrescante!",
  },

  // Equipamentos
  {
    id: 2,
    name: "Kit Halteres 3 Em 1 Bonafit Preto E Amarelo Peso Musculação Ajustável 20kg",
    category: "Equipamentos",
    rating: 4.6,
    reviews: 890,
    images: [
      "/images/produtos/halteres-2em1/produto-real.jpg",
      "/images/produtos/halteres-2em1/especificacoes-pesos.jpg",
      "/images/produtos/halteres-2em1/sistema-conexao.jpg",
      "/images/produtos/halteres-2em1/casal-treinando.jpg",
      "/images/produtos/halteres-2em1/diagrama-funcionamento.jpg",
    ],
    shopeeLink: "https://s.shopee.com.br/3LEcNwHzkw",
    tags: ["Musculação", "Kit 3 em 1", "Ajustável", "20kg"],
    description:
      "Kit Halteres 3 Em 1 Bonafit - Conjunto completo para treino em casa com diferentes cargas e exercícios. Inclui halteres ajustáveis, barra e anilhas para montar até 20kg. Ideal para musculação e treinos funcionais.",
  },
  {
    id: 21,
    name: "Esteira Elétrica Dobrável",
    category: "Equipamentos",
    rating: 4.7,
    reviews: 1500,
    images: [
      "/images/produtos/esteira-dobravel/vista-completa.jpg",
      "/images/produtos/esteira-dobravel/frontal-completa.jpg",
      "/images/produtos/esteira-dobravel/painel-controle.jpg",
      "/images/produtos/esteira-dobravel/base-estrutura.jpg",
      "/images/produtos/esteira-dobravel/detalhes-traseira.jpg",
      "/images/produtos/esteira-dobravel/dobrada-vertical.jpg",
      "/images/produtos/esteira-dobravel/lateral-dobrada.jpg",
    ],
    shopeeLink: "https://s.shopee.com.br/9KVorr8TsD",
    tags: ["Cardio", "Esteira"],
    description:
      "Esteira elétrica dobrável com velocidade até 12km/h e inclinação ajustável.",
  },

  // Roupas Fitness
  {
    id: 3,
    name: "Camiseta Dry Fit Masculina",
    category: "Roupas Fitness",
    rating: 4.7,
    reviews: 2100,
    images: [
      "/images/produtos/camiseta-dry-fit-masculina/IMG-20250527-WA0084.jpg",
      "/images/produtos/camiseta-dry-fit-masculina/IMG-20250527-WA0086.jpg",
      "/images/produtos/camiseta-dry-fit-masculina/IMG-20250527-WA0087.jpg",
    ],
    shopeeLink: "https://s.shopee.com.br/20jEjBPOuE",
    tags: ["Treino", "Conforto", "Dry Fit"],
    description:
      "Camiseta com tecnologia dry fit para máximo conforto durante os treinos. Tecido leve e respirável que mantém você seco durante o exercício.",
  },
  {
    id: 25,
    name: "Legging Feminina Suplex",
    category: "Roupas Fitness",
    rating: 4.6,
    reviews: 1800,
    images: [
      "/images/produtos/legging-feminina-suplex/IMG-20250527-WA0073.jpg",
      "/images/produtos/legging-feminina-suplex/IMG-20250527-WA0074.jpg",
      "/images/produtos/legging-feminina-suplex/IMG-20250527-WA0075.jpg",
      "/images/produtos/legging-feminina-suplex/IMG-20250527-WA0076.jpg",
    ],
    shopeeLink: "https://s.shopee.com.br/30blswcVNA",
    tags: ["Legging", "Feminino", "Suplex"],
    description:
      "Legging em suplex com modelagem anatômica e alta compressão. Ideal para treinos de alta intensidade e yoga.",
  },

  // Acessórios
  {
    id: 5,
    name: "Luvas de Treino Profissionais",
    category: "Acessórios",
    rating: 4.5,
    reviews: 950,
    images: [
      "/images/produtos/luvas-treino/duas-maos-cima.jpg",
      "/images/produtos/luvas-treino/duas-maos-baixo.jpg",
      "/images/produtos/luvas-treino/mao-frente.jpg",
      "/images/produtos/luvas-treino/mao-fechada.jpg",
      "/images/produtos/luvas-treino/descricao.jpg",
      "/images/produtos/luvas-treino/envio.jpg",
    ],
    shopeeLink: "https://s.shopee.com.br/7fNbRmebcP",
    tags: ["Proteção", "Conforto"],
    description:
      "Luvas profissionais para treino com proteção e conforto. Ideal para musculação e crossfit.",
  },
  {
    id: 57,
    name: "Coqueteleira GROWTH 600ml",
    category: "Acessórios",
    rating: 4.7,
    reviews: 850,
    images: [
      "/images/produtos/coqueteleira-growth/IMG-20250527-WA0094.jpg",
      "/images/produtos/coqueteleira-growth/IMG-20250527-WA0095.jpg",
      "/images/produtos/coqueteleira-growth/IMG-20250527-WA0096.jpg",
      "/images/produtos/coqueteleira-growth/IMG-20250527-WA0097.jpg",
      "/images/produtos/coqueteleira-growth/IMG-20250527-WA0098.jpg",
      "/images/produtos/coqueteleira-growth/IMG-20250527-WA0099.jpg",
      "/images/produtos/coqueteleira-growth/IMG-20250527-WA0100.jpg",
    ],
    shopeeLink: "https://s.shopee.com.br/5fcX5N7VZv",
    tags: ["Shaker", "Growth", "600ml"],
    description:
      "Coqueteleira GROWTH 600ml - Shaker de alta qualidade com capacidade de 600ml. Ideal para preparar seus suplementos e shakes.",
  },
  {
    id: 58,
    name: "Balança de Bioimpedância Inteligente",
    category: "Acessórios",
    rating: 4.8,
    reviews: 1200,
    images: [
      "/images/produtos/balanca-inteligente/principal.jpg",
      "/images/produtos/balanca-inteligente/funcionalidades.jpg",
      "/images/produtos/balanca-inteligente/uso-real.jpg",
      "/images/produtos/balanca-inteligente/dimensoes.jpg",
      "/images/produtos/balanca-inteligente/app-detalhes.jpg",
    ],
    shopeeLink: "https://s.shopee.com.br/VuM3r9h0n",
    tags: ["Balança", "Bioimpedância", "Inteligente"],
    description:
      "Balança de Bioimpedância Inteligente - Mede peso, IMC, gordura corporal, massa muscular e muito mais. Conecta-se ao seu smartphone via Bluetooth.",
  },
  {
    id: 59,
    name: "Pistola de Massagem Muscular Profissional",
    category: "Acessórios",
    rating: 4.9,
    reviews: 950,
    images: [
      "/images/produtos/pistola-massagem/kit-completo.jpg",
      "/images/produtos/pistola-massagem/cabecotes-multifuncionais.jpg",
      "/images/produtos/pistola-massagem/especificacoes-tecnicas.jpg",
      "/images/produtos/pistola-massagem/cores-cabecotes.jpg",
      "/images/produtos/pistola-massagem/usos-multiplos.jpg",
      "/images/produtos/pistola-massagem/motor-silencioso.jpg",
      "/images/produtos/pistola-massagem/bateria-3h.jpg",
      "/images/produtos/pistola-massagem/portabilidade.jpg",
    ],
    shopeeLink: "https://s.shopee.com.br/1VmuZMFA5X",
    tags: ["Massagem", "Recuperação", "Profissional"],
    description:
      "Pistola de Massagem Muscular Profissional - Alivia dores musculares, melhora a recuperação e aumenta a circulação sanguínea. 6 níveis de intensidade e 4 cabeçotes intercambiáveis.",
  },

  // Lutas
  {
    id: 6,
    name: "Kimono Jiu-Jitsu A3",
    category: "Lutas",
    rating: 4.8,
    reviews: 420,
    images: [
      "/images/produtos/kimono-jiu-jitsu-a3/Imagem do WhatsApp de 2025-05-27 à(s) 15.24.52_1a7e7816.jpg",
      "/images/produtos/kimono-jiu-jitsu-a3/Imagem do WhatsApp de 2025-05-27 à(s) 15.24.52_5f8fa539.jpg",
      "/images/produtos/kimono-jiu-jitsu-a3/Imagem do WhatsApp de 2025-05-27 à(s) 15.24.52_87cdd985.jpg",
      "/images/produtos/kimono-jiu-jitsu-a3/Imagem do WhatsApp de 2025-05-27 à(s) 15.24.53_64886aea.jpg",
    ],
    shopeeLink: "https://s.shopee.com.br/7ARKoakfYY",
    tags: ["Jiu-Jitsu", "Competição", "A3"],
    description:
      "Kimono de alta qualidade para treinos e competições de Jiu-Jitsu. Tamanho A3.",
  },

  // Musculação
  {
    id: 10,
    name: "Banco Regulável Musculação",
    category: "Musculação",
    rating: 4.8,
    reviews: 1200,
    images: [
      "/images/produtos/banco-regulavel/IMG-20250527-WA0102.jpg",
      "/images/produtos/banco-regulavel/IMG-20250527-WA0103.jpg",
      "/images/produtos/banco-regulavel/IMG-20250527-WA0104.jpg",
      "/images/produtos/banco-regulavel/IMG-20250527-WA0105.jpg",
    ],
    shopeeLink: "https://s.shopee.com.br/4L79RjZMyG",
    tags: ["Banco", "Regulável", "Musculação"],
    description:
      "Banco regulável para diversos exercícios de musculação em casa. Altura ajustável e estrutura resistente.",
  },
];

export function ProductGrid({ categoryFilter }: { categoryFilter?: string }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortBy, setSortBy] = useState("relevance");
  const [selectedProduct, setSelectedProduct] = useState<any>(null);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxImageIndex, setLightboxImageIndex] = useState(0);
  const [lightboxImages, setLightboxImages] = useState<string[]>([]);

  const categories = [
    "all",
    "Suplementos",
    "Equipamentos",
    "Roupas Fitness",
    "Acessórios",
    "Lutas",
    "Musculação",
  ];

  const filteredAndSortedProducts = useMemo(() => {
    const filtered = products.filter((product) => {
      const matchesSearch =
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.tags.some((tag) =>
          tag.toLowerCase().includes(searchTerm.toLowerCase())
        );
      const matchesCategory =
        selectedCategory === "all" || product.category === selectedCategory;
      const matchesCategoryFilter =
        !categoryFilter ||
        (() => {
          const normalizedCategory = product.category
            .toLowerCase()
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
            .replace(/\s+/g, "-");
          const normalizedFilter = categoryFilter.toLowerCase();
          return (
            normalizedCategory === normalizedFilter ||
            normalizedCategory.includes(normalizedFilter) ||
            normalizedFilter.includes(normalizedCategory)
          );
        })();
      return matchesSearch && matchesCategory && matchesCategoryFilter;
    });

    switch (sortBy) {
      case "rating":
        return filtered.sort((a, b) => b.rating - a.rating);
      case "popularity":
        return filtered.sort((a, b) => b.reviews - a.reviews);
      case "newest":
        return filtered.sort((a, b) => b.id - a.id);
      default:
        return filtered;
    }
  }, [searchTerm, selectedCategory, sortBy, categoryFilter]);

  const openProductDetails = (product: any) => {
    setSelectedProduct(product);
  };

  const closeProductDetails = () => {
    setSelectedProduct(null);
  };

  const openLightbox = (images: string[], index: number) => {
    setLightboxImages(images);
    setLightboxImageIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const nextLightboxImage = () => {
    setLightboxImageIndex((prev) => (prev + 1) % lightboxImages.length);
  };

  const prevLightboxImage = () => {
    setLightboxImageIndex(
      (prev) => (prev - 1 + lightboxImages.length) % lightboxImages.length
    );
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Produtos em{" "}
            <span className="bg-gradient-to-r from-green-600 to-green-500 bg-clip-text text-transparent">
              Destaque
            </span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Descubra nossa seleção especial de produtos fitness com os melhores
            preços e qualidade garantida
          </p>
        </div>

        {/* Filtros */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <div className="grid md:grid-cols-3 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
              <Input
                placeholder="Buscar produtos..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>

            <Select
              value={selectedCategory}
              onValueChange={setSelectedCategory}
            >
              <SelectTrigger>
                <SelectValue placeholder="Categoria" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Todas as Categorias</SelectItem>
                {categories.slice(1).map((category) => (
                  <SelectItem key={category} value={category}>
                    {category}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger>
                <SelectValue placeholder="Ordenar por" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="relevance">Relevância</SelectItem>
                <SelectItem value="rating">Melhor Avaliação</SelectItem>
                <SelectItem value="popularity">Mais Popular</SelectItem>
                <SelectItem value="newest">Mais Recentes</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Grid de Produtos */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredAndSortedProducts.map((product) => (
            <Card
              key={product.id}
              className="group hover:shadow-lg transition-all duration-300 overflow-hidden"
            >
              <div className="relative">
                <ProductImageGallery
                  images={product.images}
                  productName={product.name}
                  onImageClick={(index) => openLightbox(product.images, index)}
                />
                <Badge
                  variant="secondary"
                  className="absolute top-2 right-2 z-10"
                >
                  {product.category}
                </Badge>
              </div>

              <CardContent className="p-4">
                <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2">
                  {product.name}
                </h3>

                <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                  {product.description}
                </p>

                <div className="flex items-center gap-1 mb-3">
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <span className="text-sm font-medium">{product.rating}</span>
                  <span className="text-sm text-gray-500">
                    ({product.reviews} avaliações)
                  </span>
                </div>

                <div className="flex flex-wrap gap-1 mb-4">
                  {product.tags.slice(0, 3).map((tag) => (
                    <Badge key={tag} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                  {product.tags.length > 3 && (
                    <Badge variant="outline" className="text-xs">
                      +{product.tags.length - 3}
                    </Badge>
                  )}
                </div>

                <div className="space-y-2">
                  <Button
                    variant="outline"
                    className="w-full"
                    onClick={() => openProductDetails(product)}
                  >
                    Ver Detalhes
                    <Info className="ml-2 h-4 w-4" />
                  </Button>

                  <Button
                    className="w-full bg-gradient-to-r from-green-600 to-green-500 hover:from-green-700 hover:to-green-600"
                    onClick={() => window.open(product.shopeeLink, "_blank")}
                  >
                    Ver Ofertas na Shopee
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredAndSortedProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">Nenhum produto encontrado</p>
            <p className="text-gray-400">Tente ajustar os filtros de busca</p>
          </div>
        )}
      </div>

      {/* Modal de Detalhes do Produto */}
      {selectedProduct && (
        <ProductDetailsModal
          product={selectedProduct}
          isOpen={!!selectedProduct}
          onClose={closeProductDetails}
        />
      )}

      {/* Lightbox de Imagens */}
      <ImageLightbox
        images={lightboxImages}
        currentIndex={lightboxImageIndex}
        isOpen={lightboxOpen}
        onClose={closeLightbox}
        onNext={nextLightboxImage}
        onPrev={prevLightboxImage}
      />
    </section>
  );
}
