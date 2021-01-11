import html from '../../utils/html';

export default ({ title, button }) => html`
  <div class="bg-blue-700">
    <div class="max-w-2xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
      <h2>${title}</h2>
      <slot></slot>
      <button>${button}</button>
    </div>
  </div>
`;
