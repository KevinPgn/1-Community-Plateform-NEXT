"use client"
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { signIn } from "next-auth/react"

export function LoginPage() {
  return (
    <div className="flex min-h-screen bg-black text-white">
      {/* Logo Section */}
      <div className="flex-1 flex items-center justify-center">
        <Image
          src="/x-logo.jpg"
          alt="X Logo"
          width={300}
          height={300}
          priority
        />
      </div>

      {/* Login Form Section */}
      <div className="flex-1 flex items-center justify-center">
        <Card className="w-[400px] bg-black border-gray-800">
          <CardHeader>
            <h1 className="text-3xl font-bold">Ça se passe maintenant</h1>
            <p className="text-xl mt-2">Connectez-vous.</p>
          </CardHeader>
          <CardContent className="space-y-4">
            <Button variant="outline" className="w-full justify-start" onClick={() => signIn("github")}>
              <Image src="/github-icon.svg" alt="GitHub" width={20} height={20} className="mr-2" />
              Se connecter avec GitHub
            </Button>
          </CardContent>
            <Button className="w-full bg-blue-500 hover:bg-blue-600">
              Créer un compte
            </Button>
            <p className="text-xs text-gray-500">
              En vous inscrivant, vous acceptez les Conditions d'utilisation et la Politique de confidentialité, notamment l'Utilisation des cookies.
            </p>
          <CardFooter>
            <p className="text-gray-500">Vous avez déjà un compte ?</p>
            <Button variant="link" className="text-blue-500">
              Se connecter
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}