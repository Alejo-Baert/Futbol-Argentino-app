import Link from "next/link";

export default function NotFound() {
    return (
        <div>
            <p>No encontrado</p>
            <Link href='/'>
                Volver
            </Link>
        </div>
    )
} 