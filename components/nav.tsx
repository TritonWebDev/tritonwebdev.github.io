"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const pages = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Team", path: "/team" },
    { name: "Apply", path: "/apply" },
    { name: "Contact", path: "/contact" }
  ];

export default function Navigation() {
    const pathname = usePathname();
    return (
        <nav className="flex justify-center items-center gap-4 text-xl">
            {pages.map(({ name, path }) => (
                <Link href={path} key={path} className={`hover:text-blue-400 hover:text-2xl transition-all duration-300 ${pathname === path ? "text-2xl text-blue-400 font-semibold" : ""}`}>
                    {name}
                </Link>
            ))}
        </nav>
    )
}
