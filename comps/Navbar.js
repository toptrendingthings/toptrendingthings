import Image from 'next/image';
import Link from 'next/Link';

const Navbar = () => {
    return (
        <nav>
            <Link href="/">
                <div className="logo">
                    <Image src="/logo.svg" width={128} height={54} />
                </div>
            </Link>
            <Link href="/"><a exact activeClassName='is-active' className="nav-item" >Home</a></Link>
            <Link href="/twitter"><a activeClassName='is-active' className="nav-item" to="/twitter">Twitter</a></Link>
        </nav>
    )
}

export default Navbar;