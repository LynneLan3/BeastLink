/**
 * This file is generated from site-spec.yaml.
 * Do not edit directly.
 * Run npm run site:generate instead.
 */
import type { GameConfig } from './game-types';

export const siteConfig: GameConfig = {
	name: "BeastLink",
	shortName: "BeastLink",
	title: "BeastLink Guide & Wiki",
	description: "Source-led BeastLink guide hub covering Early Access timing, Kaiju multiplayer gameplay, human and Beast roles, platforms, and PC requirements.",
	tagline: "Confirmed Early Access information for humans, vehicles, Beasts, and destructible multiplayer battles.",
	siteUrl: "https://beast-link.vercel.app/",
	hubPath: "/beastlink/",
	hubTitle: "BeastLink Guide & Wiki",
	locale: "en",
	releaseStatus: "early-access",
	releaseDate: "2026-08-18",
	developer: "Grove Street Games",
	publisher: "Grove Street Games",
	platforms: ["PC via Steam"],
	accentColor: "#be123c",
	accentForeground: "#ffffff",
	heroImage: "hero.jpg",
	heroAlt: "Official Steam screenshot for BeastLink",
	heroPosition: "center 42%",
	disclaimer: "Unofficial fan guide built from cited official and store sources.",
	portal: {
		primaryCta: {
			label: "Start Playing",
			href: "/beastlink/release-date/",
		},
		secondaryCta: {
			label: "Browse Guides",
			href: "#browse-guides",
		},
		statusItems: [
			{
				label: "Early Access",
				value: "2026-08-18",
			},
			{
				label: "Platform",
				value: "PC via Steam",
			},
			{
				label: "Developer",
				value: "Grove Street Games",
			},
		],
		popularQuestions: [
			{
				label: "When does BeastLink Early Access start?",
				href: "/beastlink/release-date/",
				context: "Release date and platform caveats",
			},
			{
				label: "How do humans, vehicles, and Beasts work?",
				href: "/beastlink/gameplay/",
				context: "Gameplay roles and Early Access snapshot",
			},
			{
				label: "What are the PC requirements?",
				href: "/beastlink/system-requirements/",
				context: "Steam-listed minimums and memory guidance",
			},
		],
		startHere: [
			{
				title: "BeastLink Release Date and Early Access Status",
				description: "Confirmed BeastLink Early Access date, current unreleased status at research time, developer, and platform caveats.",
				href: "/beastlink/release-date/",
				label: "Availability",
				badge: "Start here",
			},
			{
				title: "BeastLink Gameplay: Humans, Vehicles, Beasts, and Destruction",
				description: "Confirmed BeastLink gameplay systems, including human, vehicle, and Beast roles, serum-based BeastLinking, SuperDestruction, and the current Early Access snapshot.",
				href: "/beastlink/gameplay/",
				label: "Gameplay",
			},
			{
				title: "BeastLink PC System Requirements",
				description: "Current BeastLink PC minimum and published memory requirements from the Steam listing.",
				href: "/beastlink/system-requirements/",
				label: "PC Requirements",
			},
		],
		showRecentlyUpdated: true,
		maxRecent: 3,
	},
	categories: [
		{
			id: "gameplay-modes",
			label: "Gameplay",
			description: "Confirmed roles, destruction, multiplayer framing, and the current Early Access snapshot.",
			icon: "puzzle",
			order: 1,
		},
		{
			id: "game-info",
			label: "Game Info",
			description: "Early Access timing, release state, developer, and platform context.",
			icon: "information",
			order: 2,
		},
		{
			id: "pc-requirements",
			label: "PC Requirements",
			description: "The PC minimums and published memory guidance currently listed by Steam.",
			icon: "laptop",
			order: 3,
		},
	],
	pages: [
		{
			id: "release-date",
			slug: "beastlink/release-date",
			role: "core",
			assetType: "article",
			intents: ["release-date", "early-access"],
			relations: [
				{
					pageId: "gameplay",
					type: "next-step",
				},
				{
					pageId: "system-requirements",
					type: "related",
				},
			],
			sources: [
				{
					type: "official",
					title: "Official BeastLink website",
					url: "https://playbeastlink.com/",
				},
				{
					type: "steam",
					title: "BeastLink on Steam",
					url: "https://store.steampowered.com/app/2962780/BeastLink/",
				},
				{
					type: "steam",
					title: "BeastLink Steam Community hub",
					url: "https://steamcommunity.com/app/2962780/",
				},
			],
			evidence: [
			],
		},
		{
			id: "gameplay",
			slug: "beastlink/gameplay",
			role: "core",
			assetType: "article",
			intents: ["gameplay", "kaiju-multiplayer"],
			relations: [
				{
					pageId: "release-date",
					type: "related",
				},
				{
					pageId: "system-requirements",
					type: "next-step",
				},
			],
			sources: [
				{
					type: "official",
					title: "Official BeastLink website",
					url: "https://playbeastlink.com/",
				},
				{
					type: "steam",
					title: "BeastLink on Steam",
					url: "https://store.steampowered.com/app/2962780/BeastLink/",
				},
				{
					type: "steam",
					title: "BeastLink Steam Community hub",
					url: "https://steamcommunity.com/app/2962780/",
				},
			],
			evidence: [
			],
		},
		{
			id: "system-requirements",
			slug: "beastlink/system-requirements",
			role: "supporting",
			assetType: "reference",
			intents: ["system-requirements", "pc-specs"],
			relations: [
				{
					pageId: "gameplay",
					type: "related",
				},
				{
					pageId: "release-date",
					type: "related",
				},
			],
			sources: [
				{
					type: "steam",
					title: "BeastLink on Steam",
					url: "https://store.steampowered.com/app/2962780/BeastLink/",
				},
			],
			evidence: [
			],
		},
	],
	routes: [
		{
			id: "getting-started",
			eyebrow: "Player Route",
			title: "Start Playing",
			description: "Helps new players quickly confirm whether BeastLink is playable, what kind of game it is, and whether their PC can run it.",
			href: "/beastlink/routes/getting-started/",
			pages: [
				{
					pageId: "release-date",
					href: "/beastlink/release-date/",
					title: "BeastLink Release Date and Early Access Status",
					description: "Confirmed BeastLink Early Access date, current unreleased status at research time, developer, and platform caveats.",
					eyebrow: "Release Info",
				},
				{
					pageId: "gameplay",
					href: "/beastlink/gameplay/",
					title: "BeastLink Gameplay: Humans, Vehicles, Beasts, and Destruction",
					description: "Confirmed BeastLink gameplay systems, including human, vehicle, and Beast roles, serum-based BeastLinking, SuperDestruction, and the current Early Access snapshot.",
					eyebrow: "Gameplay Overview",
				},
				{
					pageId: "system-requirements",
					href: "/beastlink/system-requirements/",
					title: "BeastLink PC System Requirements",
					description: "Current BeastLink PC minimum and published memory requirements from the Steam listing.",
					eyebrow: "PC Requirements",
				},
			],
			fastAnswers: [
				{
					question: "When does Early Access start?",
					answer: "Steam lists BeastLink Early Access for August 18, 2026.",
					pageId: "release-date",
					href: "/beastlink/release-date/",
				},
				{
					question: "What kind of Kaiju multiplayer is this?",
					answer: "BeastLink is framed as online PvP/PvE Kaiju multiplayer with humans, vehicles, Beasts, and destructible urban environments.",
					pageId: "gameplay",
					href: "/beastlink/gameplay/",
				},
				{
					question: "Can my PC run it?",
					answer: "Check the current Steam-listed Windows, memory, graphics, storage, DirectX, and network requirements.",
					pageId: "system-requirements",
					href: "/beastlink/system-requirements/",
				},
			],
		},
	],
	trust: {
		enabled: true,
		pages: {
			privacy: {
				enabled: true,
				slug: "privacy",
				path: "/beastlink/privacy/",
				title: "Privacy",
				robots: "noindex,follow",
			},
		},
	},
	analytics: {
		enabled: true,
		provider: "ga4",
		measurementId: "G-ME3VVC6QLD",
		trackOutbound: true,
	},
};
