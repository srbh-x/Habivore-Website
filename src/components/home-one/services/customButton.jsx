import Link from "next/link";
export default function CustomButton({ title, link }) {
    return (
        <div className="header-btn header-btn-l1">
            <Link className="aximo-default-btn pill aximo-header-btn" href={link}>
                {title}
            </Link>
        </div>
    );
}
