import { writable } from "svelte/store";
import type { Navigation } from "./types";

export const statics = writable({
    location: <Navigation[]> [
        {
            title: "Head Office",
            url: "/HeadOffice",
        },

        {
            title: "Antipolo Marketing Office",
            url: "/AntipoloOffice",
        },

        {
            title: "Bulacan Marketing Office",
            url: "/BulacanOffice",
        },
        
        {
            title: "Cavite Marketing Office",
            url: "/CaviteOffice",
        },

        {
            title: "Head Office",
            url: "/HeadOffice",
        },

        {
            title: "Parañaque Marketing Office",
            url: "/ParanaqueOffice",
        },

        {
            title: "Pasig Marketing Office",
            url: "/PasigOffice"
        }
    ],

    loan: <Navigation[]> [
        {
            title: "Sangla ORCR",
            url: "SangleORCR",
        },

        {
            title: "Repossessed Units",
            url: "RepoUnits",
        },

    ]
})