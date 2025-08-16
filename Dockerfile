# Dockerfile para PesoTracker Landing
FROM nginx:alpine

# Copiar configuración de nginx
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Crear directorio para los archivos estáticos
RUN mkdir -p /usr/share/nginx/html

# Copiar archivos del build (se monta como volumen en docker-compose)
# COPY dist/ /usr/share/nginx/html/

# Exponer puerto 80
EXPOSE 80

# Healthcheck
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
    CMD curl -f http://localhost/health || exit 1

# Comando por defecto
CMD ["nginx", "-g", "daemon off;"]