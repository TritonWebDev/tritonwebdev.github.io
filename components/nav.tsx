"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navigation() {
    return (
        <nav className="flex justify-center items-center p-4">
            <ul className="flex gap-4">
                <li><a href="/">Home</a></li>
                <li><a href="/hello">Hello World!</a></li>
            </ul>
        </nav>
    )
}
