
export NVM_DIR="/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" >> /tmp/example.txt
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion" >> /tmp/example.txt

nvm --version

nvm use 20.9.0

node -v
yarn -v

# Start the server
cd /var/frontend

yarn run start
