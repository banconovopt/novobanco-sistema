FROM node:22-alpine

WORKDIR /app

# Instalar pnpm
RUN npm install -g pnpm

# Copiar arquivos de dependências
COPY package.json pnpm-lock.yaml ./

# Instalar dependências
RUN pnpm install --frozen-lockfile

# Copiar código fonte
COPY . .

# Build do projeto
RUN pnpm build

# Expor porta
EXPOSE 3001

# Comando de inicialização
CMD ["pnpm", "start"]
