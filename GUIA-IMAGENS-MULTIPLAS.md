# 📸 GUIA COMPLETO - MÚLTIPLAS IMAGENS POR PRODUTO

## 📁 NOVA ESTRUTURA DE PASTAS

Agora cada produto tem sua própria pasta com múltiplas imagens:

\`\`\`
public/
├── images/
│   ├── produtos/
│   │   ├── whey-protein/
│   │   │   ├── principal.jpg          # Imagem principal do produto
│   │   │   ├── rotulo.jpg             # Rótulo/informações
│   │   │   ├── tabela-nutricional.jpg # Tabela nutricional
│   │   │   └── uso.jpg                # Como usar
│   │   ├── creatina/
│   │   │   ├── principal.jpg
│   │   │   ├── rotulo.jpg
│   │   │   ├── pote-aberto.jpg
│   │   │   └── dosagem.jpg
│   │   ├── halteres/
│   │   │   ├── principal.jpg
│   │   │   ├── ajuste.jpg
│   │   │   ├── uso.jpg
│   │   │   └── detalhes.jpg
│   │   └── [outros produtos...]
│   ├── banner/
│   │   └── hero-banner.jpg            # Banner principal
│   └── logo/
│       └── logo.png                   # Logo da empresa
\`\`\`

## 🛍️ PRODUTOS COM MÚLTIPLAS IMAGENS

### 💊 **SUPLEMENTOS**

#### **Whey Protein** (public/images/produtos/whey-protein/)
- `principal.jpg` - Produto principal (frente do pote)
- `rotulo.jpg` - Rótulo com informações
- `tabela-nutricional.jpg` - Tabela nutricional
- `uso.jpg` - Como preparar/usar

#### **Creatina** (public/images/produtos/creatina/)
- `principal.jpg` - Produto principal
- `rotulo.jpg` - Rótulo/informações
- `pote-aberto.jpg` - Pote aberto mostrando o pó
- `dosagem.jpg` - Como dosar

#### **BCAA** (public/images/produtos/bcaa/)
- `principal.jpg` - Frasco principal
- `capsulas.jpg` - Cápsulas soltas
- `informacoes.jpg` - Informações do produto

### 🏋️ **EQUIPAMENTOS**

#### **Halteres** (public/images/produtos/halteres/)
- `principal.jpg` - Halteres montados
- `ajuste.jpg` - Sistema de ajuste
- `uso.jpg` - Pessoa usando
- `detalhes.jpg` - Detalhes da construção

#### **Esteira** (public/images/produtos/esteira/)
- `principal.jpg` - Esteira montada
- `dobrada.jpg` - Esteira dobrada
- `painel.jpg` - Painel de controle
- `uso.jpg` - Pessoa usando

### 👕 **ROUPAS FITNESS**

#### **Camiseta Masculina** (public/images/produtos/camiseta-masculina/)
- `frente.jpg` - Vista frontal
- `costas.jpg` - Vista das costas
- `lateral.jpg` - Vista lateral
- `detalhes.jpg` - Detalhes do tecido

#### **Legging Feminina** (public/images/produtos/legging-feminina/)
- `frente.jpg` - Vista frontal
- `costas.jpg` - Vista das costas
- `lateral.jpg` - Vista lateral
- `tecido.jpg` - Detalhes do tecido

### 🧤 **ACESSÓRIOS**

#### **Luvas** (public/images/produtos/luvas/)
- `principal.jpg` - Par de luvas
- `palma.jpg` - Palma das luvas (grip)
- `uso.jpg` - Luvas sendo usadas

#### **Shaker** (public/images/produtos/shaker/)
- `principal.jpg` - Shaker fechado
- `compartimento.jpg` - Compartimento aberto
- `uso.jpg` - Shaker sendo usado

### 🥋 **LUTAS**

#### **Kimono** (public/images/produtos/kimono/)
- `principal.jpg` - Kimono completo
- `detalhes.jpg` - Detalhes da costura
- `uso.jpg` - Kimono sendo usado

### 💪 **MUSCULAÇÃO**

#### **Banco** (public/images/produtos/banco/)
- `principal.jpg` - Banco na posição neutra
- `inclinado.jpg` - Banco inclinado
- `reto.jpg` - Banco reto
- `uso.jpg` - Banco sendo usado

## 🎨 **TIPOS DE IMAGENS RECOMENDADAS**

### **Para cada produto, inclua:**

1. **📷 Principal** - Imagem principal do produto
2. **📋 Informações** - Rótulo, especificações, tabela nutricional
3. **🔧 Detalhes** - Detalhes de construção, materiais, acabamento
4. **👤 Uso** - Produto sendo usado por uma pessoa
5. **📐 Dimensões** - Diferentes ângulos, tamanhos, cores

## 📐 **ESPECIFICAÇÕES TÉCNICAS**

### **Tamanhos Recomendados:**
- **Produtos**: 400x400px ou 600x600px
- **Banner**: 800x800px ou maior
- **Logo**: 64x64px, 128x128px, 256x256px

### **Formatos:**
- **JPG**: Para fotos de produtos
- **PNG**: Para logos e imagens com transparência
- **WebP**: Para melhor compressão (opcional)

### **Qualidade:**
- **Resolução**: Mínimo 300x300px
- **Tamanho**: Máximo 500KB por imagem
- **Qualidade**: 80-90% para JPG

## 🚀 **FUNCIONALIDADES IMPLEMENTADAS**

### ✅ **Galeria de Imagens:**
- Navegação com setas
- Indicadores de posição
- Contador de imagens
- Hover para mostrar controles

### ✅ **Responsividade:**
- Funciona em mobile e desktop
- Touch/swipe friendly
- Carregamento otimizado

### ✅ **UX Melhorada:**
- Transições suaves
- Feedback visual
- Fallback para imagens não encontradas

## 📝 **COMO ADICIONAR NOVOS PRODUTOS**

1. **Crie a pasta** do produto em `public/images/produtos/`
2. **Adicione as imagens** seguindo a nomenclatura
3. **Atualize o array** de produtos no código
4. **Teste** a navegação das imagens

## 🔄 **PRÓXIMOS PASSOS**

Depois de adicionar as imagens:
- [ ] Otimização automática de imagens
- [ ] Lazy loading
- [ ] Zoom nas imagens
- [ ] Lightbox/modal para visualização ampliada
- [ ] Compressão automática

---

**🎯 Agora cada produto pode ter até 4+ imagens diferentes para mostrar todos os detalhes!**
