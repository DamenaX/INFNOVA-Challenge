import { useState, useRef } from 'react'
import Button from '../common-ui/Button'
import icons from '../iconLibrary'
import { Link } from 'react-router-dom'
import { useTheme } from '../../context/ThemeContext'

function Header() {
    const [menuOpen, setMenuOpen] = useState(false)
    const [hoverStyle, setHoverStyle] = useState({ left: 0, width: 0, opacity: 0, transition: 'none' })
    const isHoveringNav = useRef(false)
    const { theme, toggleTheme } = useTheme()

    const Logo = icons.infnovaLogo
    const SunIcon = icons.sun
    const MoonIcon = icons.moon

    const handleMouseEnter = (e) => {
        const { offsetLeft, offsetWidth } = e.currentTarget;

        if (!isHoveringNav.current) {
            isHoveringNav.current = true;
            // Snap to the left edge of hovered item instantly
            setHoverStyle({
                left: offsetLeft,
                width: 0,
                opacity: 0,
                transition: 'none'
            });

            // Allow DOM to update, then animate 
            requestAnimationFrame(() => {
                requestAnimationFrame(() => {
                    setHoverStyle({
                        left: offsetLeft,
                        width: offsetWidth,
                        opacity: 1,
                        transition: 'all 0.3s ease-out'
                    });
                });
            });
        } else {
            // Slide to new item
            setHoverStyle({
                left: offsetLeft,
                width: offsetWidth,
                opacity: 1,
                transition: 'all 0.3s ease-out'
            });
        }
    };

    const handleMouseLeave = () => {
        isHoveringNav.current = false;
        // Fade out and shrink towards left
        setHoverStyle(prev => ({
            ...prev,
            width: 0,
            opacity: 0,
            transition: 'all 0.3s ease-out'
        }));
    };

    return (
        <>
            <header className="w-full h-20 flex justify-between items-center px-8 shadow-nova-sm relative z-40 bg-surface-primary">

                {/* Logo */}
                <Link to="/">
                    <Logo className="w-30 h-8" />
                </Link>

                {/* Desktop nav but it is hidden for displays below 760px */}
                <nav className="hidden md:block min-w-56" onMouseLeave={handleMouseLeave}>
                    <ul className="w-full flex justify-between font-normal relative">
                        {/* Moving underline */}
                        <div
                            className="absolute bottom-0 h-0.5 bg-text-accent pointer-events-none"
                            style={{
                                left: hoverStyle.left,
                                width: hoverStyle.width,
                                opacity: hoverStyle.opacity,
                                transition: hoverStyle.transition
                            }}
                        />
                        <li><Link to="/courses" className="block px-3 py-2 rounded-lg hover:text-text-accent transition-colors active:scale-95" onMouseEnter={handleMouseEnter}>Courses</Link></li>
                        <li><Link to="/about" className="block px-3 py-2 rounded-lg hover:text-text-accent transition-colors active:scale-95" onMouseEnter={handleMouseEnter}>About</Link></li>
                        <li><Link to="/contact" className="block px-3 py-2 rounded-lg hover:text-text-accent transition-colors active:scale-95" onMouseEnter={handleMouseEnter}>Contact</Link></li>
                    </ul>
                </nav>

                {/* Right side controls (Desktop) */}
                <div className="hidden md:flex justify-between items-center space-x-4">
                    <button
                        onClick={toggleTheme}
                        className="p-2 rounded-full text-text-secondary hover:bg-surface-secondary transition-colors"
                        aria-label="Toggle Dark Mode"
                    >
                        {theme === 'light' ? <MoonIcon className="w-5 h-5" /> : <SunIcon className="w-5 h-5" />}
                    </button>
                    <Button variant="link">Sign in</Button>
                    <Button variant="default">Enroll Now</Button>
                </div>

                {/* Right side controls (Mobile) */}
                <div className="flex items-center space-x-3 md:hidden">
                    <button
                        onClick={toggleTheme}
                        className="p-2 rounded-full text-text-secondary hover:bg-surface-secondary transition-colors"
                        aria-label="Toggle Dark Mode"
                    >
                        {theme === 'light' ? <MoonIcon className="w-5 h-5" /> : <SunIcon className="w-5 h-5" />}
                    </button>
                    {/* Hamburger Button that is isible only below md */}
                    <button
                        className="flex flex-col justify-center items-center w-10 h-10 gap-1.5 cursor-pointer"
                        onClick={() => setMenuOpen(true)}
                        aria-label="Open menu"
                    >
                        <span className="block w-6 h-0.5 bg-gray-800 dark:bg-gray-200 rounded-full" />
                        <span className="block w-6 h-0.5 bg-gray-800 dark:bg-gray-200 rounded-full" />
                        <span className="block w-6 h-0.5 bg-gray-800 dark:bg-gray-200 rounded-full" />
                    </button>
                </div>
            </header>

            {/*  mobile, small tablet left sliding menu */}

            {/* Backdrop */}
            <div
                className={`fixed inset-0 z-40 bg-black/40 transition-opacity duration-300 lg:hidden
                    ${menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
                onClick={() => setMenuOpen(false)}
            />

            {/* Slide-in Panel */}
            <aside
                className={`fixed top-0 left-0 z-50 h-full w-72 bg-surface-primary shadow-nova-md flex flex-col
                    transition-transform duration-300 ease-in-out lg:hidden
                    ${menuOpen ? 'translate-x-0' : '-translate-x-full'}`}
            >
                {/* Drawer Header for the logo */}
                <div className="flex items-center justify-between px-6 h-20 border-b border-border-default">
                    <Link to="/" onClick={() => setMenuOpen(false)}>
                        <Logo className="w-30 h-8" />
                    </Link>
                    <button
                        onClick={() => setMenuOpen(false)}
                        aria-label="Close menu"
                        className="w-8 h-8 flex items-center justify-center text-text-secondary hover:text-text-primary"
                    >
                        ✕
                    </button>
                </div>

                {/* Navingation */}
                <nav className="flex-1 px-4 py-8">
                    <ul className="flex flex-col gap-2 text-lg font-medium text-text-secondary">
                        <li><a href="#" onClick={() => setMenuOpen(false)} className="block px-4 py-3 rounded-xl hover:bg-surface-secondary hover:text-text-primary transition-colors active:scale-[0.98]">Courses</a></li>
                        <li><a href="#" onClick={() => setMenuOpen(false)} className="block px-4 py-3 rounded-xl hover:bg-surface-secondary hover:text-text-primary transition-colors active:scale-[0.98]">About</a></li>
                        <li><a href="#" onClick={() => setMenuOpen(false)} className="block px-4 py-3 rounded-xl hover:bg-surface-secondary hover:text-text-primary transition-colors active:scale-[0.98]">Contact</a></li>
                    </ul>
                </nav>

                {/* Auth Buttons */}
                <div className="px-6 py-8 border-t border-border-default flex flex-col gap-3">
                    <Button variant="link">Sign in</Button>
                    <Button variant="default">Enroll Now</Button>
                </div>
            </aside>
        </>
    )
}

export default Header