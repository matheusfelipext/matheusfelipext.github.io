/* =========================================================
   Portfólio — Matheus Felipe · script.js
   Sem dependências. Funções: idioma PT/EN, tema claro/escuro,
   brilho que segue o cursor nos cards, animação de entrada,
   marquee, cartela de bingo e botão de copiar e-mail.
   ========================================================= */

(function () {
  "use strict";

  /* ---------- Textos PT/EN ---------- */
  const I18N = {
    "nav.projetos": { pt: "Projetos", en: "Projects" },
    "nav.habilidades": { pt: "Habilidades", en: "Skills" },
    "nav.experiencia": { pt: "Experiência", en: "Experience" },
    "nav.certificados": { pt: "Certificados", en: "Certificates" },
    "nav.contato": { pt: "Contato", en: "Contact" },
    "theme": { pt: "Alternar tema", en: "Toggle theme" },

    "hero.status": { pt: "Disponível para vagas júnior e estágio", en: "Open to junior and internship roles" },
    "hero.role": { pt: "Desenvolvedor Web Júnior", en: "Junior Web Developer" },
    "hero.text": {
      pt: "Estudante de Análise e Desenvolvimento de Sistemas no UNISAL e Técnico de Informática na InterOP. Construo sistemas web com HTML, CSS e JavaScript, programo em C e busco minha primeira oportunidade como desenvolvedor.",
      en: "Systems Analysis and Development student at UNISAL and IT Technician at InterOP. I build web systems with HTML, CSS and JavaScript, program in C and I'm looking for my first opportunity as a developer.",
    },
    "hero.projects": { pt: "Ver projetos", en: "See projects" },
    "hero.cv": { pt: "Currículo", en: "Résumé" },
    "hero.photo": { pt: "foto em breve", en: "photo soon" },

    "term.role": { pt: "cargo", en: "role" },
    "term.roleValue": { pt: "Técnico de Informática", en: "IT Technician" },
    "term.degree": { pt: "curso", en: "degree" },
    "term.status": { pt: "aberto a vagas", en: "open to work" },
    "mini.now": { pt: "agora", en: "now" },
    "mini.nowValue": { pt: "Técnico de Informática na InterOP", en: "IT Technician at InterOP" },
    "mini.local": { pt: "local", en: "based in" },

    "projects.sub": {
      pt: "Projetos e exercícios da faculdade, com o código aberto no GitHub.",
      en: "College projects and exercises, with open source code on GitHub.",
    },
    "projects.featured": { pt: "destaque", en: "featured" },
    "projects.code": { pt: "Ver código", en: "View code" },

    "bingo.kicker": { pt: "Programa em C", en: "C program" },
    "bingo.title": { pt: "Gerador de Cartelas de Bingo", en: "Bingo Card Generator" },
    "bingo.desc": {
      pt: "Gera cartelas seguindo as regras oficiais: colunas B-I-N-G-O com faixas de valores, espaço livre no centro e números sem repetição. Aceita a quantidade escolhida pelo usuário, ordena cada coluna e garante que nenhuma cartela se repita.",
      en: "Generates cards following the official rules: B-I-N-G-O columns with value ranges, a free center space and no repeated numbers. Accepts the amount chosen by the user, sorts each column and guarantees no card repeats.",
    },
    "bingo.try": {
      pt: "Experimente ao lado — a mesma lógica do programa, rodando no navegador.",
      en: "Try it here — the same logic as the program, running in your browser.",
    },
    "bingo.generate": { pt: "Gerar", en: "Generate" },

    "lab.new": { pt: "novo", en: "new" },
    "lab.free": { pt: "livre", en: "free" },
    "lab.inuse": { pt: "em uso", en: "in use" },
    "lab.kicker": { pt: "Gestão de laboratórios", en: "Lab management" },
    "lab.desc": {
      pt: "Site para gerenciar laboratórios de informática, com login, cadastro, lista de laboratórios, equipamentos e galeria. Feito para a disciplina de front-end, com layout consistente entre todas as páginas.",
      en: "Website to manage computer labs, with login, sign-up, lab list, equipment and gallery. Built for the front-end course, with a consistent layout across every page.",
    },

    "ex.kicker": { pt: "Lições da faculdade", en: "College lessons" },
    "ex.title": { pt: "Exercícios em C", en: "C Exercises" },
    "ex.desc": {
      pt: "Exercícios resolvidos da disciplina de Linguagem C, com vetores, matrizes, strings e funções.",
      en: "Solved exercises from the C Language course, covering arrays, matrices, strings and functions.",
    },
    "ex.link1": { pt: "Exercícios", en: "Exercises" },
    "ex.link2": { pt: "Aula 2", en: "Lesson 2" },

    "skills.sub": { pt: "O que uso no dia a dia — do código ao suporte técnico.", en: "What I use every day — from code to tech support." },
    "sk.htmlcss": { pt: "HTML e CSS", en: "HTML & CSS" },
    "sk.langs": { pt: "Linguagens", en: "Languages" },
    "sk.data": { pt: "Dados", en: "Data" },
    "sk.infra": { pt: "Infraestrutura", en: "Infrastructure" },
    "sk.net": { pt: "Redes e hardware", en: "Networks & hardware" },
    "sk.support": { pt: "Suporte técnico", en: "Technical support" },
    "sk.git": { pt: "Git e GitHub", en: "Git & GitHub" },

    "exp.sub": { pt: "Trabalho em TI e formação acadêmica.", en: "IT work and education." },
    "exp.work": { pt: "trabalho", en: "work" },
    "exp.edu": { pt: "formação", en: "education" },
    "exp.current": { pt: "atual", en: "current" },
    "exp1.period": { pt: "Jul 2026 — atual", en: "Jul 2026 — present" },
    "exp1.title": { pt: "Técnico de Informática", en: "IT Technician" },
    "exp1.desc": {
      pt: "Manutenção preventiva e corretiva, suporte e assessoria especializada na área de Tecnologia da Informação.",
      en: "Preventive and corrective maintenance, support and specialized IT consulting.",
    },
    "exp2.title": { pt: "Apoio Técnico Operacional", en: "Operational Technical Support" },
    "exp2.desc": {
      pt: "Apoio técnico e operacional em TI. Promovido a Técnico de Informática em julho de 2026.",
      en: "Technical and operational IT support. Promoted to IT Technician in July 2026.",
    },
    "exp3.period": { pt: "2026 — atual", en: "2026 — present" },
    "exp3.title": {
      pt: "Tecnólogo em Análise e Desenvolvimento de Sistemas",
      en: "Associate Degree in Systems Analysis and Development",
    },
    "exp4.period": { pt: "Concluído em 2024", en: "Completed in 2024" },
    "exp4.title": { pt: "Curso Técnico em TI (CPDB)", en: "IT Technical Course (CPDB)" },

    "cert.sub": { pt: "Cursos e certificações concluídos.", en: "Completed courses and certifications." },
    "cert1.title": { pt: "Técnico em Tecnologia da Informação", en: "Information Technology Technician" },

    "contact.l1": { pt: "Vamos", en: "Let's" },
    "contact.l2": { pt: "conversar", en: "talk" },
    "contact.text": {
      pt: "Estou aberto a vagas de desenvolvedor web júnior e estágio.",
      en: "I'm open to junior web developer and internship roles.",
    },
    "contact.send": { pt: "Enviar e-mail", en: "Send e-mail" },
    "contact.copied": { pt: "E-mail copiado!", en: "E-mail copied!" },
    "footer.coffee": { pt: "feito com café", en: "made with coffee" },
  };

  const EMAIL = "souzamatheusfelipepires@gmail.com";
  let lang = "pt";

  function t(key) {
    const s = I18N[key];
    return s ? s[lang] : key;
  }

  function applyLang(next) {
    lang = next === "en" ? "en" : "pt";
    document.documentElement.lang = lang === "pt" ? "pt-BR" : "en";
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      el.textContent = t(el.getAttribute("data-i18n"));
    });
    document.querySelectorAll("[data-i18n-aria]").forEach((el) => {
      el.setAttribute("aria-label", t(el.getAttribute("data-i18n-aria")));
    });
    document.querySelectorAll(".lang-btn").forEach((b) => {
      b.setAttribute("aria-pressed", String(b.dataset.lang === lang));
    });
    try { localStorage.setItem("lang", lang); } catch (e) {}
  }

  /* ---------- Tema ---------- */
  function toggleTheme() {
    const light = document.documentElement.classList.toggle("light");
    try { localStorage.setItem("theme", light ? "light" : "dark"); } catch (e) {}
  }

  /* ---------- Brilho que segue o cursor ---------- */
  window.addEventListener("pointermove", (e) => {
    const el = e.target && e.target.closest ? e.target.closest(".card-surface") : null;
    if (!el) return;
    const r = el.getBoundingClientRect();
    el.style.setProperty("--mx", (e.clientX - r.left) + "px");
    el.style.setProperty("--my", (e.clientY - r.top) + "px");
  }, { passive: true });

  /* ---------- Animação de entrada ao rolar ---------- */
  function setupReveal() {
    const els = document.querySelectorAll(".reveal");
    if (!("IntersectionObserver" in window)) {
      els.forEach((el) => el.classList.add("is-visible"));
      return;
    }
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    els.forEach((el) => io.observe(el));
  }

  /* ---------- Marquee ---------- */
  function setupMarquee() {
    const items = ["HTML", "CSS", "JavaScript", "C", "Java", "Python", "SQL", "Figma", "Git", "Redes", "Hardware"];
    const row = items.concat(items);
    const wrap = document.getElementById("marquee");
    wrap.innerHTML = row.map((x) => `<span class="display">${x}<i>✦</i></span>`).join("");
  }

  /* ---------- Bingo (mesma regra do programa em C) ----------
     Colunas B-I-N-G-O: cada coluna sorteia 5 números únicos da
     sua faixa de 15, ordena, e o centro da coluna N é livre. */
  const BINGO_LETTERS = ["B", "I", "N", "G", "O"];

  function seededRandom(seed) {
    let a = seed >>> 0;
    return function () {
      a = (a + 0x6d2b79f5) >>> 0;
      let t = a;
      t = Math.imul(t ^ (t >>> 15), t | 1);
      t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
  }

  function generateCard(rand) {
    rand = rand || Math.random;
    return BINGO_LETTERS.map((_, col) => {
      const min = col * 15 + 1;
      const pool = [];
      for (let i = 0; i < 15; i++) pool.push(min + i);
      for (let i = pool.length - 1; i > 0; i--) {
        const j = Math.floor(rand() * (i + 1));
        const tmp = pool[i]; pool[i] = pool[j]; pool[j] = tmp;
      }
      const picked = pool.slice(0, 5).sort((a, b) => a - b);
      if (col === 2) picked[2] = null;
      return picked;
    });
  }

  function renderBingo(card) {
    const grid = document.getElementById("bingo-grid");
    let html = BINGO_LETTERS.map((l) => `<div class="bingo-letter">${l}</div>`).join("");
    for (let row = 0; row < 5; row++) {
      for (let c = 0; c < 5; c++) {
        const n = card[c][row];
        const delay = (row * 5 + c) * 18;
        html += `<div class="bingo-cell rise" style="animation-delay:${delay}ms">${n === null ? '<span class="accent">★</span>' : n}</div>`;
      }
    }
    grid.innerHTML = html;
  }

  /* ---------- Copiar e-mail ---------- */
  function setupCopy() {
    const btn = document.getElementById("copy-email");
    const label = btn.querySelector(".copy-label");
    let timer = null;
    btn.addEventListener("click", async () => {
      try {
        await navigator.clipboard.writeText(EMAIL);
        btn.classList.add("copied");
        label.textContent = t("contact.copied");
        clearTimeout(timer);
        timer = setTimeout(() => {
          btn.classList.remove("copied");
          label.textContent = EMAIL;
        }, 2000);
      } catch (e) {
        window.location.href = "mailto:" + EMAIL;
      }
    });
  }

  /* ---------- Início ---------- */
  document.addEventListener("DOMContentLoaded", () => {
    let saved = "pt";
    try { saved = localStorage.getItem("lang") || "pt"; } catch (e) {}
    applyLang(saved);

    document.querySelectorAll(".lang-btn").forEach((b) => {
      b.addEventListener("click", () => {
        applyLang(b.dataset.lang);
        // o rótulo do botão de copiar não tem data-i18n, mantém o e-mail
      });
    });
    document.getElementById("theme-toggle").addEventListener("click", toggleTheme);

    setupReveal();
    setupMarquee();
    renderBingo(generateCard(seededRandom(2026)));
    document.getElementById("bingo-generate").addEventListener("click", () => renderBingo(generateCard()));
    setupCopy();
  });
})();
