'use client';

import { useEffect, useState } from 'react';
import { Skeleton } from '@/components/ui/skeleton';

export default function Home() {
	const [data, setData] = useState<any>([]);
	const [loading, setLoading] = useState(true);
	useEffect(() => {
		const timer = setTimeout(() => {
			fetch('http://localhost:8000/transactions/', {
				method: 'GET',
				headers: {
					Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
					mediaType: 'application/json',
				},
			})
				.then((res) => res.json())
				.then((res) => {
					setData(res);
					setLoading(false); // Update loading state
				});
		}, 2000); // 2-second delay

		return () => clearTimeout(timer); // Cleanup the timer on component unmount
	}, []);

	return (
		<main>
			<h1> Home Page</h1>
			{loading ? (
				<div className="flex flex-col items-center space-y-3 p-10 m-10">
					<div className="items-center space-y-2">
						<Skeleton className="h-8 w-[500px]" />
						<Skeleton className="h-8 w-[500px]" />
					</div>
				</div>
			) : (
				<ul>
					{data.map((item, index) => (
						<li key={index}>{item.category_name}</li>
					))}
				</ul>
			)}
		</main>
	);
}
