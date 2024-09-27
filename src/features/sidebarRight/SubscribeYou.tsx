import { Button } from "@/components/ui/button"

export const SubscribeYou = () => {
  return <div className="w-full border border-white/10 rounded-lg p-3">
    <h2 className="text-xl font-bold mb-1">Abonnez-vous à Premium</h2>
    <p className="text-sm mb-5">Abonnez‑vous pour profiter de nouvelles fonctionnalités et recevoir une part des revenus publicitaires si vous respectez les critères.</p>
    <Button className="w-fit px-4 bg-blue-500 hover:bg-blue-600 rounded-3xl">Souscrire</Button>
  </div>
}