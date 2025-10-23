import { FC, PropsWithChildren } from "react";
import "../../../styles/globals.css";
import Link from "next/link";
import Image from "next/image";
import logo from "../../../public/img/logo.png";

const navigation = [
    { name: "Homepage", href: "/new", current: true },
    { name: "One", href: "/new/one", current: true },
    { name: "One > a", href: "/new/one/a", current: true },
    { name: "One > b", href: "/new/one/b", current: true },
];

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(" ");
}

const RootLayout: FC<PropsWithChildren> = ({ children }) => {
    return (
        <>
            <div className="flex h-full">
                {/* Static sidebar for desktop */}
                <div className="hidden lg:flex lg:shrink-0">
                    <div className="flex w-64 flex-col">
                        {/* Sidebar component, swap this element with another sidebar if you like */}
                        <div className="flex min-h-0 flex-1 flex-col border-r border-gray-200 bg-gray-100">
                            <div className="flex flex-1 flex-col overflow-y-auto pt-5 pb-4">
                                <div className="flex shrink-0 items-center px-4">
                                    <Image className="h-8 w-auto" src={logo} alt="Your Company" />
                                </div>
                                <nav className="mt-5 flex-1" aria-label="Sidebar">
                                    <div className="space-y-1 px-2">
                                        {navigation.map((item, i) => (
                                            <Link
                                                key={i}
                                                href={item.href}
                                                className={classNames(
                                                    item.current
                                                        ? "bg-gray-200 text-gray-900"
                                                        : "text-gray-600 hover:bg-gray-50 hover:text-gray-900",
                                                    "group flex items-center px-2 py-2 text-sm font-medium rounded-md",
                                                )}
                                            >
                                                {item.name}
                                            </Link>
                                        ))}
                                    </div>
                                </nav>
                            </div>
                            <div className="flex shrink-0 border-t border-gray-200 p-4">
                                <a href="#" className="group block w-full shrink-0">
                                    <div className="flex items-center">
                                        <div>
                                            <Image
                                                className="inline-block h-9 w-9 rounded-full"
                                                src={logo}
                                                alt="Logo"
                                            />
                                        </div>
                                        <div className="ml-3">
                                            <p className="text-sm font-medium text-gray-700 group-hover:text-gray-900">
                                                Whitney Francis
                                            </p>
                                            <p className="text-xs font-medium text-gray-500 group-hover:text-gray-700">
                                                View profile
                                            </p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                {children}
            </div>
        </>
    );
};

export default RootLayout;
