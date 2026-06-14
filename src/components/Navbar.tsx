// src/components/Navbar.tsx
'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

export function Navbar({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    const [isCollapsed, setIsCollapsed] = useState(false);

    /* Temporary NavBar */
    const mainNavItems = [
        { href: '/dashboard', label: 'Dashboard', icon: '📊', code: 'dashboard', position: 1 },
        { href: '/portfolio', label: 'Portfolio', icon: '📁', code: 'portfolio', position: 3 },
        { href: '/blog', label: 'Blog', icon: '📝', code: 'blog', position: 3 },
        { href: '/contact', label: 'Contact', icon: '📧', code: 'contact', position: 4 }
    ];

    /* Temporary FootNavItem */
    const footerNavItems = [
        { href: '/about', label: 'About', icon: 'ℹ️', code: 'about', position: 1 },
        { href: '/settings', label: 'Settings', icon: '⚙️', code: 'settings', position: 2 }
    ];

    /* Will turn this global state so whe */
    const toggleNavbar = () => {
        setIsCollapsed(!isCollapsed);
    };

    return (
        <div className="flex">
            {/* Navbar */}
            <nav
                className={`
                    fixed left-0 top-0 h-full bg-white border-r border-gray-200 shadow-sm
                    transition-all duration-300 ease-in-out z-50
                    ${isCollapsed ? 'w-20' : 'w-64'}
                `}
            >
                <div className="flex flex-col h-full relative">
                    {/* Toggle Button - Centered Vertically */}
                    <button
                        onClick={toggleNavbar}
                        className={`
                            absolute -right-3 top-1/2 -translate-y-1/2
                            bg-white border border-gray-200 
                            rounded-full p-1.5 shadow-md hover:shadow-lg
                            transition-all duration-200 hover:scale-110
                            focus:outline-none focus:ring-2 focus:ring-blue-500
                            z-50
                        `}
                        aria-label={isCollapsed ? 'Expand sidebar' : 'Collapse sidebar'}
                    >
                        <span className="text-sm font-bold text-gray-600">
                            {isCollapsed ? '→' : '←'}
                        </span>
                    </button>

                    {/* Logo Section */}
                    <div className={`p-6 border-b border-gray-200 ${isCollapsed ? 'px-4' : ''}`}>
                        <Link href="/">
                            {isCollapsed ? (
                                <h2 className="text-xl font-bold text-gray-800 text-center">NA</h2>
                            ) : (
                                <h2 className="text-2xl font-bold text-gray-800">NextApp</h2>
                            )}
                        </Link>
                    </div>

                    {/* Main Navigation */}
                    <div className="flex-1 p-4">
                        <ul className="space-y-2">
                            {mainNavItems
                                .sort((a, b) => a.position - b.position)
                                .map((page) => {
                                    const isActive = pathname === page.href;
                                    return (
                                        <li key={page.href} className="relative group">
                                            <Link
                                                href={page.href}
                                                className={`
                                                    flex items-center rounded-lg
                                                    transition-all duration-200 transform
                                                    hover:scale-105 hover:shadow-md
                                                    ${isCollapsed ? 'justify-center px-2 py-3' : 'space-x-3 px-4 py-3'}
                                                    ${isActive
                                                    ? 'bg-blue-50 text-blue-700 border-r-4 border-blue-700'
                                                    : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                                                }
                                                `}
                                            >
                                                <span className="text-xl transition-transform duration-200 group-hover:scale-110">
                                                    {page.icon}
                                                </span>
                                                {!isCollapsed && (
                                                    <>
                                                        <span className="font-medium">{page.label}</span>
                                                        {isActive && (
                                                            <span className="ml-auto text-blue-700 transition-transform duration-200 group-hover:translate-x-1">
                                                                →
                                                            </span>
                                                        )}
                                                    </>
                                                )}
                                            </Link>
                                            {/* Tooltip for collapsed mode */}
                                            {isCollapsed && (
                                                <div className={`
                                                    absolute left-full top-1/2 -translate-y-1/2 ml-2
                                                    px-2 py-1 bg-gray-900 text-white text-xs rounded
                                                    opacity-0 invisible group-hover:opacity-100 group-hover:visible
                                                    transition-all duration-200 whitespace-nowrap z-50
                                                    pointer-events-none
                                                `}>
                                                    {page.label}
                                                    <div className="absolute left-0 top-1/2 -translate-x-1 -translate-y-1/2
                                                          border-4 border-transparent border-r-gray-900"></div>
                                                </div>
                                            )}
                                        </li>
                                    );
                                })}
                        </ul>
                    </div>

                    {/* Footer Section */}
                    <div className="border-t border-gray-200">
                        <div className="p-4">
                            <ul className="space-y-2">
                                {footerNavItems
                                    .sort((a, b) => a.position - b.position)
                                    .map((page) => {
                                        const isActive = pathname === page.href;
                                        return (
                                            <li key={page.href} className="relative group">
                                                <Link
                                                    href={page.href}
                                                    className={`
                                                        flex items-center rounded-lg
                                                        transition-all duration-200 transform
                                                        hover:scale-105 hover:shadow-md
                                                        ${isCollapsed ? 'justify-center px-2 py-3' : 'space-x-3 px-4 py-3'}
                                                        ${isActive
                                                        ? 'bg-blue-50 text-blue-700 border-r-4 border-blue-700'
                                                        : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                                                    }
                                                    `}
                                                >
                                                    <span className="text-xl transition-transform duration-200 group-hover:scale-110">
                                                        {page.icon}
                                                    </span>
                                                    {!isCollapsed && (
                                                        <>
                                                            <span className="font-medium">{page.label}</span>
                                                            {isActive && (
                                                                <span className="ml-auto text-blue-700 transition-transform duration-200 group-hover:translate-x-1">
                                                                    →
                                                                </span>
                                                            )}
                                                        </>
                                                    )}
                                                </Link>
                                                {/* Tooltip for collapsed mode */}
                                                {isCollapsed && (
                                                    <div className={`
                                                        absolute left-full top-1/2 -translate-y-1/2 ml-2
                                                        px-2 py-1 bg-gray-900 text-white text-xs rounded
                                                        opacity-0 invisible group-hover:opacity-100 group-hover:visible
                                                        transition-all duration-200 whitespace-nowrap z-50
                                                        pointer-events-none
                                                    `}>
                                                        {page.label}
                                                        <div className="absolute left-0 top-1/2 -translate-x-1 -translate-y-1/2
                                                              border-4 border-transparent border-r-gray-900"></div>
                                                    </div>
                                                )}
                                            </li>
                                        );
                                    })}
                            </ul>
                        </div>

                        {/* Copyright Section */}
                        {!isCollapsed && (
                            <div className="p-4 border-t border-gray-200">
                                <div className="flex justify-between items-center text-xs text-gray-500">
                                    <span>© 2026 NextApp</span>
                                    <span className="text-gray-400">v1.0</span>
                                </div>
                            </div>
                        )}

                        {/* Mini copyright for collapsed mode */}
                        {isCollapsed && (
                            <div className="p-4 border-t border-gray-200">
                                <div className="text-center text-xs text-gray-400">
                                    <span>©</span>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </nav>

            {/* Main content - adjusts margin based on collapsed state */}
            <main
                className={`
                    flex-1 min-h-screen bg-gray-50
                    transition-all duration-300 ease-in-out
                    ${isCollapsed ? 'ml-20' : 'ml-64'}
                `}
            >
                {children}
            </main>
        </div>
    );
}