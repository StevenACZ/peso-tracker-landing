import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  // IMPORTANTE: Cambiar a peso.stevenacz.com
  site: 'https://peso.stevenacz.com',
  
  // IMPORTANTE: Remover el base path ya que ahora es un subdominio
  // base: '/peso-tracker', // ← ELIMINAR ESTA LÍNEA
  
  // Resto de tu configuración...
  integrations: [tailwind()],
  
  output: 'static',
  
  build: {
    assets: '_astro',
    // Asegurarse de que los assets usen rutas absolutas
    format: 'directory'
  }
});
