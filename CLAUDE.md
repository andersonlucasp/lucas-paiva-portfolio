# Lucas Paiva — Portfolio

## Contexto do projeto
Portfolio pessoal de Lucas Paiva, Senior Product Designer. Inspirado visualmente no template [Xenith (Webflow)](https://xenith-design.webflow.io/). Conteúdo baseado no portfolio atual em [lucaspaiva.framer.website](https://lucaspaiva.framer.website).

## Stack
- **Vite** + **React 18** + **Tailwind CSS v3**
- Font: **Space Grotesk** (Google Fonts)
- Sem roteamento por enquanto — single page
- Deploy alvo: Vercel ou Netlify (zero config com Vite)

## Estrutura
```
src/
  components/
    Navbar.jsx        ← fixed, blur on scroll
    Hero.jsx          ← fullscreen photo + text overlay + thumbnails
    About.jsx         ← 2-col: bio + stats + photos
    Specialties.jsx   ← full-bleed image section
    Work.jsx          ← ghost text + 3 project cards + circular CTA
    Process.jsx       ← 6-step grid
    Testimonials.jsx  ← ticker animation + cards
    FAQ.jsx           ← accordion (useState)
    Contact.jsx       ← 2-col: info + form
    Footer.jsx        ← large wordmark
  App.jsx             ← monta todos os componentes, scroll reveal via IntersectionObserver
  index.css           ← Tailwind directives + custom CSS (ghost, ticker, FAQ, hero-img, etc.)
public/
  hero.jpg            ← foto do Lucas (perfil dramático, fundo vermelho) — adicionar aqui
```

## Estilo visual (Xenith-inspired)
- Fundo escuro: `#0b0b0b` (bg), `#111111` (bg-2)
- Tipografia bold, tracking muito apertado (`-0.04em`), uppercase nos títulos
- Hero: foto full-bleed com overlay gradiente + texto grande no canto inferior esquerdo
- Ghost text: `rgba(255,255,255,0.04)` em títulos decorativos de seção
- Ticker: animação CSS infinita com tags de skills
- CTA circular: botão redondo branco "GOT AN IDEA?" no canto da seção Work
- Cards de projeto com overlay escuro e tags no topo esquerdo

## Imagens
- **Hero**: `public/hero.jpg` — foto real do Lucas (perfil, óculos, fundo vermelho dramático)
- Thumbs, about, projetos, testimonials: ainda usando Unsplash como placeholder
- Trocar os placeholders pelas imagens reais é a próxima prioridade

## Dados reais do Lucas
- **Cargo**: Senior Product Designer
- **Empresa atual**: Itaú Unibanco (Design Ops + Design System, 40+ segmentos)
- **Experiência**: 5+ anos
- **Projetos no portfólio**: Design System Itaú Unibanco (2025), Elo Website Redesign (2023), Sukinho Rebranding (2023)
- **Email**: andersonlucaspz@gmail.com
- **Localização**: São Paulo, Brazil

## Próximos passos sugeridos
1. Adicionar `hero.jpg` na pasta `public/` (foto já definida)
2. Substituir imagens Unsplash por imagens reais dos projetos
3. Criar páginas de case study para cada projeto
4. Conectar formulário de contato (Formspree, EmailJS ou similar)
5. Deploy no Vercel: `vercel --prod` ou conectar repo GitHub

## Comandos úteis
```bash
npm install     # instalar dependências
npm run dev     # rodar em localhost:5173
npm run build   # build para produção (gera /dist)
npm run preview # preview do build
```

## Git
```bash
git init && git branch -M main
git add . && git commit -m "feat: initial portfolio"
git remote add origin https://github.com/SEU_USUARIO/lucas-paiva-portfolio.git
git push -u origin main
```
