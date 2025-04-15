interface TitleProps {
	title: string;
	subtitle: string;
}

export default function Title({ title, subtitle }: TitleProps) {
	return (
		<div className="p-5 bg-amber-500">
			<h1 className="text-4xl font-bold text-center">{title}</h1>
			<p className="text-lg text-center">{subtitle}</p>
		</div>
	);
}
