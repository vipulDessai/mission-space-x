export interface Launch {
    mission_id: Array<string>;
    flight_number: number,
    mission_name: string,
    links: { 
        mission_patch_small: string | null;
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