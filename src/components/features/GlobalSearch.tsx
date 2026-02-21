'use client';

import { useState, useEffect } from 'react';
import { mcs, battles } from '@/types/mock';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function GlobalSearch() {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState<{ type: 'mc' | 'battle'; name: string; slug: string }[]>([]);
    const router = useRouter();

    useEffect(() => {
        if (query.length < 2) {
            setResults([]);
            return;
        }

        const mcResults = mcs
            .filter(mc => mc.stageName.toLowerCase().includes(query.toLowerCase()))
            .map(mc => ({ type: 'mc' as const, name: mc.stageName, slug: mc.slug }));

        const battleResults = battles
            .filter(b => b.name.toLowerCase().includes(query.toLowerCase()))
            .map(b => ({ type: 'battle' as const, name: b.name, slug: b.slug }));

        setResults([...mcResults, ...battleResults].slice(0, 5));
    }, [query]);

    return (
        <div className="relative group">
            <input
                type="search"
                placeholder="Buscar MC, Batalha..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="h-10 w-64 rounded-none border border-border bg-muted px-4 text-sm focus:border-highlight focus:outline-none transition-all"
            />

            {results.length > 0 && (
                <div className="absolute top-11 left-0 w-full bg-card border border-border shadow-2xl z-[100]">
                    {results.map((res, i) => (
                        <Link
                            key={i}
                            href={res.type === 'mc' ? `/mc/${res.slug}` : `/batalhas`}
                            onClick={() => setQuery('')}
                            className="block p-3 hover:bg-muted border-b border-border last:border-0"
                        >
                            <span className="text-[10px] font-bold uppercase text-accent mr-2">{res.type}</span>
                            <span className="text-sm font-bold">{res.name}</span>
                        </Link>
                    ))}
                </div>
            )}
        </div>
    );
}
