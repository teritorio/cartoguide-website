---
title: "Funcionalidades CartoGuide — Búsqueda isócrona, multifuente, administración multi-tenant"
description: "Motor de búsqueda geográfica, filtros, vista lista y mapa, favoritos con QR, widget integrable, temas multi-tenant, analítica a la carta. Valorice los datos de su territorio."
---

::page-header
---
headline: Funcionalidades
title: Un mapa interactivo diseñado para valorizar su territorio
description: "Más que un mapa interactivo, CartoGuide es un motor de búsqueda geográfica local que conecta sus datos territoriales con sus usuarios, en todos sus dispositivos."
---
::

:::section-tabs
---
tabs:
  - Funcionalidades principales
  - Funcionalidades avanzadas
  - Administración y configuración
  - Fuentes de datos compatibles
---

::accordion-section
---
headline: Funcionalidades principales
title: Herramientas potentes para cada uso territorial
---

  ::feature-item
  ---
  icon: i-lucide-search
  title: Búsqueda geográfica e isócrona
  image: /images/features/placeholder.svg
  ---
  Encuentre cualquier punto de interés o dirección (Base de Direcciones Nacional) gracias al autocompletado en tiempo real. Lance una búsqueda isócrona a 15, 30 o 60 minutos en bicicleta, en coche o a pie para identificar los recursos accesibles desde cualquier punto.
  ::

  ::feature-item
  ---
  icon: i-lucide-filter
  title: Filtrado por categoría
  image: /images/features/placeholder.svg
  ---
  Filtre los puntos de interés por categoría y subcategoría: alojamientos, restaurantes, actividades, servicios públicos, transporte… Afine su selección con la navegación multinivel y los filtros por valor (p. ej. tipo de cocina, equipamientos disponibles).
  ::

  ::feature-item
  ---
  icon: i-lucide-database
  title: Datos multifuente conectados
  image: /images/features/placeholder.svg
  ---
  Agregue OpenStreetMap, Sirtaqui, Apidae, Tourinsoft, Geotrek, Open Agenda, GTFS y sus datos propietarios (Elasa) en un único mapa. Un ETL sincroniza automáticamente todas las fuentes cada noche.
  ::

  ::feature-item
  ---
  icon: i-lucide-list
  title: Vista lista y exportación
  image: /images/features/placeholder.svg
  ---
  Alterne entre la vista mapa y la vista lista para explorar o comparar los puntos de interés de una categoría. Exporte los resultados en CSV o GeoJSON para reutilizarlos en sus herramientas.
  ::

  ::feature-item
  ---
  icon: i-lucide-smartphone
  title: Mobile-first para el trabajo de campo
  image: /images/features/placeholder.svg
  ---
  Interfaz diseñada para agentes de campo, oficinas de información turística y visitantes en movimiento. Navegación fluida en smartphone, incluso en zonas de baja conectividad.
  ::

  ::feature-item
  ---
  icon: i-lucide-share-2
  title: Favoritos, compartir y código QR
  image: /images/features/placeholder.svg
  ---
  Guarde sus puntos de interés favoritos, cree listas y compártalas al instante mediante URL o código QR. Los agentes de campo pueden generar códigos QR para distribuirlos in situ y destacar lugares específicos.
  ::

  ::feature-item
  ---
  icon: i-lucide-code
  title: Widget y API abierta
  image: /images/features/placeholder.svg
  ---
  Integre CartoGuide en su sitio web como widget de mapa, lista o favoritos en unas pocas líneas. La API abierta permite alimentar otras aplicaciones y construir visualizaciones personalizadas — consulte la [guía de integración](https://documentation.communecarte.org/fr/cartoguide/integration-cartoguide.html).
  ::

  ::feature-item
  ---
  icon: i-lucide-earth
  title: Modo contribuidor y enlaces OSM
  image: /images/features/placeholder.svg
  ---
  Active el modo contribuidor para mostrar, en cada ficha POI, enlaces hacia iD y JOSM, así como un enlace para añadir una nota OSM. Las contribuciones benefician a todo el ecosistema: Organic Maps, Géovélo, Komoot, France Bleu, SNCF, Apple Maps, IGN y muchos más.
  ::

::

::accordion-section
---
headline: Funcionalidades avanzadas
title: Enriquezca la experiencia cartográfica
description: "Opciones avanzadas para adaptar CartoGuide a cada contexto territorial."
bg: bg-slate-50
variant: secondary
---

  ::feature-item
  ---
  icon: i-lucide-route
  title: Rutas en bicicleta y senderismo
  image: /images/features/placeholder.svg
  ---
  Muestre itinerarios con sus puntos de paso, desnivel y equipamientos cercanos. Las trazas GPX de Geotrek u otras fuentes se integran de forma nativa.
  ::

  ::feature-item
  ---
  icon: i-lucide-layers
  title: Estilos de mapa y vista 3D
  image: /images/features/placeholder.svg
  ---
  Elija entre varios fondos vectoriales MapLibre (turismo, ciudad, alimentación, bicicleta) u ortofoto IGN — más de 500 tipos de POI representados. Cambie a la vista 3D para una inmersión territorial completa.
  ::

  ::feature-item
  ---
  icon: i-lucide-mouse-pointer-click
  title: Modo explorador
  image: /images/features/placeholder.svg
  ---
  Haga clic directamente sobre cualquier POI visible en el mapa, sin pasar por el menú de navegación. Especialmente apreciado en terminales interactivas y pantallas táctiles de libre acceso.
  ::

  ::feature-item
  ---
  icon: i-lucide-languages
  title: Interfaz multilingüe
  image: /images/features/placeholder.svg
  ---
  Interfaz disponible en francés, inglés y español, con adaptación automática al idioma del navegador. Ideal para territorios transfronterizos que acogen públicos de varios países.
  ::

  ::feature-item
  ---
  icon: i-lucide-shapes
  title: Clústeres y polígonos
  image: /images/features/placeholder.svg
  ---
  Los marcadores se agrupan automáticamente en clústeres a ciertos niveles de zoom para un mapa legible, incluso con muchos POI. Las zonas geográficas (municipios, mancomunidades) pueden mostrarse como polígonos.
  ::

  ::feature-item
  ---
  icon: i-lucide-crop
  title: Delimitación de territorio
  image: /images/features/placeholder.svg
  ---
  Defina un perímetro geográfico para centrar la experiencia en su territorio: resalte la zona, difumine el resto o filtre estrictamente los POI mostrados.
  ::

  ::feature-item
  ---
  icon: i-lucide-refresh-cw
  title: Sincronización automática de datos
  image: /images/features/placeholder.svg
  ---
  Un ETL robusto actualiza los datos desde todas sus fuentes conectadas cada noche. Se acabó la doble entrada y la información obsoleta.
  ::

::

::accordion-section
---
headline: Administración y configuración
title: Administre y personalice cada aspecto de su mapa
description: "CartoGuide se administra íntegramente desde el back-office Elasa, sin necesidad de desarrollo."
bg: bg-orange-50
variant: accent
---

  ::feature-item
  ---
  icon: i-lucide-layers-2
  title: Temas multi-tenant
  image: /images/features/placeholder.svg
  ---
  Un mismo proyecto puede ofrecer varias cartografías temáticas — turismo, alimentación, movilidad — cada una con su propia capa de datos, menú e identidad visual. Ideal para territorios que gestionan varios dispositivos cartográficos.
  ::

  ::feature-item
  ---
  icon: i-lucide-palette
  title: Personalización gráfica
  image: /images/features/placeholder.svg
  ---
  Configure el logotipo, el favicon y los fondos de mapa para cada tema. Su mapa refleja la identidad visual de su territorio u organización.
  ::

  ::feature-item
  ---
  icon: i-lucide-bar-chart-2
  title: Analítica a la carta
  image: /images/features/placeholder.svg
  ---
  Active Matomo (alojamiento soberano) o Google Tag Manager según su política de datos. Google Search Console también es configurable por tema.
  ::

  ::feature-item
  ---
  icon: i-lucide-toggle-right
  title: Activación de servicios por tema
  image: /images/features/placeholder.svg
  ---
  Active o desactive los favoritos, el modo explorador, las isócronas y el reporte de problemas de forma independiente para cada tema. Adapte las funcionalidades disponibles a cada uso y público.
  ::

  ::feature-item
  ---
  icon: i-lucide-layout-grid
  title: Configuración de menús
  image: /images/features/placeholder.svg
  ---
  Organice las categorías, subcategorías y filtros desde el back-office. Elija entre 4, 8, 12 o 16 elementos por bloque, en disposición horizontal o vertical.
  ::

  ::feature-item
  ---
  icon: i-lucide-table
  title: Gestión de filtros y campos
  image: /images/features/placeholder.svg
  ---
  Defina los filtros por valor, los campos mostrados en pop-up y ficha detalle, y las columnas visibles en vista lista. Cada tema dispone de su propia configuración.
  ::

::

::accordion-section
---
headline: Fuentes de datos compatibles
title: Conecte sus datos, sea cual sea su origen
description: "CartoGuide se integra de forma nativa con los principales sistemas de información turística y de datos territoriales utilizados en Francia y Europa."
---

  ::feature-item
  ---
  icon: i-lucide-map-pin
  title: OpenStreetMap
  image: /images/features/placeholder.svg
  ---
  Base libre y colaborativa con más de 500 tipos de POI. El modo contribuidor facilita el acceso a los editores OSM desde cada ficha POI para enriquecer la base mundial.
  ::

  ::feature-item
  ---
  icon: i-lucide-building
  title: Sirtaqui y Apidae
  image: /images/features/placeholder.svg
  ---
  Los dos principales SIT turísticos de Francia — fichas sincronizadas automáticamente desde Nueva Aquitania y Auvernia-Ródano-Alpes.
  ::

  ::feature-item
  ---
  icon: i-lucide-tent
  title: Geotrek y Open Agenda
  image: /images/features/placeholder.svg
  ---
  Itinerarios de senderismo y espacios naturales (Geotrek) + eventos culturales y deportivos (Open Agenda) — sincronización automática diaria.
  ::

  ::feature-item
  ---
  icon: i-lucide-bus
  title: GTFS — Transporte público
  image: /images/features/placeholder.svg
  ---
  Paradas de autobús, tranvía, metro y tren mostradas cerca de cada punto de interés para facilitar la movilidad sin coche.
  ::

  ::feature-item
  ---
  icon: i-lucide-globe
  title: Tourinsoft y otros SIT
  image: /images/features/placeholder.svg
  ---
  Compatible con Tourinsoft y cualquier sistema de información turística que disponga de una API o exportación estructurada.
  ::

  ::feature-item
  ---
  icon: i-lucide-pencil
  title: Back-office Elasa
  image: /images/features/placeholder.svg
  ---
  Introduzca y gestione sus datos propietarios directamente en CartoGuide, sin depender de un SIT regional. [→ Descubrir Elasa](https://documentation.communecarte.org/fr/cartoguide/decouvrir-cartoguide.html)
  ::

::

:::

::cta-section
---
title: ¿Desea ver CartoGuide en acción?
description: "Descubra cómo otras organizaciones territoriales utilizan CartoGuide, o hable directamente con nuestro equipo."
primaryLabel: Ver casos de uso
primaryTo: /use-cases
secondaryLabel: Hablar de mi proyecto
secondaryTo: /contact
---
::
