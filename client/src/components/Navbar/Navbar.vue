<template>
    <div class="navbar bg-secondary">
        <div class="flex-1">
            <span class="btn btn-ghost text-xl">
                <router-link to="/">
                    Novel Full
                </router-link>
            </span>
        </div>
        <div class="flex-none">
            <ul class="menu menu-horizontal px-1">
                <li><a>Genres</a></li>
                <li>
                    <details>
                        <summary>Novel</summary>
                        <ul class="bg-secondary rounded-t-none p-2">
                            <li>
                                <a>
                                    <router-link to="/">
                                        Home
                                    </router-link>
                                </a>
                            </li>
                            <li>
                                <a>
                                    <router-link to="/novel/listing">
                                        Listing
                                    </router-link>
                                </a>
                            </li>
                            <li>
                                <a>
                                    <router-link to="/novel/addnovel">
                                        Add Novel
                                    </router-link>
                                </a>
                            </li>
                        </ul>
                    </details>
                </li>
            </ul>
        </div>
    </div>
</template>