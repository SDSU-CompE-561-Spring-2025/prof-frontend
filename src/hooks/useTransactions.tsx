import { useEffect, useState } from 'react';

function UseTransactions() {
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

	return [data, loading];
}

export default UseTransactions;
