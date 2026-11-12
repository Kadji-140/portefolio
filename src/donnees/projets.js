// ==============================================================================
// 📁 CATALOGUE DES PROJETS & SAAS DE PHILIP
// ==============================================================================
// ➜ Pour ajouter un nouveau projet ou SaaS :
//    Copiez le modèle "MODELE_NOUVEAU_PROJET" ci-dessous et ajoutez-le au tableau.
//
// ➜ Options possibles :
//    - categorie  : 'saas' | 'mobile' | 'web'
//    - plateforme : 'mobile' | 'web' | 'les deux'
//    - statut     : 'livre' | 'en cours' | 'concept'
//    - images     : ['/projets/mon-image.png'] (placez l'image dans le dossier public/projets/)
//                   Laissez [] si vous n'avez pas encore d'image (un beau visuel dégradé sera affiché).
// ==============================================================================

export const projets = [
  // --- 1. MyEvent (SaaS Mariage & Événements) ---
  {
    id: 'myevent',
    categorie: 'saas',
    plateforme: 'web',
    statut: 'livre',
    vedette: true,
    titre: {
      fr: 'MyEvent — Mariages & Événements',
      en: 'MyEvent — Weddings & Events'
    },
    accroche: {
      fr: 'Gestion d’invités, plan de table, billets QR Code anti-resquille et scan hors-ligne.',
      en: 'Guest management, seating plans, anti-fraud QR tickets, and offline scanning.'
    },
    description: {
      fr: 'Plateforme complète pour les organisateurs et mariés : préparez la liste d’invités, concevez le plan de table, envoyez des invitations numériques personnalisées via WhatsApp et contrôlez les entrées avec un scanner fluide fonctionnant même sans connexion internet.',
      en: 'Complete platform for wedding hosts: organize guest lists, plan seating charts, distribute unique WhatsApp tickets, and scan arrivals seamlessly with full offline support.'
    },
    probleme: {
      fr: 'Désorganisation à l’entrée des réceptions, resquilleurs et perte de temps sur les listes papier.',
      en: 'Gate-crashing, check-in confusion, and fragile paper guest-lists.'
    },
    fonctionnalites: {
      fr: [
        'Gestion de la liste d’invités & accompagnants',
        'Création de plan de table interactif',
        'Génération de billets QR Code sécurisés et uniques',
        'Envoi instantané des invitations via WhatsApp',
        'Application scanner d’entrées (fonctionne hors-ligne)',
        'Paiement & abonnements intégrés (Mobile Money)'
      ],
      en: [
        'Guest list & plus-one tracking',
        'Interactive seating chart designer',
        'Unique secured QR tickets generation',
        'Instant WhatsApp ticket dispatching',
        'Entry scanner web-app (works offline)',
        'Mobile Money integrated payments'
      ]
    },
    technos: ['React', 'PWA', 'Tailwind CSS', 'QR Code', 'Cloudflare Pages'],
    images: ['/projets/myevent-1.png', '/projets/myevent-2-mobileHeroSection.png'],
    liens: {
      demo: 'https://myevent-85y.pages.dev',
      github: '',
      store: ''
    }
  },

  // --- 2. Carnet de Couturier (SaaS Mobile) ---
  {
    id: 'carnet-couturier',
    categorie: 'mobile',
    plateforme: 'mobile',
    statut: 'concept',
    vedette: true,
    titre: {
      fr: 'Carnet de Couturier',
      en: 'Tailor’s Notebook'
    },
    accroche: {
      fr: 'La digitalisation complète des ateliers de confection et de couture.',
      en: 'Digital transformation for tailoring and fashion workshops.'
    },
    description: {
      fr: 'Application mobile conçue pour remplacer les vieux carnets papier des ateliers : gestion des mesures clients, suivi de l’avancement des commandes, alertes pour les essayages et facturation rapide.',
      en: 'Mobile app tailored for fashion designers: store customer measurements, manage orders, schedule fittings, and send reminders.'
    },
    probleme: {
      fr: 'Fiches de mesures perdues ou tachées, retards d’essayages et suivi financier difficile.',
      en: 'Lost measurement slips, chaotic order tracking, and delayed deliveries.'
    },
    fonctionnalites: {
      fr: ['Fiches clients avec photos de modèles', 'Historique des mensurations', 'Suivi du statut des confections', 'Alertes essayages via WhatsApp'],
      en: ['Client profiles & model photos', 'Measurement history', 'Order status tracking', 'WhatsApp fitting reminders']
    },
    technos: ['React Native', 'Laravel', 'PostgreSQL'],
    images: ['/projets/tailorManager.png', '/projets/tailorManagerHeroSection.png'],
    liens: { demo: '', github: '', store: '' }
  },

  // --- 3. Gestion des Tontines (SaaS & FinTech Communautaire) ---
  {
    id: 'tontines',
    categorie: 'saas',
    plateforme: 'web',
    statut: 'concept',
    vedette: false,
    titre: {
      fr: 'Gestion des Tontines',
      en: 'Tontine & Community Finance'
    },
    accroche: {
      fr: 'Transparence totale et automatisation des cotisations communautaires.',
      en: 'Full transparency and automated round management for community savings.'
    },
    description: {
      fr: 'Application facilitant la vie des associations et groupes d’épargne au Cameroun : suivi des cotisations, tirage des tours de tontine, alertes de paiement et historique infalsifiable.',
      en: 'Modern tontine management application for African community groups: contribution tracking, payout scheduling, automated reminders, and complete audit history.'
    },
    probleme: {
      fr: 'Cahiers de comptes manuscrits, contestations et relances manuelles pénibles.',
      en: 'Handwritten logbooks, disputes over turns, and manual reminder friction.'
    },
    fonctionnalites: {
      fr: ['Registre des membres vérifiés', 'Calendrier des tours et cotisations', 'Rappels automatiques SMS / WhatsApp', 'Reçus numériques téléchargeables'],
      en: ['Verified member directory', 'Payout and contribution calendar', 'Automated SMS / WhatsApp reminders', 'Digital PDF receipts']
    },
    technos: ['React Native', 'Node.js', 'Mobile Money API'],
    images: ['/projets/tontinePro.png'],
    liens: { demo: '', github: '', store: '' }
  },

  // --- 4. Pressing Pro (SaaS Gestion de Blanchisserie) ---
  {
    id: 'pressing',
    categorie: 'saas',
    plateforme: 'les deux',
    statut: 'concept',
    vedette: false,
    titre: {
      fr: 'Pressing Pro — Gestion de Blanchisserie',
      en: 'Laundry & Dry-Cleaning Manager'
    },
    accroche: {
      fr: 'Dépôts, étiquetage, suivi des statuts et retraits de linge sans friction.',
      en: 'Drop-offs, tagging, garment tracking, and smooth customer pickup.'
    },
    description: {
      fr: 'Système tout-en-un pour pressings et laveries : enregistrement express des dépôts, impression ou notification WhatsApp du ticket, suivi des étapes de lavage/repassage et gestion des encaissements.',
      en: 'All-in-one software for laundry businesses: fast intake, digital WhatsApp ticket, real-time stage progression, and payment reconciliation.'
    },
    probleme: {
      fr: 'Vêtements égarés, tickets perdus par les clients et retards dans la livraison.',
      en: 'Lost clothes, lost customer paper tickets, and delivery bottlenecks.'
    },
    fonctionnalites: {
      fr: ['Dépôt rapide et ticket numérique WhatsApp', 'Statuts (Reçu, Lavage, Repassage, Prêt)', 'Gestion de caisse et personnel', 'Statistiques de chiffre d’affaires'],
      en: ['Instant intake & WhatsApp ticket', 'Garment status lifecycle', 'Cash register & staff management', 'Business revenue analytics']
    },
    technos: ['Laravel', 'React', 'MySQL', 'Tailwind CSS'],
    images: [],
    liens: { demo: '', github: '', store: '' }
  },

  // ==============================================================================
  // 💡 EMPLACEMENT LIBRE POUR VOS AUTRES SAAS & PROJETS
  // Décommentez et personnalisez ce bloc pour ajouter un nouveau projet immédiatement !
  // ==============================================================================
  /*
  {
    id: 'mon-nouveau-saas',
    categorie: 'saas',            // 'saas' | 'mobile' | 'web'
    plateforme: 'web',            // 'web' | 'mobile' | 'les deux'
    statut: 'en cours',           // 'livre' | 'en cours' | 'concept'
    vedette: false,
    titre: {
      fr: 'Mon Nouveau SaaS',
      en: 'My New SaaS'
    },
    accroche: {
      fr: 'Courte phrase d’accroche qui résume l’intérêt principal.',
      en: 'Short catchy tagline summarizing the key benefit.'
    },
    description: {
      fr: 'Description détaillée de ce que fait la solution et de sa valeur ajoutée.',
      en: 'Detailed description of the application and its added value.'
    },
    probleme: {
      fr: 'Quel problème résout cette application ?',
      en: 'What problem does this product solve?'
    },
    fonctionnalites: {
      fr: ['Fonctionnalité 1', 'Fonctionnalité 2', 'Fonctionnalité 3'],
      en: ['Feature 1', 'Feature 2', 'Feature 3']
    },
    technos: ['React', 'Laravel', 'Tailwind CSS'],
    images: [],                   // ex: ['/projets/capture.png']
    liens: {
      demo: 'https://votre-demo.com',
      github: '',
      store: ''
    }
  },
  */
]
