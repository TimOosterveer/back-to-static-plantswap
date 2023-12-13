import { format } from 'prettier';

// place files you want to import through the `$lib` alias in this folder.
export { default as Header } from '$lib/molecules/HeaderImage.svelte';
export { default as Info } from '$lib/organisms/InfoWorkshop.svelte';
export { default as Card } from '$lib/organisms/OverviewWorkshops.svelte';
export { default as Footer } from '$lib/organisms/Footer.svelte';
export { default as NavDark } from '$lib/organisms/NavDark.svelte';
export { default as MobileMenu } from '$lib/organisms/MobileMenu.svelte';

export { default as HeaderStekje } from '$lib/molecules/ImageOverzicht.svelte';
export { default as StekjeCard } from '$lib/atoms/StekjesCard.svelte';
export { default as StekjesInfo } from '$lib/molecules/InfoStekjes.svelte';
export { default as FilterFunctie } from '$lib/atoms/Filter.svelte';

export { default as HeaderKast } from '$lib/atoms/KastImage.svelte';
export { default as IntroKast } from '$lib/organisms/IntroKast.svelte';
export { default as TheMaking } from '$lib/organisms/TheMaking.svelte';
export { default as TheMaking2 } from '$lib/organisms/TheMaking2.svelte';
export { default as TheMaking3 } from '$lib/organisms/TheMaking3.svelte';
export { default as TheMaking4 } from '$lib/organisms/TheMaking4.svelte';

export { default as ContactForm } from '$lib/molecules/ContactForm.svelte';
export { default as Location } from '$lib/atoms/Location.svelte';
export { default as ContactInfo } from '$lib/atoms/ContactInfo.svelte';
