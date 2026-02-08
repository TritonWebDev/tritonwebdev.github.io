import './style.css';

export default function LinkComponent({ href, name }: { href: string, name: string }) {
    return (
        <a href={href} target="_blank">
            <li>{name}</li>
        </a>
    )
}