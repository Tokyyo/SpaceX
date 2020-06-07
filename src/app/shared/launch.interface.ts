export interface ILaunch {
    flight_number: string;
    mission_name: string;
    mission_id: string;
    launch_year: string;
    launch_date_unix: string;
    launch_date_utc: string;
    launch_date_local: string;
    is_tentative: string;
    tentative_max_precision: string;
    tbd: string;
    launch_window: string;
}
