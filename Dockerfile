# Usa a imagem oficial do Nginx
FROM nginx:alpine

# Remove a configuração default do Nginx
RUN rm /etc/nginx/conf.d/default.conf

# Copia sua própria configuração (opcional, se quiser personalizar)
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copia seus arquivos HTML, JS, CSS para a pasta correta
COPY ./public /usr/share/nginx/html

# Expõe a porta 80
EXPOSE 5006
