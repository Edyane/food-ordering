"use client";
import { useState } from "react";

export default function LoginPage() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	async function handleFormSubmit(e) {
		e.preventDefault();
		await fetch('/api/login', { 
			body: JSON.stringify({email, password}),
			headers: {'Content-Type': 'application/json'},
			method: 'POST',
		})
	}

	return (
		<section className="mt-8">
			<h1 className="text-center text-primary text-4xl mb-4">Login</h1>
			<form className="block max-w-xs mx-auto" onSubmit={handleFormSubmit}>
				<input
					type="email"
					placeholder="Email"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					disabled={false}
				/>
				<input
					type="password"
					placeholder="Password"
					value={password}
					onChange={(e) => setPassword(e.target.value)}
					disabled={false}
				/>
				<button type="submit" disabled={false}>
					Login
				</button>
				<div className="my-4 text-center text-gray-500">
					or login with provider
				</div>
				<button className="flex gap-4 justify-center">
					<Image
						src={"/google.png"}
						alt={""}
						width={24}
						height={24}
					/>
					Login with Google
				</button>
			</form>
		</section>
	);
}
