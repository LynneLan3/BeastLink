export interface GameCategory {
	id: string;
	label: string;
	description: string;
	icon: string;
	order: number;
}

export interface GamePortalQuestion {
	label: string;
	href: string;
}

export interface GamePortalConfig {
	popularQuestions?: readonly GamePortalQuestion[];
	showRecentlyUpdated?: boolean;
	maxRecent?: number;
	showAbout?: boolean;
}

export interface GameConfig {
	name: string;
	shortName: string;
	description: string;
	tagline: string;
	siteUrl: string;
	hubPath: string;
	hubTitle?: string;
	releaseDate: string;
	developer: string;
	publisher: string;
	platforms: readonly string[];
	accentColor: string;
	heroImage?: string;
	heroAlt?: string;
	heroPosition?: string;
	logoImage?: string;
	categories: readonly GameCategory[];
	portal?: GamePortalConfig;
}

export const game: GameConfig = {
	name: 'BeastLink',
	shortName: 'BeastLink',
	description:
		'A source-led Early Access guide to BeastLink covering its Kaiju multiplayer premise, current release timing, gameplay systems, and PC requirements.',
	tagline: 'Confirmed Early Access information for humans, vehicles, Beasts, and destructible multiplayer battles.',
	siteUrl: 'https://beast-link.vercel.app/',
	hubPath: '/beastlink/',
	hubTitle: 'BeastLink Guide & Wiki',
	releaseDate: '2026-08-18',
	developer: 'Grove Street Games',
	publisher: 'Grove Street Games',
	platforms: ['PC via Steam'],
	accentColor: '#be123c',
	heroImage: 'hero.jpg',
	heroAlt: 'Official Steam screenshot for BeastLink',
	heroPosition: 'center 42%',
	portal: {
		popularQuestions: [
			{ label: 'When does BeastLink Early Access start?', href: '/beastlink/release-date/' },
			{ label: 'How do humans, vehicles, and Beasts work?', href: '/beastlink/gameplay/' },
			{ label: 'What are the PC requirements?', href: '/beastlink/system-requirements/' },
		],
		showRecentlyUpdated: true,
		maxRecent: 3,
	},
	categories: [
		{
			id: 'gameplay-modes',
			label: 'Gameplay',
			description: 'Confirmed roles, destruction, multiplayer framing, and the current Early Access snapshot.',
			icon: 'puzzle',
			order: 1,
		},
		{
			id: 'game-info',
			label: 'Game Info',
			description: 'Early Access timing, release state, developer, and platform context.',
			icon: 'information',
			order: 2,
		},
		{
			id: 'pc-requirements',
			label: 'PC Requirements',
			description: 'The PC minimums and published memory guidance currently listed by Steam.',
			icon: 'laptop',
			order: 3,
		},
	],
};
