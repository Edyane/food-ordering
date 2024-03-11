"use client";
import { useState } from "react";

export default function LoginPage() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	return (
		<section className="mt-8">
			<h1 className="text-center text-primary text-4xl mb-4">Login</h1>
			<form className="block max-w-xs mx-auto">
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
			</form>
		</section>
	);
}
