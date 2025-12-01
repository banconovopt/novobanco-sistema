#!/bin/bash
# Script de inicialização do servidor em produção

cd /home/ubuntu/telabanconovo

# Parar processos anteriores
pkill -f "node dist/index.js" || true

# Aguardar um momento
sleep 2

# Iniciar o servidor em modo produção
nohup pnpm start > /tmp/prod-server.log 2>&1 &

# Aguardar inicialização
sleep 5

# Mostrar status
echo "Servidor iniciado!"
echo "Logs disponíveis em: /tmp/prod-server.log"
tail -10 /tmp/prod-server.log
