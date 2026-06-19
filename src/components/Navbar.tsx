// src/components/Navbar.tsx
'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import * as LucideIcons from 'lucide-react';
import { DynamicIcon } from "@iso/utils/DynamicIcon";

export function Navbar({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    const [isCollapsed, setIsCollapsed] = useState(false);

    /* NavBar Items with properly typed icon names will soon integrate it from API */
    const mainNavItems = [
        { href: '/dashboard', label: 'Dashboard', iconName: 'LayoutDashboard' as const, position: 1 },
        { href: '/payments', label: 'Payments', iconName: 'WalletMinimal' as const, position: 2 },
        { href: '/transaction', label: 'Transaction', iconName: 'Banknote' as const, position: 3  },
        { href: '/monitor', label: 'Monitor', iconName: 'Monitor' as const, position: 4 },
        { href: '/history', label: 'History', iconName: 'History' as const, position: 5 },
        { href: '/plan', label: 'Plan', iconName: 'NotebookPen' as const, position: 6 }
    ];

    /* Footer NavItems will soon integrate it from API*/
    const footerNavItems = [
        { href: '/about', label: 'About', iconName: 'Info' as const, position: 1 },
        { href: '/settings', label: 'Settings', iconName: 'Settings' as const, position: 2 }
    ];

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
                    {/* Toggle Button */}
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
                        {isCollapsed ? (
                            <LucideIcons.CircleArrowRight className="w-5 h-5 text-gray-600" />
                        ) : (
                            <LucideIcons.CircleArrowLeft className="w-5 h-5 text-gray-600" />
                        )}
                    </button>

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
                    <div className="flex-1 p-4 overflow-y-auto">
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
                                                <DynamicIcon
                                                    name={page.iconName}
                                                    className={`
                                                        transition-all duration-200
                                                        ${isActive ? 'text-blue-700' : 'text-gray-500'}
                                                        group-hover:scale-110
                                                        ${isCollapsed ? 'w-6 h-6' : 'w-5 h-5'}
                                                    `}
                                                />
                                                {!isCollapsed && (
                                                    <>
                                                        <span className="font-medium">{page.label}</span>
                                                        {isActive && (
                                                            <LucideIcons.ArrowRight
                                                                className="ml-auto w-4 h-4 text-blue-700 transition-transform duration-200 group-hover:translate-x-1"
                                                            />
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
                                                    <DynamicIcon
                                                        name={page.iconName}
                                                        className={`
                                                            transition-all duration-200
                                                            ${isActive ? 'text-blue-700' : 'text-gray-500'}
                                                            group-hover:scale-110
                                                            ${isCollapsed ? 'w-6 h-6' : 'w-5 h-5'}
                                                        `}
                                                    />
                                                    {!isCollapsed && (
                                                        <>
                                                            <span className="font-medium">{page.label}</span>
                                                            {isActive && (
                                                                <LucideIcons.ArrowRight
                                                                    className="ml-auto w-4 h-4 text-blue-700 transition-transform duration-200 group-hover:translate-x-1"
                                                                />
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

            {/* Main content */}
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