import { Globe, LayoutDashboard, Users, QrCode } from 'lucide-react'

// Cadre de navigateur web moderne (Desktop / SaaS)
// Si image fournie -> affiche la capture réelle.
// Si aucune image -> affiche une interface dashboard SaaS simulée très élégante.
export default function MaquetteNavigateur({ image, alt = '', url = 'https://myevent-85y.pages.dev' }) {
  return (
    <div className="overflow-hidden rounded-xl border border-zinc-200/80 dark:border-white/10 bg-white dark:bg-[#12121c] shadow-xl">
      {/* Barre d'onglets & URL */}
      <div className="flex items-center gap-2 border-b border-zinc-200/80 dark:border-white/10 bg-zinc-50 dark:bg-[#0e0e16] px-3 py-2">
        <div className="flex gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-amber-400/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-green-400/80" />
        </div>
        <div className="mx-auto flex h-5 w-full max-w-[220px] items-center justify-center rounded-md bg-zinc-200/70 dark:bg-white/5 px-2 text-[9px] text-zinc-500 dark:text-zinc-400 font-mono">
          <Globe size={9} className="mr-1 text-cyan-400" />
          <span className="truncate">{url}</span>
        </div>
      </div>

      {/* Contenu principal */}
      <div className="relative aspect-video w-full overflow-hidden bg-zinc-100 dark:bg-[#0a0a12] select-none">
        {image ? (
          <img src={image} alt={alt} loading="lazy" className="h-full w-full object-cover" />
        ) : (
          /* Dashboard SaaS simulé pour MyEvent / Web apps */
          <div className="flex h-full w-full">
            {/* Mini sidebar gauche */}
            <div className="hidden sm:flex w-12 sm:w-16 flex-col items-center justify-between border-r border-zinc-200/60 dark:border-white/5 bg-zinc-50/50 dark:bg-[#0e0e18] p-2 py-3">
              <div className="flex flex-col items-center gap-2.5">
                <span className="h-5 w-5 rounded-md bg-gradient-to-br from-violet to-cyan grid place-items-center text-[9px] font-bold text-white">
                  P
                </span>
                <span className="h-1.5 w-6 rounded-full bg-violet/40" />
                <span className="h-1.5 w-6 rounded-full bg-zinc-300 dark:bg-white/10" />
                <span className="h-1.5 w-6 rounded-full bg-zinc-300 dark:bg-white/10" />
              </div>
              <span className="h-4 w-4 rounded-full bg-green-400/20 border border-green-400/40" />
            </div>

            {/* Contenu principal du dashboard */}
            <div className="flex-1 p-3 sm:p-4 text-left overflow-hidden flex flex-col justify-between">
              {/* Header dashboard */}
              <div className="flex items-center justify-between border-b border-zinc-200/60 dark:border-white/5 pb-2">
                <div>
                  <span className="text-[10px] font-bold text-zinc-900 dark:text-zinc-100 flex items-center gap-1.5">
                    <LayoutDashboard size={11} className="text-cyan-400" />
                    Dashboard · Gestion des Réceptions
                  </span>
                  <span className="text-[8px] text-zinc-400 hidden sm:inline">Temps réel & Scan hors-ligne</span>
                </div>
                <span className="rounded-full bg-cyan-500/10 border border-cyan-500/30 px-2 py-0.5 text-[8px] font-semibold text-cyan-400">
                  Événement en direct
                </span>
              </div>

              {/* Statistiques en cartes */}
              <div className="grid grid-cols-3 gap-2 my-2">
                <div className="rounded-lg border border-zinc-200/70 dark:border-white/5 bg-white/70 dark:bg-white/[0.02] p-1.5 text-center">
                  <span className="block text-[8px] text-zinc-400">Invités confirmés</span>
                  <span className="font-titre text-xs font-bold text-zinc-900 dark:text-zinc-100 flex items-center justify-center gap-1">
                    <Users size={10} className="text-violet-400" /> 184
                  </span>
                </div>

                <div className="rounded-lg border border-zinc-200/70 dark:border-white/5 bg-white/70 dark:bg-white/[0.02] p-1.5 text-center">
                  <span className="block text-[8px] text-zinc-400">Billets scannés</span>
                  <span className="font-titre text-xs font-bold text-cyan-400 flex items-center justify-center gap-1">
                    <QrCode size={10} /> 142
                  </span>
                </div>

                <div className="rounded-lg border border-zinc-200/70 dark:border-white/5 bg-white/70 dark:bg-white/[0.02] p-1.5 text-center">
                  <span className="block text-[8px] text-zinc-400">Taux de présence</span>
                  <span className="font-titre text-xs font-bold text-green-400">77%</span>
                </div>
              </div>

              {/* Ligne plan de table & statut */}
              <div className="rounded-lg border border-zinc-200/70 dark:border-white/5 bg-white/40 dark:bg-white/[0.02] p-2 flex items-center justify-between text-[8px] text-zinc-500 dark:text-zinc-400">
                <span>Plan de table : 18 tables assignées</span>
                <span className="text-violet-400 font-medium">Synchronisation active →</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
