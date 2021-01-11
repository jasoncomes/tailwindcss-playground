import html from '../../utils/html';

export default ({ button, link }) => html`
  <div class="bg-indigo-700">
    <div class="max-w-2xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
      <h2 class="text-3xl font-extrabold text-white sm:text-4xl">
        <span class="block">Feel free to buy me a beer.</span>
        <span class="block">Next conference, I'll hit you back!</span>
      </h2>
      <p class="mt-4 text-lg leading-6 text-indigo-200">Brought to you by <a class="underline" href="https://www.linkedin.com/in/jasonwcomes/">Jason Comes</a>. Feel free to contribute either by <a class="underline" href="https://github.com/jasoncomes/tailwindcss-playground/issues">issues</a> or <a class="underline" href="https://github.com/jasoncomes/tailwindcss-playground/pulls">pull requests</a>.</p>
      <a href="${link}" class="mt-8 w-full inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50 sm:w-auto">
        ${button || 'Donate to the beer belly!'}
      </a>
    </div>
  </div>
`;
