'use client';

import { Button } from '@/components/ui/button';

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
			<Button onClick={() => console.log(`Clicked ${count}`)}>New Button</Button>
			<Button
				variant={'link'}
				onClick={() => console.log(`Clicked ${count}`)}
			>
				New Button
			</Button>
			<Button
				variant={'ghost'}
				onClick={() => console.log(`Clicked ${count}`)}
			>
				New Button
			</Button>
			<Button
				variant={'destructive'}
				onClick={() => console.log(`Clicked ${count}`)}
			>
				X
			</Button>
			<Button
				variant={'outline'}
				onClick={() => console.log(`Clicked ${count}`)}
			>
				New Button
			</Button>
			<Button
				variant={'secondary'}
				onClick={() => console.log(`Clicked ${count}`)}
			>
				New Button
			</Button>
			<Button
				variant={'yellow'}
				size={'lg'}
			>
				My New Yellow Button
			</Button>
		</main>
	);
}
