import Link from "next/link";
function BreadCrumb({ title, isNested, nestedTitle }) {
	return (
		<div className="aximo-breadcrumb">
			<div className="container">
				<h1 className="post__title">{title}</h1>
				<nav className="breadcrumbs">
					<ul>
						<li>
							<Link href="/">Home</Link>
						</li>
						{isNested && (
							<li>
								<Link href={`/${nestedTitle.toLowerCase()}`}>
									{nestedTitle}
								</Link>
							</li>
						)}
						<li aria-current="page"> {title}</li>
					</ul>
				</nav>
			</div>
		</div>
	);
}

export default BreadCrumb;
