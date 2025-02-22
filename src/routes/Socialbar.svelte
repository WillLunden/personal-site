<script>
	// Replace these links with your actual GitHub, LinkedIn, and email
	const githubLink = 'https://github.com/WillLunden';
	const linkedInLink = 'https://linkedin.com/in/will-lunden';
	const emailLink = 'mailto:lundenwill@gmail.com';
</script>

<footer
	class="fixed bottom-0 w-full border-t border-gray-200 py-2 border-gray-700 bg-gray-900"
>
	<div
		class="mx-auto flex max-w-screen-xl justify-center space-x-6 text-xl  text-gray-300"
	>
		<a
			href={githubLink}
			target="_blank"
			rel="noopener noreferrer"
			class="hover:text-gray-900 dark:hover:text-white"
		>
			<i class="fab fa-github"></i>
		</a>
		<a
			href={linkedInLink}
			target="_blank"
			rel="noopener noreferrer"
			class="hover:text-gray-900 dark:hover:text-white"
		>
			<i class="fab fa-linkedin"></i>
		</a>
		<a href={emailLink} class="hover:text-gray-900 dark:hover:text-white">
			<i class="fas fa-envelope"></i>
		</a>
	</div>
</footer>
