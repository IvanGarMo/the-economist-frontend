import { Timestamp } from "rxjs";

export interface Section {
    id: number;
    name: string;
    alias: string;
}

export interface Featured {
    id: number;
    name: string;
    alias: string;
}

export interface ResumedPost {
    id: number;
    name: string; 
    description: string;
    imageUrl: string;
    alias: string;
}

export interface FeaturedPost {
    id: number;
    name: string; 
    description: string;
    imageUrl: string;
    alias: string;
    date: any;
}