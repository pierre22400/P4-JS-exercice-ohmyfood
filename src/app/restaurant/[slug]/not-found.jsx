import Link from "next/link";

export default function NotFound() {
  return (
    <main>
      <h1>Restaurant non trouvé</h1>

      <p>
        Le restaurant que vous cherchez n'existe pas
        ou a été supprimé.
      </p>

      <Link href="/">
        Retour aux restaurants
      </Link>
    </main>
  );
}