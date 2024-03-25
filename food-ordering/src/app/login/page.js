"use client";
import {signIn} from "next-auth/react";
import Image from "next/image";
import { useState } from "react";

export default function LoginPage() {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [loginInProgress, setLoginInProgress] = useState(false);

	async function handleFormSubmit(e) {
		e.preventDefault();
		setLoginInProgress(true);
		await signIn('credentials', {email, password});
		setLoginInProgress(false);
	}

	return (
		<section className="mt-8" onSubmit={handleFormSubmit}>
			<h1 className="text-center text-primary text-4xl mb-4">Login</h1>
			<form className="block max-w-xs mx-auto" method="POST" action="/api/auth">
				<input
					type="email"
					name="email"
					placeholder="Email"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					disabled={loginInProgress}
				/>
				<input
					type="password"
					name="password"
					placeholder="Password"
					value={password}
					onChange={(e) => setPassword(e.target.value)}
					disabled={loginInProgress}
				/>
				<button type="submit" disabled={loginInProgress}>
					Login
				</button>
				<div className="my-4 text-center text-gray-500">
					or login with provider
				</div>
				<button disabled={false} className="flex gap-4 justify-center">
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
