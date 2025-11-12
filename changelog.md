# 🧾 CHANGELOG — Versão 1.0.0  
**Data de Lançamento:** 11/11/2025  
**Autor:** Cristiano Oliveira  

---

## ✨ Novidades  
- Desenvolvimento completo do **portfólio pessoal** utilizando **HTML, CSS e JavaScript modular**.  
- Implementação do **modo escuro e claro** com alternância dinâmica via botão (`themeToggle.js`).  
- Estrutura sólida e **organizada de forma profissional**, com separação entre **componentes**, **layout**, **seções** e **temas**.  

---

## 🧩 Estrutura e Organização  
**Pastas principais:**  
- `assets/css/components` → Botões, ícones e tipografia.  
- `assets/css/layout` → Header, footer, menu mobile e responsividade.  
- `assets/css/sections` → Seções específicas (perfil, carreira, educação, projetos, contato).  
- `assets/css/theme` → Temas independentes (`dark-theme.css` e `light-theme.css`).  
- `assets/js` → Scripts segmentados por função (`core`, `ui`, `sections`).  

**Principais bibliotecas utilizadas:**  
- [Font Awesome](https://fontawesome.com/) — ícones vetoriais.  
- [Bootstrap 5.3.3](https://getbootstrap.com/) — grid e utilitários responsivos.  
- [jQuery 3.6](https://jquery.com/) — manipulação dinâmica do DOM.  
- [ScrollReveal](https://scrollrevealjs.org/) — animações de entrada nas seções.  

---

## 🌙 Tema Dark/Light  
- Alternância dinâmica entre **modo escuro** e **modo claro**, com transições suaves.  
- Gradientes, fundos e variáveis de cor independentes em cada tema.  
- Textos, ícones e hovers ajustados para **contraste ideal e acessibilidade**.  
- Botão de alternância presente no **menu desktop** e no **menu mobile**.  
- Arquitetura de tema baseada em **CSS Custom Properties (`:root`)**, garantindo manutenção fácil.  

---

## 💬 Interações e Funcionalidades  
- **Menu mobile animado**, com botão de abertura e fechamento intuitivo.  
- **ScrollReveal** configurado para efeitos de entrada elegantes em todas as seções.  
- **Formulário de contato funcional** via [Formspree](https://formspree.io/).  
- **Accordion** na seção *“Minha Trajetória”*, exibindo experiências e carreira.  
- **Botões com gradientes dinâmicos e efeitos de hover animado**.  
- **Rolagem suave entre seções** com `scroll-behavior: smooth`.  

---

## 🧠 Melhorias Técnicas  
- Uso de **`clamp()`** e **`flexbox`** para um dimensionamento fluido e responsivo.  
- Códigos CSS **modularizados, otimizados e reutilizáveis**.  
- Estilos globais consolidados em `main.css` para consistência visual.  
- Estrutura **HTML5 semântica e acessível**.  
- JavaScript **organizado em módulos independentes**, garantindo escalabilidade e manutenção simples.  

---

## 🧰 Scripts Principais  
| Script | Função |
|--------|--------|
| `resetInputs.js` | Limpa os campos do formulário após o envio. |
| `mobileMenu.js` | Controla a abertura e o fechamento do menu mobile. |
| `themeToggle.js` | Alterna entre os temas escuro e claro. |
| `scrollAnimations.js` | Gerencia as animações de entrada com ScrollReveal. |
| `accordionCareer.js` | Controla a expansão dos itens de carreira (accordion). |
| `main.js` | Responsável pela inicialização geral e integração de todos os módulos. |

---

## 🧾 Resumo Final  
O projeto foi finalizado com uma **estrutura profissional, responsiva e moderna**, totalmente preparada para expansão.  
O sistema de **modo escuro e claro** está funcional e refinado, com **gradientes consistentes, hovers elegantes e código limpo**.  
Tudo foi desenvolvido com foco em **organização, desempenho e experiência do usuário**.  

---
