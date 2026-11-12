import { QrCode, CheckCircle, Scissors, Smartphone, Wifi, Battery } from 'lucide-react'

// Cadre de smartphone moderne (style iPhone avec Dynamic Island)
// Si une image est fournie -> affiche l'image réelle.
// Si aucune image n'est fournie -> affiche une interface applicative simulée selon le type (myevent, couture, etc.)
export default function MaquetteTelephone({ image, type = 'myevent', alt = '', className = '' }) {
  return (
    <div
      className={`relative mx-auto aspect-[9/18.5] w-full max-w-[220px] rounded-[2.5rem] border-[6px] border-zinc-800 bg-zinc-950 p-2 shadow-2xl shadow-black/60 ring-1 ring-white/10 ${className}`}
    >
      {/* Dynamic Island / Encoche haut */}
      <div className="absolute left-1/2 top-3.5 z-20 h-4 w-20 -translate-x-1/2 rounded-full bg-black flex items-center justify-end px-2">
        <span className="h-2 w-2 rounded-full bg-zinc-900 border border-zinc-700/60" />
      </div>

      {/* Écran intérieur */}
      <div className="relative h-full w-full overflow-hidden rounded-[2rem] bg-zinc-900 text-left select-none">
        {image ? (
          <img src={image} alt={alt} loading="lazy" className="h-full w-full object-cover" />
        ) : type === 'myevent' ? (
          /* Écran simulé MyEvent */
          <div className="flex h-full flex-col justify-between bg-gradient-to-b from-[#121124] to-[#0a0a14] p-3 pt-7 text-white text-[11px]">
            {/* Barre de statut */}
            <div className="flex items-center justify-between text-[9px] text-zinc-400 px-1">
              <span>09:41</span>
              <div className="flex items-center gap-1">
                <Wifi size={10} />
                <Battery size={10} />
              </div>
            </div>

            {/* En-tête MyEvent */}
            <div className="mt-2 flex items-center justify-between border-b border-white/10 pb-2">
              <div>
                <span className="font-titre font-bold text-xs bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                  MyEvent
                </span>
                <span className="block text-[9px] text-zinc-400">Mariage P & C</span>
              </div>
              <span className="rounded-full bg-green-500/20 px-2 py-0.5 text-[8px] font-semibold text-green-400 flex items-center gap-1">
                <span className="h-1.5 w-1.5 rounded-full bg-green-400 animate-pulse" />
                Scan Actif
              </span>
            </div>

            {/* Billet QR Code en avant */}
            <div className="my-auto rounded-xl border border-white/10 bg-white/5 p-2.5 text-center shadow-lg backdrop-blur-sm">
              <span className="text-[9px] font-semibold text-cyan-400 uppercase tracking-wider block mb-1">
                Billet Numérique #042
              </span>
              <div className="mx-auto my-1.5 grid h-20 w-20 place-items-center rounded-lg bg-white p-1 shadow-inner">
                <QrCode size={64} className="text-zinc-950" />
              </div>
              <p className="font-semibold text-zinc-200 text-[10px]">M. Patrick Mbia</p>
              <div className="mt-1 flex justify-center gap-2 text-[8px] text-zinc-400">
                <span className="rounded bg-white/10 px-1.5 py-0.5">Table 03 : VIP</span>
                <span className="rounded bg-purple-500/20 text-purple-300 px-1.5 py-0.5">2 places</span>
              </div>
            </div>

            {/* Bouton d'action bas */}
            <div className="rounded-xl bg-gradient-to-r from-violet-600 to-cyan-600 p-2 text-center text-[10px] font-semibold text-white shadow-md flex items-center justify-center gap-1.5">
              <CheckCircle size={12} />
              <span>Valider l'entrée (Hors-ligne)</span>
            </div>
          </div>
        ) : type === 'couture' ? (
          /* Écran simulé Carnet de Couturier */
          <div className="flex h-full flex-col justify-between bg-gradient-to-b from-[#181124] to-[#0d0914] p-3 pt-7 text-white text-[11px]">
            {/* Barre de statut */}
            <div className="flex items-center justify-between text-[9px] text-zinc-400 px-1">
              <span>14:20</span>
              <div className="flex items-center gap-1">
                <Wifi size={10} />
                <Battery size={10} />
              </div>
            </div>

            {/* En-tête Atelier */}
            <div className="mt-2 flex items-center justify-between border-b border-white/10 pb-2">
              <div>
                <span className="font-titre font-bold text-xs text-violet-400 flex items-center gap-1">
                  <Scissors size={12} /> Atelier Pro
                </span>
                <span className="block text-[9px] text-zinc-400">Carnet Digital</span>
              </div>
              <span className="rounded bg-violet-500/20 px-1.5 py-0.5 text-[8px] font-medium text-violet-300">
                8 commandes
              </span>
            </div>

            {/* Liste de commandes en cours */}
            <div className="my-auto space-y-2">
              <div className="rounded-lg border border-white/10 bg-white/5 p-2 text-[9px]">
                <div className="flex justify-between font-semibold text-zinc-200">
                  <span>Robe Soirée Satin</span>
                  <span className="text-cyan-400">Prêt</span>
                </div>
                <p className="text-[8px] text-zinc-400">Mme Kamga · Tour taille : 74cm</p>
              </div>

              <div className="rounded-lg border border-white/10 bg-white/5 p-2 text-[9px]">
                <div className="flex justify-between font-semibold text-zinc-200">
                  <span>Costume 3 pièces</span>
                  <span className="text-amber-400">Essayage</span>
                </div>
                <p className="text-[8px] text-zinc-400">M. Eto'o · Épaules : 48cm</p>
              </div>

              <div className="rounded-lg border border-white/10 bg-white/5 p-2 text-[9px]">
                <div className="flex justify-between font-semibold text-zinc-200">
                  <span>Ensemble Bamiléké</span>
                  <span className="text-purple-400">Coupe</span>
                </div>
                <p className="text-[8px] text-zinc-400">Famille Fotsing (3 modèles)</p>
              </div>
            </div>

            {/* Bouton d'action bas */}
            <div className="rounded-xl border border-violet-500/30 bg-violet-500/20 p-2 text-center text-[10px] font-semibold text-violet-200">
              + Nouvelle fiche client
            </div>
          </div>
        ) : (
          /* Écran générique élégant */
          <div className="flex h-full flex-col items-center justify-center bg-gradient-to-br from-violet/40 to-cyan/40 p-4 text-center">
            <Smartphone className="mb-2 text-white/80" size={36} />
            <span className="text-xs font-semibold text-white">Application Philip</span>
            <span className="text-[9px] text-zinc-300 mt-1">Capture à insérer</span>
          </div>
        )}
      </div>
    </div>
  )
}
