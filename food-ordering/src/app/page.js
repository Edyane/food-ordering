import Hero from "@/components/layout/Hero";
import HomeMenu from "@/components/layout/HomeMenu";
import SectionHeaders from "@/components/layout/SectionHeaders";

export default function Home() {
	return (
		<>
			<Hero />
			<HomeMenu />
			<section className="text-center my-16">
				<SectionHeaders
					subHeader={"Our story"}
					mainHeader={"About us"}
				/>
				<div className="max-w-md text-gray-500 mx-auto mt-4 flex flex-col gap-4">
					<p>
						Lorem Ipsum is simply dummy text of the printing and
						typesetting industry. Lorem Ipsum has been the
						industry's standard dummy text ever since the 1500s,
						when an unknown printer took a galley of type and
						scrambled it to make a type specimen book. It has
						survived not only five centuries, but also the leap into
						electronic typesetting, remaining essentially unchanged.
					</p>
					<p>
						Lorem Ipsum is simply dummy text of the printing and
						typesetting industry. Lorem Ipsum has been the
						industry's standard dummy text ever since the 1500s,
						when an unknown printer took a galley of type and
						scrambled it to make a type specimen book. It has
						survived not only five centuries, but also the leap into
						electronic typesetting, remaining essentially unchanged.
					</p>
					<p>
						Lorem Ipsum is simply dummy text of the printing and
						typesetting industry. Lorem Ipsum has been the
						industry's standard dummy text ever since the 1500s,
						when an unknown printer took a galley of type and
						scrambled it to make a type specimen book.
					</p>
				</div>
			</section>
			<section className="text-center my-8">
				<SectionHeaders
					subHeader={"Don't hesitate"}
					mainHeader={"Contact us"}
				/>
				<div className="mt-8">
					<a className="text-4xl underline text-gray-500" href={"tel:+46738123123"}>
						+46 738 123 123
					</a>
				</div>
			</section>
		</>
	);
}

