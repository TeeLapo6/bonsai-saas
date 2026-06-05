#!/bin/bash
SSHPASS="2a7NC6L4zwOy8USwcaC92VFlqf8mCP0K"
sshpass -e ssh -o StrictHostKeyChecking=no -o ConnectTimeout=10 root@172.105.29.247 bash -s << 'REMOTE'
echo "=== Traefik Cmd ==="
docker inspect coolify-proxy --format "{{json .Config.Cmd}}"
echo "=== Bonsai container ==="
docker ps --format "{{.Names}}" | grep bonsai
echo "=== Coolify proxy config ==="
cat /data/coolify/proxy/dynamic.yml 2>/dev/null || find / -name "dynamic.yml" 2>/dev/null | head -5
echo "=== Coolify proxy static config ==="
cat /data/coolify/proxy/static.yml 2>/dev/null || find / -name "static.yml" 2>/dev/null | head -5
echo "=== Bonsai labels ==="
docker ps --format "{{.Names}}" | grep bonsai | head -1 | xargs -I{} docker inspect {} --format "{{json .Config.Labels}}" 2>/dev/null | head -20
REMOTE
