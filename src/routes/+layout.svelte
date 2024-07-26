<script>
	import '../app.css';
</script>

<div
	class="flex justify-center bg-blue-800 min-h-screen h-full"
	style="background: url(/bg.jpg); background-repeat: no-repeat; background-size: cover;"
>
	<div class="bg-[rgba(14,15,10,0.85)] backdrop-blur-xl text-white w-full flex justify-center">
		<div class="">
			<slot />
			<footer class="px-4 pb-6 w-full max-w-7xl text-center">
				<a href="/imprint">Imprint / Impressum</a>
			</footer>
		</div>
	</div>
</div>
