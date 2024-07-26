<script lang="ts">
	import SkillTile from '$lib/SkillTile.svelte';
	import Icon from '@iconify/svelte';
	import SvelteMarkdown from 'svelte-markdown';
	import { html as bbsVancedContent } from '$lib/content/bbs-vanced.md';
	import { html as warehouseContent } from '$lib/content/warehouse.md';
	import { html as pvDashboardContent } from '$lib/content/pv_dashboard.md';
	import ProjectTile from '$lib/ProjectTile.svelte';
</script>

<main class="p-8 w-full max-w-7xl">
	<div class="flex items-center gap-8 pt-8">
		<img
			class="h-36 rounded-full"
			src="/meine_fresse_kleiner.webp"
			alt="Portrait of Alwin Lohrie"
		/>
		<div>
			<h1 class="font-bold text-4xl sm:text-6xl text-white">Alwin Lohrie</h1>
			<p class="text-md sm:text-2xl">Software Engineer</p>
		</div>
	</div>
	<h2 class="text-3xl pt-16 pb-4">Stuff I can do</h2>
	<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
		<SkillTile title="Frontend">
			<Icon slot="icon" icon="mdi:react" height="50" class="h-20" />
			Svelte, React, Vue, Tailwind
		</SkillTile>

		<SkillTile title="Backend">
			<Icon slot="icon" icon="fa-brands:python" height="50" class="h-20" />
			Flask, Express, SocketIO
		</SkillTile>

		<SkillTile title="Mobile">
			<Icon slot="icon" icon="fluent:phone-32-regular" height="50" class="h-20" />
			Flutter, React Native, PWA
		</SkillTile>

		<SkillTile title="Linux">
			<Icon slot="icon" icon="fa:linux" height="50" class="h-20" />
			Debian Administration, Docker, Traefik
		</SkillTile>

		<SkillTile title="Hardware">
			<Icon slot="icon" icon="mdi:printer-3d-nozzle" height="50" class="h-20" />
			3D-Printing, CAD, Soldering
		</SkillTile>

		<SkillTile title="Learn Stuff">
			<Icon slot="icon" icon="mingcute:more-1-line" height="50" class="h-20" />
			Self-taught and excited to work with new technologies
		</SkillTile>
	</div>
	<h2 class="text-3xl pt-8 pb-4">Things I have built</h2>
	<!-- - Automated Storage System - BBS Vanced - E3DC Dashboard -->

	<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
		<ProjectTile title="BBS Vanced">
			<img src="/bbs-vanced-logo.png" alt="BBS Vanced Logo" class="h-20" slot="icon" />
			<SvelteMarkdown slot="content" source={bbsVancedContent} />

			Over-engineered timetable viewer
		</ProjectTile>
		<ProjectTile title="Warehouse">
			<img src="/lagersystem.webp" alt="BBS Vanced Logo" class="h-20 rounded-md" slot="icon" />

			<SvelteMarkdown slot="content" source={warehouseContent} />
			Fully automatic 192 slot warehouse
		</ProjectTile>
		<ProjectTile title="PV Dashboard">
			<img src="/pv-logo.png" alt="BBS Vanced Logo" class="h-20 rounded-md" slot="icon" />
			<SvelteMarkdown slot="content" source={pvDashboardContent} />
			Flutter App to show live data from an E3DC PV System
		</ProjectTile>
	</div>

	<!-- <Test /> -->
</main>
