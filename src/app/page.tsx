'use client';

export default function Home() {
	const count = 0;
	return (
		<main>
			<h1> Home Page</h1>
			<button
				className={'border-2 bg-amber-300 shadow-2xl p-4 hover:bg-red-400'}
				onClick={() => console.log(`Clicked ${count}`)}
			>
				Contact Support
			</button>
		</main>
	);
}
