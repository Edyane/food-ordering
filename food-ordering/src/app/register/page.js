"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function RegisterPage() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [creatingUser, setCreatingUser] = useState(false);
	const [userCreated, setUserCreated] = useState(false);
	const [error, setError] = useState(false);

	async function handleFormSubmit(e) {
		e.preventDefault();
		setCreatingUser(true);
		setError(false);
		setUserCreated(false);
		const response = await fetch("/api/register", {
			method: "POST",
			body: JSON.stringify({ email, password }),
			headers: { "Content-Type": "application/json" },
		});
		if (response.ok) {
			setUserCreated(true);
		} else {
			setError(true);
		}
		setCreatingUser(false);
	}

	return (
		<section className="mt-8">
			<h1 className="text-center text-primary text-4xl mb-4">Register</h1>
			{userCreated && (
				<div className="my-4 text-center">
					User created.<br></br>
					<Link className="underline" href={"/login"}>
						Click here to Login
					</Link>
				</div>
			)}

			{error && (
				<div className="my-4 text-center">
					<p>An error has occurred. Please try again.</p>
				</div>
			)}

			<form
				className="block max-w-xs mx-auto"
				onSubmit={handleFormSubmit}
			>
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
				<button type="submit" disabled={creatingUser}>
					Register
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
				<div className="text-center my-4 text-gray-500 pt-4">
					<span className="px-1">Existing account?</span> 
					<Link className="underline text-primary" href={'/login'}>Login here</Link>
				</div>
			</form>
		</section>
	);
}
