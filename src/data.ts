import {
  BenefitItem,
  ProblemItem,
  InsideItem,
  CuriosityItem,
  DifferentialItem,
  TestimonialItem,
  FAQItem
} from "./types";

export const HERO_DATA = {
  badge: "LANÇAMENTO EXCLUSIVO • GUIA DIGITAL PDF",
  title: "Proteja seu sofá contra imprevistos com o método de resgate rápido de tecidos",
  subtitle: "Descubra como agir nos primeiros minutos para remover derramamentos comuns e neutralizar odores sem descolorir, desgastar ou comprometer as fibras do seu estofado.",
  ctaText: "Garantir Meu Guia SOS",
  subCtaText: "Acesso imediato no e-mail • Pagamento único e seguro",
  threeBenefits: [
    {
      id: "b1",
      title: "Resgate em 5 minutos",
      description: "O protocolo rápido de primeiros socorros para evitar a fixação da mancha.",
      iconName: "Clock"
    },
    {
      id: "b2",
      title: "Preservação do tecido",
      description: "Técnicas delicadas que respeitam a integridade e cor original das fibras.",
      iconName: "ShieldCheck"
    },
    {
      id: "b3",
      title: "Materiais acessíveis",
      description: "Como usar itens seguros de consulta imediata sem receitas perigosas.",
      iconName: "Sparkles"
    }
  ]
};

export const PROBLEM_DATA = {
  sectionTitle: "Os imprevistos acontecem todos os dias.",
  sectionSubtitle: "Você conhece aquela sensação de pânico quando algo cai no seu sofá novo? Basta um segundo de distração para colocar em risco um móvel que custou caro.",
  problems: [
    {
      id: "p1",
      title: "Acidentes com Alimentos e Bebidas",
      description: "Aquele café fumegante pela manhã, a taça de vinho tinto relaxante no fim de semana ou o molho de tomate que escorre do prato durante o filme.",
      iconName: "Coffee"
    },
    {
      id: "p2",
      title: "Brincadeiras e Criatividade Infantil",
      description: "Canetinhas, tintas guache, giz de cera nas mãos dos pequenos e o temido slime que seca e gruda nas fibras em questão de minutos.",
      iconName: "Baby"
    },
    {
      id: "p3",
      title: "Incidentes com Pets",
      description: "Urina com odor penetrante, vômitos repentinos, lama trazida nas patinhas após o passeio e o acúmulo de pelos impregnados.",
      iconName: "Dog"
    },
    {
      id: "p4",
      title: "Cosméticos e Autocuidado",
      description: "A queda acidental de bases cremosas, batons de alta pigmentação, protetores solares oleosos ou manchas amareladas de cremes hidratantes.",
      iconName: "Sparkles"
    },
    {
      id: "p5",
      title: "Materiais de Escritório",
      description: "O risco acidental de caneta esferográfica azul ou preta, marca-textos fluorescentes ou a derramada tinta de impressora no home office.",
      iconName: "PenTool"
    },
    {
      id: "p6",
      title: "Visitas Inesperadas e Pequenos Caos",
      description: "Aquela reunião com amigos onde alguém deixa cair um petisco oleoso ou a poeira e fuligem que entram pela janela aberta e escurecem os braços do estofado.",
      iconName: "Users"
    }
  ]
};

export const IMAGINE_DATA = {
  title: "Imagine viver com a tranquilidade de saber exatamente o que fazer.",
  description: "Não seria maravilhoso receber amigos, deixar as crianças brincarem livremente e ter seus pets por perto sem o medo constante de estragar o sofá? Com o conhecimento correto, você elimina o estresse. O derramamento acontece, você sorri, abre o seu celular, segue o passo indicado e resolve a situação em minutos — de forma silenciosa, eficiente e segura.",
  bulletPoints: [
    "Receber convidados sem se preocupar com respingos acidentais de bebidas.",
    "Preservar a aparência de recém-saído da loja por muito mais tempo.",
    "Eliminar odores na raiz, em vez de apenas disfarçá-los com perfumes fortes.",
    "Poder agir imediatamente em qualquer dia ou hora, sem esperar por uma empresa."
  ]
};

export const BENEFITS_DATA = {
  sectionTitle: "A transformação que o manual traz para a sua rotina",
  sectionSubtitle: "Sem enrolação, sem teorias complexas e sem termos químicos difíceis. Um guia prático feito para o mundo real.",
  list: [
    {
      id: "eb1",
      title: "Agir com precisão cirúrgica",
      description: "Saiba exatamente qual atitude tomar no segundo seguinte ao acidente, evitando que a substância penetre na espuma do sofá.",
      iconName: "Zap"
    },
    {
      id: "eb2",
      title: "Evitar os 10 erros fatais",
      description: "Descubra quais são as práticas comuns que as pessoas fazem por impulso e que acabam fixando a mancha ou desgastando a cor para sempre.",
      iconName: "AlertTriangle"
    },
    {
      id: "eb3",
      title: "Identificar o tecido sem dúvidas",
      description: "Aprenda a ler as etiquetas e a reconhecer se o seu sofá exige lavagem a seco, produtos específicos ou cuidados ultra-delicados.",
      iconName: "Tag"
    },
    {
      id: "eb4",
      title: "Economizar milhares de reais",
      description: "Evite contratar serviços de higienização profissional de urgência ou ter que trocar o estofado antes da hora por causa de uma única mancha mal resolvida.",
      iconName: "DollarSign"
    },
    {
      id: "eb5",
      title: "Mais tranquilidade na casa",
      description: "Crie um ambiente mais leve, sem a neurose de proibir alimentos ou brincadeiras perto do estofado devido ao medo de acidentes.",
      iconName: "Smile"
    },
    {
      id: "eb6",
      title: "Vida útil estendida",
      description: "Adote uma rotina simples de manutenção diária, semanal e mensal para manter as fibras limpas, respirando e livres de ácaros.",
      iconName: "Heart"
    }
  ]
};

export const WHAT_INSIDE_DATA = {
  sectionTitle: "O que você vai encontrar no Guia Digital",
  sectionSubtitle: "Uma estrutura focada em consulta imediata. Desenvolvido para que você encontre a resposta exata em menos de 15 segundos.",
  items: [
    {
      id: "wi1",
      badge: "MÓDULO 1",
      title: "O Protocolo de Emergência dos Primeiros 5 Minutos",
      subtitle: "Os passos vitais e o que NUNCA fazer sob pressão",
      description: "A sequência ordenada de ações que impede que substâncias ácidas, oleosas ou pigmentadas criem vínculos permanentes com as fibras têxteis. Apenas o resgate seguro inicial."
    },
    {
      id: "wi2",
      badge: "MÓDULO 2",
      title: "O Mapa Secreto dos Tecidos",
      subtitle: "Suede, Linho, Veludo, Couro e mais de 10 variações",
      description: "Como mapear e identificar qual é o comportamento de cada fibra ao entrar em contato com a umidade, descobrindo o que é expressamente proibido para cada tipo de estofado."
    },
    {
      id: "wi3",
      badge: "MÓDULO 3",
      title: "Manual de Resolução para mais de 50 Tipos de Manchas",
      subtitle: "Substâncias do dia a dia organizadas por categorias",
      description: "As diretrizes gerais e os cuidados específicos para remover marcas de alimentos, bebidas, tintas escolares, cosméticos pesados, sujeiras biológicas e pequenos acidentes domésticos."
    },
    {
      id: "wi4",
      badge: "MÓDULO 4",
      title: "Tabela Inteligente de Compatibilidade",
      subtitle: "O guia de consulta rápida ultrarrápida",
      description: "Uma matriz visual projetada para que, em uma rápida passada de olhos pelo celular, você saiba a gravidade da mancha, o tempo limite para agir e quais substâncias são compatíveis."
    },
    {
      id: "wi5",
      badge: "MÓDULO 5",
      title: "Checklist de Manutenção Preventiva",
      subtitle: "Rotina de cuidados simples",
      description: "Um cronograma com ações de 1 minuto para o dia a dia, cuidados semanais, limpezas mensais e renovações anuais para blindar seu sofá contra o envelhecimento precoce."
    },
    {
      id: "wi6",
      badge: "MÓDULO 6",
      title: "Seção SOS: Mitos e Verdades desvendados",
      subtitle: "Bicarbonato, vinagre, calor e outros elementos comuns",
      description: "A ciência por trás do resgate doméstico: quando essas substâncias ajudam de verdade e quando elas podem causar um desastre irreversível no tecido."
    }
  ]
};

export const CURIOSITIES_DATA = {
  sectionTitle: "A ciência oculta por trás das fibras do seu sofá",
  sectionSubtitle: "Pequenos detalhes técnicos que mudam totalmente o resultado de uma limpeza.",
  curiosities: [
    {
      id: "c1",
      fact: "Você sabia que a água morna ou quente pode fixar algumas manchas para sempre?",
      explanation: "Substâncias ricas em proteínas ou certos pigmentos orgânicos sofrem um processo de coagulação sob o calor. Se você aplicar calor sobre elas, as moléculas se fixam permanentemente nas fibras, tornando a mancha praticamente impossível de ser removida."
    },
    {
      id: "c2",
      fact: "Você sabia que esfregar com força é o pior erro que você pode cometer?",
      explanation: "Ao esfregar vigorosamente uma mancha recente, você não a está removendo, mas sim empurrando as partículas para o fundo das tramas do tecido e danificando a textura delicada da fibra, criando aquela famosa área esbranquiçada ou desgastada."
    },
    {
      id: "c3",
      fact: "Você sabia que misturar produtos de limpeza comuns pode gerar reações perigosas?",
      explanation: "A combinação de substâncias químicas caseiras, como vinagre e alvejantes à base de cloro, pode criar gases altamente tóxicos e também anular os princípios ativos de limpeza, criando compostos corrosivos que corroem a base do estofado."
    },
    {
      id: "c4",
      fact: "Você sabia que cada tipo de tecido possui uma linguagem de etiqueta universal?",
      explanation: "As letras 'P', 'W', 'F' ou 'O' que aparecem na etiqueta do fabricante determinam se o estofado suporta apenas solventes de lavagem a seco, água, ou se exige apenas aspiração. Usar água em um tecido com etiqueta de limpeza a seco pode encolher e manchar o estofado na hora."
    }
  ]
};

export const COMPARISON_DATA = {
  sectionTitle: "A escolha inteligente para proteger seu estofado",
  sectionSubtitle: "Compare o comportamento típico em um momento de desespero com a segurança de ter o Guia SOS na palma da sua mão.",
  withoutGuide: {
    title: "Agir Sem Orientação (O Caminho do Risco)",
    items: [
      "Pânico imediato sem saber por onde começar a limpeza.",
      "Esfregar a área com força, espalhando o pigmento para as fibras vizinhas.",
      "Usar receitas caseiras mirabolantes da internet que desbotam o tecido.",
      "Saturar o sofá com água, gerando mofo interno na espuma.",
      "Gastar R$ 300+ chamando uma empresa de higienização de urgência.",
      "Dano permanente no móvel e frustração constante ao olhar para a mancha."
    ]
  },
  withGuide: {
    title: "Com o Guia SOS (O Caminho da Segurança)",
    items: [
      "Calma absoluta: você sabe exatamente qual é o primeiro passo.",
      "Absorção precisa, contendo a mancha no local exato do derramamento.",
      "Uso de técnicas seguras e testadas, respeitando a etiqueta do fabricante.",
      "Aplicação controlada sem encharcar o estofado.",
      "Resolução imediata em menos de 10 minutos por custo zero.",
      "Sofá impecável, cheiroso, com aspecto de novo e dinheiro no bolso."
    ]
  }
};

export const DIFFERENTIALS_DATA = {
  sectionTitle: "Por que este guia é diferente de buscas na internet?",
  sectionSubtitle: "Chega de testar receitas duvidosas de fóruns e redes sociais que colocam seu estofado em risco.",
  list: [
    {
      id: "d1",
      title: "Linguagem simples e humana",
      description: "Nada de jargões técnicos complexos. Explicações diretas ao ponto, como se um especialista estivesse ao seu lado.",
      iconName: "MessageCircle"
    },
    {
      id: "d2",
      title: "Consulta rápida estruturada",
      description: "Layout feito sob medida para celular. Teve uma emergência? Abra o PDF, clique no menu ou tabela inteligente e encontre a resposta na hora.",
      iconName: "Search"
    },
    {
      id: "d3",
      title: "Foco total na segurança",
      description: "Nenhum procedimento recomendado coloca em risco a integridade física ou a cor do seu estofado.",
      iconName: "Shield"
    },
    {
      id: "d4",
      title: "Acesso imediato vitalício",
      description: "Após a compra, o arquivo PDF é seu para sempre. Salve no celular, no tablet, envie para a família e consulte sempre que precisar.",
      iconName: "Download"
    }
  ]
};

export const TESTIMONIALS_DATA = {
  sectionTitle: "O que dizem os leitores do guia",
  sectionSubtitle: "Demonstrações ilustrativas de como a estrutura visual se comporta com opiniões de quem já protegeu seu estofado.",
  list: [
    {
      id: "t1",
      name: "Mariana Silva",
      role: "Mãe do Léo (3 anos) e tutora da Mel (Golden Retriever)",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=120&h=120",
      content: "Esse guia salvou meu sofá de linho logo na primeira semana! O Léo deixou cair guache vermelha no assento. Eu respirei fundo, abri o PDF no celular e segui o protocolo de emergência dos 5 minutos. Não sobrou marca nenhuma e o tecido continuou perfeito. Valeu cada centavo!",
      rating: 5,
      date: "Exemplo de layout"
    },
    {
      id: "t2",
      name: "Carlos Eduardo",
      role: "Morador de apartamento, fã de receber amigos",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=120&h=120",
      content: "Sempre gostei de fazer jantares em casa, mas morria de medo quando alguém pedia vinho tinto perto do sofá de suede claro. Com o guia, aprendi a me preparar e a agir sem pânico. É impressionante como técnicas simples evitam que a mancha fixe.",
      rating: 5,
      date: "Exemplo de layout"
    },
    {
      id: "t3",
      name: "Beatriz Nogueira",
      role: "Arquiteta e entusiasta de design de interiores",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=120&h=120",
      content: "Como profissional, indico sofás caríssimos e os clientes sempre perguntam como mantê-los. Recomendo este manual porque ele ensina a ler as tramas e as etiquetas. É um serviço de utilidade pública para preservar o design original.",
      rating: 5,
      date: "Exemplo de layout"
    }
  ]
};

export const FAQ_DATA = [
  {
    id: "f1",
    question: "O guia ensina a fazer misturas químicas perigosas?",
    answer: "Absolutamente não. Priorizamos a segurança da sua saúde e do tecido. O guia foca em produtos domésticos comuns, neutros e de fácil acesso, ensinando como usá-los nas dosagens e ordens corretas de forma totalmente segura."
  },
  {
    id: "f2",
    question: "Como vou receber o material?",
    answer: "O envio é 100% digital e automático. Imediatamente após a confirmação do pagamento, você receberá um e-mail com o link para download do arquivo PDF de alta definição, pronto para salvar no seu celular, computador ou tablet."
  },
  {
    id: "f3",
    question: "O guia funciona para qualquer tipo de tecido de sofá?",
    answer: "Sim, o guia cobre os principais tecidos do mercado nacional e internacional, incluindo Suede, Chenille, Linho, Veludo, Jacquard, Sarja, Couros naturais e sintéticos, além de Poliéster e Algodão."
  },
  {
    id: "f4",
    question: "Preciso comprar aparelhos de limpeza caros?",
    answer: "Não. Os procedimentos rápidos e preventivos usam ferramentas simples que você provavelmente já tem em casa: panos brancos, papel absorvente, colheres, borrifadores normais e escovas macias."
  },
  {
    id: "f5",
    question: "E se eu ler o guia e achar que não serve para mim?",
    answer: "Oferecemos uma garantia incondicional de 7 dias. Se por qualquer motivo você achar que as dicas de conservação e resgate rápido não agregam valor à sua rotina, basta nos enviar um e-mail para receber 100% do seu reembolso."
  },
  {
    id: "f6",
    question: "O pagamento é seguro? Tem alguma mensalidade?",
    answer: "O pagamento é único, sem assinaturas ou mensalidades ocultas. Toda a transação é processada em um ambiente criptografado e seguro com certificação SSL internacional."
  }
];

export const GUARANTEE_DATA = {
  title: "Sua compra totalmente protegida por nossa Garantia de Ferro",
  days: "7 DIAS DE GARANTIA INCONDICIONAL",
  description: "Temos tanta confiança na qualidade e na praticidade das técnicas estruturadas no manual que oferecemos uma garantia total. Explore os módulos, conheça os alertas de conservação e descubra a rotina de cuidados. Se em até 7 dias você não estiver completamente satisfeito, solicite o reembolso. Devolveremos cada centavo, sem burocracia ou perguntas desconfortáveis."
};

export const FOOTER_DATA = {
  brand: "SOS Manchas no Sofá",
  tagline: "O guia prático para preservar e proteger o seu estofado doméstico contra os pequenos caos do dia a dia.",
  copyright: "© 2026 SOS Manchas no Sofá. Todos os direitos reservados.",
  disclaimer: "Este produto é um manual digital com caráter informativo e orientador de conservação de estofados domésticos. Os depoimentos apresentados são exemplos demonstrativos de layout gráfico e representam simulações de uso. Consulte sempre as instruções específicas fornecidas pelo fabricante do seu sofá antes de aplicar qualquer produto ou método de limpeza."
};
