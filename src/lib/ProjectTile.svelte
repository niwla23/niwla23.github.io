<script lang="ts">
	export let title: string;

	let dialogEl: HTMLDialogElement | null = null;
	let contentEl: HTMLDivElement | null = null;
</script>

<button
	class="bg-green-900/40 p-4 rounded-md flex flex-col gap-2 items-center flex-1 cursor-pointer transition-all transform hover:-translate-y-1"
	on:click={() => dialogEl?.showModal()}
>
	<!-- <Icon icon="fa:linux" height="50" class="h-20" /> -->
	<div>
		<slot name="icon" />
	</div>
	<div class="text-center flex flex-col justify-center h-full">
		<p class="text-xl font-bold">{title}</p>
		<p><slot /></p>
	</div>
</button>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
<dialog
	bind:this={dialogEl}
	on:click={() => dialogEl?.close()}
	class="mt-8 rounded-xl bg-gray-900 p-6 shadow-3xl backdrop:bg-black/50 backdrop:backdrop-blur-md max-w-2xl w-full"
>
	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<!-- svelte-ignore a11y-no-static-element-interactions -->
	<div bind:this={contentEl} on:click={(event) => event?.stopPropagation()}>
		<div class="prose prose-lg prose-invert">
			<slot name="content" />
		</div>
		<form method="dialog">
			<button class="p-4 bg-green-600 text-green-50 rounded-lg">Close</button>
		</form>
	</div>
</dialog>
