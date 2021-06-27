import Link from "next/link";

export default function Home() {
	return (
		<div className="bg-red-600">
			<Link href="Perfil"> Perfil</Link>
			<Link href="Ingresar"> Ingresar</Link>
			<Link href="Registrarse"> Registrarse</Link>
		</div>
	);
}
