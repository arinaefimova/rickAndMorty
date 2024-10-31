import { ReactNode } from "react";
import { FetchBaseQueryError } from '@reduxjs/toolkit/query';
import { SerializedError } from "@reduxjs/toolkit";

export interface SelectProps{
    title: string;
    options: string[];
    value: string;
    onSelectChange: (value: string) => void;
    
}
export interface ButtonProps {
	bg: string;
    clickButton:() => void;
    text:string;
	color?: string;
	full?: boolean;
	icon?: boolean;
    pad?:string;
    error?:QueryError
    disabled?: boolean;
}

export interface FilterProps{
    setSearchValue: (value: string) => void;
    selects?: SelectOption[];
    searchValue?: string;
     filters?: FiltersState;
     handleFilterChange?:(key: string, value:string) => void;


    

}
type FiltersState = Record<string, string>;
type SelectOption = {
    title: string; 
    options: string[]; 
  };
export interface QueryParamsCharacters {
    name: string;
    species: string;
    gender: string;
    status: string;
    page: number;

  }
export interface QueryParamsLocations{
    name: string;
    type: string;
    dimension: string;
    page: number;
  }
  
export interface QueryParamsEpisodes{
    name: string;
    page: number;
  }
  
export interface SearchProps{
    searchValue?: string;
    setSearchValue: (value: string) => void;
}

export interface PopupProps{
    children:ReactNode;
}

export interface ImageProps{
    img:string;
}

export interface CardItemProps{
    // title: string;
    link:string;
    name:string;
    id:number
    image?:boolean,
    info?:boolean;
    img?:string;
    heading?:string;
    species?:string;
    type?:string;
    air_date?:string;
    episode?:string;
}
export interface InfoDetailsCardProps{
    title:string;
    info:string;
    isLink?:string ;
    date?:string;
    isEpisode?:boolean;

}
export interface ReusableTitleProps{
    mainTitle:string;
    title1:string;
    title2:string;
    info1:string;
    info2:string;
    link:string;

}

export interface Character {
    id: number;
    name: string;
    status: string;
    specie: string;
    type: string;
    gender: string;
    origin: {
        name: string;
        url: string;
    };
    location: {
        name: string;
        url: string;
    };
    image: string;
    episode: string[];
    url: string;
    created: string;
    species?: string;

}

export interface Location {
    id: number;
    name: string;
    type: string;
    dimension: string;
    residents: string[];
    url: string;
    created: string;
}
export interface Episode {
    id: number;
    name: string;
    air_date: string;
    episode:string;
    characters?: string[];
}

export interface CharacterResponse {
    info: {
        count: number;
        pages: number;
        next: string | null;
        prev: string | null;
    };
    results: Character[];
}

export interface LocationResponse {
    info: {
        count: number;
        pages: number;
        next: string | null;
        prev: string | null;
    };
    results: Location[];
}
export interface EpisodeResponse {
    info: {
        count: number;
        pages: number;
        next: string | null;
        prev: string | null;
    };
    results: Episode[];
}

export interface ListProps {
    error:QueryError;
    link:string;
    isLoading:boolean;
    image?: boolean;
    info?: boolean;
    heading?: string;
    

    // data?: CharacterResponse | LocationResponse | EpisodeResponse; 

    data?: Character[]| Location[]| Episode[]

}
type QueryError = FetchBaseQueryError | SerializedError | undefined;

export interface SkeletonProps{
    image?: boolean;
    info?: boolean;
}
