import Image from "next/image";

export default function HomeMenu() {
	return (
		<section>
			<div className="absolute h-full left-0 right-0 w-full justify-start overflow-x-hidden">
				<div className="h-48 w-48 absolute -left-12 text-left">
					<Image
						src={"/sallad1.png"}
						layout={"fill"}
						objectFit={"contain"}
						alt={"sallad"}
					/>
				</div>
				<div className="h-48 w-48 absolute -top-12 -right-12">
					<Image
						src={"/sallad2.png"}
						layout={"fill"}
						objectFit={"contain"}
						alt={"sallad"}
					/>
				</div>
			</div>
			<div className="text-center">
				<h3 className="uppercase text-gray-600 font-semibold leading-4">
					Check out
				</h3>
				<h2 className="text-primary font-bold text-4xl italic">Menu</h2>
			</div>
		</section>
	);
}
