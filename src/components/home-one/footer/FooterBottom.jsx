import Image from "next/image";
import LogoWhiteImg from "../../../public/images/logo/8VerseHABIVORE-light.png";
function FooterBottom() {
	return (
		<>
			<div className="col-lg-6">
				<div className="aximo-footer-logo">
					<a href="https://www.habivore.com" target="_blank" rel="noopener noreferrer">
						<Image src={LogoWhiteImg} alt="Logo" />
					</a>
				</div>
			</div>
			<div className="col-lg-6">
				<div className="aximo-copywright one">
					{/* <p> &copy; Copyright 2026, All Rights Reserved</p> */}
					<p> Copyright &copy; 2026 The 8 Verse. All Rights Reserved.</p>
				</div>
			</div>
		</>
	);
}

export default FooterBottom;
