<script lang="ts">
  export let pathname: string

  const links = ['destination', 'crew', 'technology']

  let isHidden = true
</script>

<nav
  class:hidden={isHidden}
  class={'fixed inset-y-0 right-0 h-screen w-64 bg-white/[0.04] py-28 pl-8 ' +
    'backdrop-blur-2xl sm:static sm:block sm:h-auto sm:w-auto sm:px-12 ' +
    'sm:py-0 lg:pl-[7.75rem] lg:pr-[10.5rem]'}
>
  <ol class="flex flex-col gap-y-6 sm:flex-row sm:gap-x-9 lg:gap-x-[3.25rem]">
    {#each links as name, index}
      {@const beforeContent = `before:content-${index + 1}`}
      <li class="relative font-condensed uppercase tracking-[0.17em]">
        <a
          class:after:!bg-white={pathname.startsWith(`/${name}`)}
          class={'h-8 flex items-center before:mr-3 before:font-bold ' +
            `${beforeContent} after:absolute after:inset-y-0 after:right-0 ` +
            'after:w-[4px] hover:after:bg-white/50 sm:h-24 sm:text-sm ' +
            'sm:before:content-none sm:after:inset-x-0 sm:after:top-auto ' +
            `sm:after:h-[3px] sm:after:w-full lg:text-base lg:${beforeContent}`}
          href={`/${name}`}
        >
          {name}
        </a>
      </li>
    {/each}
  </ol>
</nav>
<button
  class={`${isHidden ? 'relative' : 'fixed right-6'} z-10 sm:hidden`}
  on:click={() => (isHidden = !isHidden)}
>
  <svg width={isHidden ? '24' : '20'} height="21" fill="#d0d6f9">
    {#if isHidden}
      <path d="M0 0h24v3H0zM0 9h24v3H0zM0 18h24v3H0z" />
    {:else}
      <path d="M2.575.954l16.97 16.97-2.12 2.122L.455 3.076z" />
      <path d="M.454 17.925L17.424.955l2.122 2.12-16.97 16.97z" />
    {/if}
  </svg>
</button>
