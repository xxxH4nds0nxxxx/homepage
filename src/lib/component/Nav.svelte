<script>
    import {page} from '$app/stores';
    import {Navbar, NavBrand, NavLi, NavUl, NavHamburger, Button} from 'flowbite-svelte';

    $: activeUrl = $page.url.pathname;
</script>

<Navbar class="w-full dark:bg-[#001220] text-black">
    <NavBrand href="/">
        <img src="/images/flowbite-svelte-icon-logo.svg" class="me-3 h-6 sm:h-9" alt="Flowbite Logo"/>
        <span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Flowbite</span>
    </NavBrand>

    <div class="flex md:order-last">
        <Button size="sm" href="/login" color="blue">Sign Up</Button>
    </div>

    <NavHamburger/>
    <NavUl {activeUrl} class="ml-auto">
        <NavLi href="/">Home</NavLi>
    </NavUl>
</Navbar>