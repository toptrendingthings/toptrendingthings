import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
    return (
        <nav>
            <Link href="/">
                <div className="logo">
                    <Image src="/logo.svg" width={128} height={54} alt="toptrendingthings"/>
                </div>
            </Link>
            <Link href="/"><a exact activeClassName='is-active' className="nav-item" >Home</a></Link>
            <Link href="/about"><a activeClassName='is-active' className="nav-item" to="/about">About</a></Link>
        </nav>
    )
}

export default Navbar;