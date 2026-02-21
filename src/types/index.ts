export interface MC {
    id: string;
    slug: string;
    stageName: string;
    realName?: string;
    photoUrl: string;
    city: string;
    state: string;
    bio?: string;
    rank: number;
    stats: {
        wins: number;
        losses: number;
        titles: number;
    };
    socials: {
        instagram?: string;
        youtube?: string;
        spotify?: string;
    };
    videos: string[]; // YouTube link IDs
    tracks: string[]; // Spotify track IDs
}

export interface Battle {
    id: string;
    slug: string;
    name: string;
    location: string;
    city: string;
    state: string;
    description: string;
    history?: string;
    logoUrl: string;
    ranking: RankingItem[];
}

export interface RankingItem {
    mcId: string;
    mcName: string;
    points: number;
    position: number;
}

export interface Event {
    id: string;
    battleId: string;
    name: string;
    date: string;
    location: string;
    mcs: string[]; // mcIds
    videoUrl?: string;
    winnerId?: string;
}

export interface NewsArticle {
    id: string;
    slug: string;
    title: string;
    excerpt: string;
    content: string;
    coverImage: string;
    category: string;
    tags: string[];
    author: string;
    createdAt: string;
    seoDescription: string;
}
