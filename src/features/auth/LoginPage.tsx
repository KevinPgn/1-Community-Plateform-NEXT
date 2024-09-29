"use client"

import React from "react"
import { signIn } from "next-auth/react"
import { Button } from "@/components/ui/button"

export default function LoginPage() {
  return (
    <div className="flex w-screen h-screen bg-black">
      {/* Section Gauche avec Image */}
      <div className="hidden lg:flex w-1/2 relative">
        <img
          loading="lazy"
          src="/social-media.webp"
          alt="Landing Image"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Section Droite avec Login */}
      <div className="flex flex-col justify-center items-center w-full lg:w-1/2 bg-gray-900 p-8">
        <div className="w-full max-w-md">
          <h1 className="text-4xl font-bold mb-6 text-center text-white">Bienvenue sur Prisme</h1>
          <div className="space-y-4">
            <Button onClick={() => signIn("github")} className="w-full bg-white text-black flex items-center justify-center space-x-2 hover:bg-gray-100">
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Icône GitHub */}
                <path
                  fillRule="evenodd"
                  d="M12 0C5.371 0 0 5.373 0 12c0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.73.083-.73 1.205.084 1.84 1.236 1.84 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.418-1.305.762-1.605-2.665-.304-5.467-1.332-5.467-5.93 0-1.31.468-2.381 1.235-3.221-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.301 1.23a11.5 11.5 0 013.003-.404c1.018.005 2.043.138 3.003.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.873.118 3.176.77.84 1.234 1.911 1.234 3.221 0 4.61-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .322.218.694.825.576C20.565 21.796 24 17.3 24 12c0-6.627-5.373-12-12-12z"
                  clipRule="evenodd"
                />
              </svg>
              <span>Se connecter avec GitHub</span>
            </Button>

            <Button onClick={() => signIn("google")} variant="outline" className="w-full flex items-center justify-center space-x-2">
              <svg
                className="w-5 h-5"
                viewBox="0 0 488 512"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Icône Google */}
                <path
                  fill="currentColor"
                  d="M488 261.8C488 403 391 504 248 504 111 504 0 393 0 256S111 8 248 8c66.3 0 123 24.5 166.3 64.9l-67.5 64.9C323.4 107.5 283.3 88 248 88 167.5 88 100 155.5 100 236s67.5 148 148 148c75.6 0 138-54.7 148-128h-148v-84h236c2.3 12.7 3.7 25.9 3.7 39.8z"
                />
              </svg>
              <span>Se connecter avec Google</span>
            </Button>

            <Button onClick={() => signIn("discord")} variant="secondary" className="w-full flex items-center justify-center space-x-2">
              <svg
                className="w-5 h-5"
                viewBox="0 0 245 240"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Icône Discord */}
                <path
                  fill="currentColor"
                  d="M104.4 104.5c-5.7 0-10.3-5.1-10.3-11.4 0-6.3 4.3-11.4 10.3-11.4 6 0 10.6 5.1 10.3 11.4.3 6.3-3.3 11.4-10.3 11.4zm36 0c-5.7 0-10.3-5.1-10.3-11.4 0-6.3 4.3-11.4 10.3-11.4 6 0 10.6 5.1 10.3 11.4.3 6.3-3.3 11.4-10.3 11.4zM189.6 20H55.3C40.4 20 29.4 31 29.4 45.9v148.2c0 14.9 11 25.9 25.9 25.9h134.3c14.9 0 25.9-11 25.9-25.9V45.9c.1-14.9-10.9-25.9-25.9-25.9zm-18.1 124.3c0 6.7-5.5 12.1-12.2 12.1H68.7c-6.7 0-12.2-5.4-12.2-12.1v-4.1c0-6.7 5.5-12.1 12.2-12.1h90.6c6.7 0 12.2 5.4 12.2 12.1v4.1zm23.4 58.1c0 .1-.1.2-.1.2l-11.3-19c-5 8.8-14 15.4-24.5 15.4-5.6 0-11.1-1.9-15.6-5.3 4.3 1.4 9 2.2 13.8 2.2 23.7 0 43-19.4 43-43 0-2.7-.3-5.3-.8-7.8 7.1-4.1 12.3-11.4 14.2-19.7-6.3 3.3-13 5.3-19.8 6.3-3.4-7.1-8.3-13-14.5-18.3-12.2-12.2-28.3-19-45.7-19-4.3 0-8.5.3-12.6.9-3.8-7.9-12.5-13.7-21.5-14.7-29.2-3.3-52.5 23.7-52.5 52.9 0 .4 0 .8.1 1.1-25.4 3.2-45.3 22.8-45.3 48.1 0 2 .2 4 0 6.1C53 209 55.4 224.4 55.4 224.4c9.3 3.3 16.1 7.5 16.1 7.5l13.9-5.7s5.7 10.7 14.6 12.1c2.6 10 10.1 19.7 21.6 21.9-2.3-11.1-2.3-22.9-2.3-24.7z"
                />
              </svg>
              <span>Se connecter avec Discord</span>
            </Button>
          </div>

          {/* Section Création de Compte / Connexion */}
          <div className="mt-6 text-center">
            <p className="text-white">
              Vous n'avez pas de compte ?{" "}
              <a href="/signup" className="text-blue-500 hover:underline">
                Créez-en un
              </a>
            </p>
            <p className="mt-2 text-white">
              Déjà membre ?{" "}
              <a href="/login" className="text-blue-500 hover:underline">
                Connectez-vous
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}