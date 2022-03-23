import { ResumedPost, FeaturedPost, Section } from "../_models/Models";

export const sections: Section[] = [
    { id: 1, name: "The Economist explains", alias: "the-economist-explains"},
    { id: 2, name: "Podcasts", alias: "podcasts"},
    { id: 3, name: "1843", alias: "1843"},
    { id: 4, name: "By invitation", alias: "by-invitation"},
    { id: 5, name: "Coronavirus", alias: "coronavirus"},
    { id: 6, name: "Films", alias: "films"},
    { id: 7, name: "Climate change", alias: "climate-change"},
    { id: 8, name: "Culture", alias: "culture"},
];

export const resumedPosts: ResumedPost[] = [
    { id: 1, name: "New rules for globalisation", alias: "new-rules-for-globalisation", 
    description: "Liberal governments have to find a model that combines opennes with security"
    , imageUrl: "" }, 
    { id: 2, name: "Why windfall taxes aren't a great idea", alias: "why-windfall-taxes-are-a-great-idea", 
    description: "Goverments should not seize the energy industry's profits"
    , imageUrl: "" },
    { id: 3, name: "Crypto and sanction dodging", alias: "crypto-and-sanction-dodging", 
    description: "It may help Ukraine's fundraising efforts", 
    imageUrl: "" },
    { id: 4, name: "A war interview with Boris Johnson", alias: "a-war-interview-with-boris-johnson", 
    description: "The Economist special interview with Boris Johnson", 
    imageUrl: "" },
];

export const featuredPost: FeaturedPost = {
    id: 1,
    name: "The alternative world order",
    description: "The war in Ukraine will determina how China sees the west - and how dangerous it becomes -",
    imageUrl: "https://www.economist.com/img/b/600/789/90/sites/default/files/print-covers/20220319_cna1280_0.jpg",
    alias: "the-alternative-world-order",
    date: 1647637525000
}

export const mostRead: ResumedPost[] = [
    { id: 1, name: "The world in brief", alias: "the-world-in-brief", 
    description: ""
    , imageUrl: "https://myaccount.economist.com/file-asset-public/the_world_in_brief?oid=00D3z000002JvyiEAC" }, 
    { id: 2, name: "The war in Ukraine will determine how China sees the world", alias: "the-world-in-brief", 
    description: ""
    , imageUrl: "https://www.economist.com/img/b/1280/720/90/sites/default/files/images/print-edition/20220319_LDD001_0.jpg" },
    { id: 3, name: "The EU’s unity over Ukraine has given it surprising heft", alias: "the-world-in-brief", 
    description: ""
    , imageUrl: "https://www.economist.com/img/b/1280/720/90/sites/default/files/images/2022/03/articles/main/20220319_eup507.jpg" },
    { id: 4, name: "The risk that the war in Ukraine escalates past the nuclear threshold", alias: "the-world-in-brief", 
    description: ""
    , imageUrl: "https://www.economist.com/img/b/1280/720/90/sites/default/files/images/2022/03/articles/main/20220319_fbp501.jpg" },
    { id: 5, name: "The invasion of Ukraine is making life difficult for right-wing populists", alias: "the-world-in-brief", 
    description: ""
    , imageUrl: "https://www.economist.com/img/b/1280/720/90/media-assets/image/20220326_BLP504.jpg" }
]

export const unitedStates: ResumedPost = 
    { id: 1, name: "What happens when Amazon comes to town", alias: "the-world-in-brief", 
    description: "The e-commerce giant is expanding at rapid pace. How might that change America?"
    , imageUrl: "https://www.economist.com/img/b/1280/720/90/sites/default/files/images/2022/03/articles/main/20220319_usp503.jpg" }
