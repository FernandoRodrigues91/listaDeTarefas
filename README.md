# Lista de Tarefas - Angular 17

Bem-vindo ao **Lista de Tarefas**, uma aplicação simples e interativa para gerenciar suas tarefas diárias. Este projeto foi desenvolvido com **Angular 17**, **SASS/SCSS**, **Angular Material**, e está hospedado no **GitHub Pages** para fácil acesso.

👉 Acesse o projeto em: [https://fernandorodrigues91.github.io/listaDeTarefas/](https://fernandorodrigues91.github.io/listaDeTarefas/)

---

## Funcionalidades

Este aplicativo permite que você:

- **Adicionar Tarefas:** Insira novas tarefas facilmente.
- **Marcar Tarefas como Concluídas:** Complete tarefas com um simples clique.
- **Editar Tarefas:** Modifique o conteúdo das tarefas a qualquer momento.
- **Excluir Tarefas:** Remova tarefas que não são mais necessárias.
- **Design Responsivo:** A interface foi otimizada para funcionar em diferentes dispositivos, como desktop, tablets e smartphones.

## Tecnologias Usadas

- **Angular 17:** Framework moderno e eficiente para construção de aplicativos web.
- **SASS/SCSS:** Pré-processador CSS que facilita a criação de estilos mais escaláveis e organizados.
- **Angular Material:** Biblioteca de componentes UI que segue as diretrizes de design do Material Design, proporcionando uma interface bonita e consistente.
- **TypeScript:** Linguagem de programação baseada em JavaScript, permitindo tipagem estática e maior segurança no desenvolvimento.

---

## Estrutura do Projeto

- **A estrutura de arquivos do projeto segue uma organização modular para facilitar a manutenção e escalabilidade**

listaDeTarefas/

│

├── src/

│   ├── app/

│   │   ├── components/        # Componentes da lista de tarefas (Adicionar, Remover, Editar, etc.)

│   │   ├── models/            # Modelos de dados (ex: Task)

│   │   ├── services/          # Serviços para manipulação de dados (ex: TaskService)

│   │   ├── app.module.ts      # Módulo principal da aplicação

│   │   └── app.component.ts   # Componente raiz

│   │

│   ├── assets/                # Imagens e fontes

│   ├── environments/          # Configurações de ambiente (produção e desenvolvimento)

│   └── styles/                # Estilos globais (SASS/SCSS)

│

├── angular.json               # Arquivo de configuração do Angular

├── package.json               # Gerenciador de dependências

├── README.md                  # Este arquivo

└── LICENSE                    # Licença do projeto

