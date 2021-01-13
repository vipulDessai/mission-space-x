export interface Launch {
    mission_id: Array<string>;
    links: { 
        mission_patch_small: string;
    },
    rocket: {
        rocket_name: string;
        first_stage: {
            cores: [
                {
                    land_success: boolean,
                }
            ]
        }
    }
    launch_year: string;
    launch_success: boolean;
}