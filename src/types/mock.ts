import { MC, Battle, NewsArticle, Event } from './index';

export const mcs: MC[] = [
    {
        id: '1',
        slug: 'mc-kant',
        stageName: 'Kant',
        realName: 'Luiz Gustavo',
        photoUrl: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&fit=crop&w=500&q=80',
        city: 'São Paulo',
        state: 'SP',
        bio: 'Um dos maiores letristas da cena atual, conhecido por rimas rápidas e complexas.',
        rank: 1,
        stats: { wins: 150, losses: 20, titles: 12 },
        socials: { instagram: 'https://instagram.com/kant', youtube: 'https://youtube.com/kant' },
        videos: ['v_LpG4S1ZlM', 'f4e_O6mUay4'],
        tracks: ['7lE6xW6XzqWjWjWj']
    },
    {
        id: '2',
        slug: 'mc-jhony',
        stageName: 'Jhony',
        photoUrl: 'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?auto=format&fit=crop&w=500&q=80',
        city: 'Rio de Janeiro',
        state: 'RJ',
        bio: 'Rei do freestyle no Rio, conhecido por sua agressividade e flow único.',
        rank: 2,
        stats: { wins: 120, losses: 30, titles: 8 },
        socials: { instagram: 'https://instagram.com/jhony' },
        videos: ['hXq_G8m7OqI'],
        tracks: []
    }
];

export const battles: Battle[] = [
    {
        id: 'b1',
        slug: 'batalha-da-aldeia',
        name: 'Batalha da Aldeia',
        location: 'Barueri, São Paulo',
        city: 'Barueri',
        state: 'SP',
        description: 'A maior batalha de rima do Brasil.',
        logoUrl: 'https://images.unsplash.com/photo-1493225255756-d9584f8606e9?auto=format&fit=crop&w=800&q=80',
        ranking: [
            { mcId: '1', mcName: 'Kant', points: 1500, position: 1 },
            { mcId: '2', mcName: 'Jhony', points: 1200, position: 2 }
        ]
    }
];

export const news: NewsArticle[] = [
    {
        id: 'n1',
        slug: 'final-nacional-2026-anunciada',
        title: 'Final Nacional de 2026 é anunciada em Belo Horizonte',
        excerpt: 'O maior evento de freestyle do país retorna à capital mineira para uma edição histórica.',
        content: '<p>A Final Nacional está de volta! Após meses de espera, a organização confirmou que o evento principal acontecerá no Estádio do Mineirinho...</p>',
        coverImage: 'https://images.unsplash.com/photo-1549490349-8643362247b5?auto=format&fit=crop&w=1200&q=80',
        category: 'Eventos',
        tags: ['Nacional', 'Belo Horizonte', '2026'],
        author: 'Equipe Batalha',
        createdAt: new Date().toISOString(),
        seoDescription: 'Confira todos os detalhes sobre a Final Nacional de 2026 em Belo Horizonte.'
    }
];

export const featuredVideos = [
    {
        id: 'v1',
        youtubeId: 'v_LpG4S1ZlM',
        title: 'KANT vs JHONY - FINAL NACIONAL 2025',
        description: 'A batalha mais épica do ano, valendo a vaga para o Internacional.',
        category: 'Oficiais',
        date: '15 Fev, 2026'
    },
    {
        id: 'v2',
        youtubeId: 'f4e_O6mUay4',
        title: 'MELHORES RIMAS - BATALHA DA ALDEIA #500',
        description: 'Compilado exclusivo com as melhores rimas da edição histórica de 500 episódios.',
        category: 'Compilados',
        date: '10 Fev, 2026'
    },
    {
        id: 'v3',
        youtubeId: 'hXq_G8m7OqI',
        title: 'DOC: O FREESTYLE NO RIO DE JANEIRO',
        description: 'Minidocumentário sobre a resistência cultural das rimas no RJ.',
        category: 'Documentários',
        date: '05 Fev, 2026'
    },
    {
        id: 'v4',
        youtubeId: '9L7iK6n6rBM',
        title: 'BATALHA DO TANQUE - FINAL DA EDIÇÃO #200',
        description: 'Destaque para a nova geração que promete dominar a cena.',
        category: 'Oficiais',
        date: '28 Jan, 2026'
    }
];
