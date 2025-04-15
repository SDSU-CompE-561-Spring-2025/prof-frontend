import Title from '@/components/Title';
import { Backpack } from 'lucide-react';

export default function Home() {
	return (
		<main>
			<Title
				title="Home Page"
				subtitle="Welcome to the Home Page"
			/>
			<div className="flex justify-center">
				<Backpack />
			</div>
		</main>
	);
}
