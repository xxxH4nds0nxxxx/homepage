<!--
Navbar - switch between Translator and Study session
-->
<script>
    import "../../app.pcss";

    import { initializeApp } from "firebase/app";

    import {page} from '$app/stores';
    import {DarkMode, Navbar, NavBrand, NavLi, NavUl, NavHamburger, Button} from 'flowbite-svelte';
    import {BarsOutline} from "flowbite-svelte-icons";
    import {hideHistory} from "$lib/scripts/stores.js";
    import { getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth'
    import { goto } from "$app/navigation";

    const firebaseConfig = {
        apiKey: "AIzaSyCqkWJ209qBx1ApNTDzbxYGLZoHqAt-1ls",
        authDomain: "handson-ai.firebaseapp.com",
        projectId: "handson-ai",
        storageBucket: "handson-ai.appspot.com",
        messagingSenderId: "583075617194",
        appId: "1:583075617194:web:f1664df90a774cf12133d3",
        measurementId: "G-CSTD6X1JPM"
    };

    let activeClass = "text-accent-200 font-bold dark:text-accent-50"

    $: activeUrl = $page.url.pathname;

    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app)

    let u = null
    onAuthStateChanged(auth, user=> {
        u = user
    })

    function logout()
    {
        signOut(auth)
        u = null
    }
</script>

<div class="sticky">
    <Navbar let:hidden class="border-b">
        <NavBrand href="/homepage">
            <!--<img src="/images/flowbite-svelte-icon-logo.svg" class="mr-3 h-6 sm:h-9" alt="Flowbite Logo" />-->
            <span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white">HandsOn</span>
        </NavBrand>
        <div class="flex md:order-last">
            <DarkMode/>
            <Button outline={false} color="alternative" class="!p-2 border-0" size="xl" on:click={()=>hideHistory.set(false)}>
                <BarsOutline class="w-4 h-4"/>
            </Button>
        </div>
        <NavHamburger/>
        <NavUl {hidden} {activeUrl} {activeClass} class="ml-auto">
            <NavLi href="/" active={activeUrl === '/'}>Homepage</NavLi>
            <NavLi href="/translator" active={activeUrl === '/translator'}>Translator</NavLi>
            <NavLi href="/study-ASL" active={activeUrl === "/study-ASL"}>Learn Sign Language</NavLi>
            {#if u != null }
            <NavLi on:click={logout}>Logout</NavLi>  
            {:else}
            <NavLi href="/login" active={activeUrl === "/login"}>Login</NavLi>    

            {/if}
            <NavLi href="/register" active={activeUrl === "/register"}>Register</NavLi>
        </NavUl>

    </Navbar>
</div>