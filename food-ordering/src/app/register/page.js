"use client";
import Image from "next/image";
import { useState } from 'react';

export default function RegisterPage() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [creatingUser, setCreatingUser] = useState(false);
	const [userCreated, setUserCreated] = useState(false);

	async function handleFormSubmit (e) {
		e.preventDefault();
		setCreatingUser(true);
		await fetch('/api/register', {
			method: 'POST',
			body: JSON.stringify({email, password}),
			headers: {'Content-Type' : 'application/json'},
		});
		setCreatingUser(false);
	};

	return (
		<section className="mt-8">
			<h1 className="text-center text-primary text-4xl mb-4">Register</h1>
			<form className="block max-w-xs mx-auto" onSubmit={handleFormSubmit}>
				<input
					type="email"
					placeholder="Email"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					disabled={creatingUser}
				/>
				<input
					type="password"
					placeholder="Password"
					value={password}
					onChange={(e) => setPassword(e.target.value)}
					disabled={creatingUser}
				/>
				<button type="submit">Register</button>

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