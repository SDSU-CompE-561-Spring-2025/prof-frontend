'use client';

import { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from '@/components/ui/table';
import SkeletonWrapper from '@/components/SkeletonWrapper';

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
			<SkeletonWrapper isLoading={loading}>
				<Card className="mt-6">
					<CardHeader>
						<CardTitle>Latest Transactions</CardTitle>
					</CardHeader>
					<CardContent>
						<Table>
							<TableHeader>
								<TableRow>
									<TableHead>Description</TableHead>
									<TableHead>Category</TableHead>
									<TableHead>Amount</TableHead>
									<TableHead>Type</TableHead>
								</TableRow>
							</TableHeader>
							<TableBody>
								{data?.map((transaction) => (
									<TableRow key={transaction.id}>
										<TableCell>
											{transaction.description.charAt(0).toUpperCase() +
												transaction.description.slice(1)}
										</TableCell>
										<TableCell>{transaction.category_name}</TableCell>
										<TableCell>${transaction.amount.toFixed(2)}</TableCell>
										<TableCell
											className={
												transaction.transaction_type === 'income'
													? 'text-green-500'
													: 'text-red-500'
											}
										>
											{transaction.transaction_type}
										</TableCell>
									</TableRow>
								))}
							</TableBody>
						</Table>
					</CardContent>
				</Card>
			</SkeletonWrapper>
		</main>
	);
}
