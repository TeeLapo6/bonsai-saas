#!/bin/bash
SSHPASS='2a7NC6L4zwOy8USwcaC92VFlqf8mCP0K'
sshpass -e ssh -o StrictHostKeyChecking=no -o ConnectTimeout=10 root@172.105.29.247 "$@"
