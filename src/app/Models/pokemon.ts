export interface Ability {
    ability: {
        name: string;
        url: string;
    };
    is_hidden: boolean;
    slot: number;
}

export interface Form {
    name: string;
    url: string;
}

export interface GameIndex {
    game_index: number;
    version: {
    name: string;
    url: string;
    };
}

export interface HeldItem {
    item: {
        name: string;
        url: string;
    };
    version_details: Array<{
        rarity: number;
        version: {
        name: string;
        url: string;
    };
    }>;
}


export interface Move {
    move: {
        name: string;
        url: string;
    };
    version_group_details: Array<{
        level_learned_at: number;
        move_learn_method: {
        name: string;
        url: string;
    };
    version_group: {
        name: string;
        url: string;
    };
    }>;
}
  
  export interface Pokemon {
    name: string;
    abilities: Ability[];
    base_experience: number;
    forms: Form[];
    game_indices: GameIndex[];
    height: number;
    held_items: HeldItem[];
    id: number;
    is_default: boolean;
    location_area_encounters: string;
    moves: Move[];
    order: number;
    species: {
        name: string;
        url: string;
    };
    sprites: {
        front_default: string;
        [key: string]: string | null; 
    };
    stats: Array<{
        base_stat: number;
        effort: number;
        stat: {
        name: string;
        url: string;
        };
    }>;
    types: Array<{
        slot: number;
        type: {
        name: string;
        url: string;
        };
    }>;
    weight: number;
}
