<script lang="ts">
	import AnimatedCard from '$lib/AnimatedCard.svelte';

	export let title: string;

	let isMouseEntered = false;
</script>

<AnimatedCard bind:isMouseEntered className="inter-var h-full block w-full">
	<div
		class="bg-green-900/40 p-4 rounded-md flex flex-col gap-2 items-center flex-1 transition-all h-full"
	>
		<div>
			<slot name="icon" />
		</div>
		<div class="text-center flex flex-col justify-center h-full">
			<p class="text-2xl font-bold">{title}</p>
			<p><slot /></p>
		</div>
	</div>
	<!-- </CardBody> -->
</AnimatedCard>
