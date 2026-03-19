# 📋 Lista de Tarefas

Aplicação web de gerenciamento de tarefas construída com **Angular 17**, utilizando a nova sintaxe de controle de fluxo, Standalone Components e Signals. Permite criar, editar, concluir e excluir tarefas de forma intuitiva, com separação automática entre pendências e itens concluídos.

🔗 **[Acesse o projeto ao vivo](https://fernandorodrigues91.github.io/listaDeTarefas/)**

---

## 📸 Preview

> *Tela inicial com lista vazia e tela com tarefas organizadas por status.*

| Estado Vazio | Com Tarefas |
|---|---|
| Ilustração + botão para criar lista | Pendências e Concluídas separadas automaticamente |

---

## ✨ Funcionalidades

- ✅ **Adicionar tarefas** — via tecla `Enter` ou clique no botão circular
- ✏️ **Edição inline** — edite o texto de qualquer tarefa diretamente na lista
- ☑️ **Marcar como concluída** — checkbox move o item para a seção "Concluídas"
- 🗑️ **Excluir item** — botão de exclusão individual por tarefa
- 💣 **Excluir todos** — botão no rodapé para limpar toda a lista
- 📂 **Separação automática por status** — seções "Pendências" e "Concluídas" aparecem somente quando há itens
- 🖼️ **Estado vazio ilustrado** — exibe imagem e chamada para ação quando a lista está vazia
- 🎯 **Autofoco inteligente** — input mantém foco após adição de cada item

---

## 🛠️ Tecnologias Utilizadas

| Tecnologia | Versão | Uso |
|---|---|---|
| [Angular](https://angular.dev/) | ^17.0.0 | Framework principal |
| [TypeScript](https://www.typescriptlang.org/) | ~5.2.2 | Tipagem estática |
| [SweetAlert2](https://sweetalert2.github.io/) | ^11.23.0 | Diálogos de confirmação |
| [RxJS](https://rxjs.dev/) | ~7.8.0 | Programação reativa |
| [SCSS](https://sass-lang.com/) | — | Estilização dos componentes |
| [angular-cli-ghpages](https://github.com/angular-schule/angular-cli-ghpages) | ^2.0.0-beta.2 | Deploy no GitHub Pages |

---

## 🏗️ Arquitetura do Projeto

O projeto adota o padrão **Smart / Dumb Components** (Container / Presentational), com comunicação exclusiva via `@Input()` e `@Output()`, sem uso de services globais de estado.

```
src/
└── app/
    ├── components/
    │   ├── input-add-item/         # Componente "burro" — header com input de adição
    │   │   ├── input-add-item.component.ts
    │   │   ├── input-add-item.component.html
    │   │   └── input-add-item.component.scss
    │   └── input-list-item/        # Componente "burro" — renderiza a lista de itens
    │       ├── input-list-item.component.ts
    │       ├── input-list-item.component.html
    │       └── input-list-item.component.scss
    ├── interface/
    │   └── IListItems.interface.ts # Contrato de dados de cada tarefa
    ├── pages/
    │   └── list/                   # Componente "inteligente" — gerencia todo o estado
    │       ├── list.component.ts
    │       ├── list.component.html
    │       └── list.component.scss
    ├── app.component.ts            # Raiz — apenas RouterOutlet
    └── app.routes.ts               # Configuração de rotas
```

### Fluxo de dados

```
ListComponent (Smart)
  │
  ├──[inputListItems]──▶ InputAddItemComponent
  │        ◀──(outputAddListItem)──────────────┘
  │
  ├──[inputListItems]──▶ InputListItemComponent
  │        ◀──(outputUpdateItemCheckbox)────────┐
  │        ◀──(outputUpdateItemText)────────────┤
  │        ◀──(outputDeleteItem)────────────────┘
```

---

## 🔍 Destaques Técnicos

### Angular 17 — Nova sintaxe de controle de fluxo
O projeto utiliza a sintaxe nativa de templates introduzida no Angular 17, substituindo as diretivas estruturais:

```html
<!-- @if / @else em vez de *ngIf -->
@if (!getListItems().length) {
  <!-- estado vazio -->
} @else {
  <!-- lista com itens -->
}

<!-- @for em vez de *ngFor -->
@for(item of inputListItems; track item) {
  <!-- item da lista -->
}
```

### Standalone Components
Todos os componentes são `standalone: true`, sem a necessidade de `NgModule`, reduzindo o boilerplate e melhorando o tree-shaking.

### Angular Signals
O estado é gerenciado com Signals do Angular, permitindo reatividade granular e eficiente:

```typescript
// Exemplo de uso no ListComponent
addItem = signal(true);             // controla visibilidade do form no estado vazio
getListItems = signal<IListItems[]>([]); // lista reativa de tarefas
```

### Geração de IDs por timestamp
Cada tarefa recebe um ID único gerado a partir do timestamp atual, garantindo unicidade sem dependências externas:

```typescript
const id = `ID ${new Date().getTime()}`;
```

### Injeção de dependência com `inject()` e campo privado
```typescript
#cdr = inject(ChangeDetectorRef); // sintaxe de campo privado com hash (#)
```

### Interface tipada
```typescript
export interface IListItems {
  id: string;
  checked: boolean;
  value: string;
}
```

---

## 🚀 Como Rodar Localmente

### Pré-requisitos
- [Node.js](https://nodejs.org/) v18 ou superior
- [Angular CLI](https://angular.dev/tools/cli) v17

### Passo a passo

```bash
# 1. Clone o repositório
git clone https://github.com/FernandoRodrigues91/listaDeTarefas.git

# 2. Acesse a pasta do projeto
cd listaDeTarefas

# 3. Instale as dependências
npm install

# 4. Inicie o servidor de desenvolvimento
npm start
```

Acesse `http://localhost:4200` no seu navegador.

---

## 📦 Scripts Disponíveis

| Comando | Descrição |
|---|---|
| `npm start` | Inicia o servidor de desenvolvimento |
| `npm run build` | Gera o build de produção em `/dist` |
| `npm run watch` | Build contínuo em modo desenvolvimento |
| `npm test` | Executa os testes com Karma/Jasmine |

---

## 🌐 Deploy

O projeto está configurado para deploy automático no **GitHub Pages** via `angular-cli-ghpages`.

```bash
# Gerar build e publicar no GH Pages
ng deploy --base-href=/listaDeTarefas/
```

---

## 📄 Licença

Este projeto está sob a licença **MIT**. Sinta-se livre para usar, modificar e distribuir.

---

<div align="center">
  Feito com ❤️ por <a href="https://github.com/FernandoRodrigues91">Fernando Rodrigues</a>
</div>
