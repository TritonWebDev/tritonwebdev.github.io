"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const pages = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Team", path: "/team" },
    { name: "Contact", path: "/contact" }
  ];

export default function Navigation() {
    const pathname = usePathname();
    return (
        <nav className="flex justify-center items-center p-4 gap-4">
            {pages.map(({ name, path }) => (
                <Link href={path} key={path} className={`hover:text-blue-400 ${pathname === path ? "text-blue-400 font-semibold" : ""}`}>
                    {name}
                </Link>
            ))}
        </nav>
    )
}
