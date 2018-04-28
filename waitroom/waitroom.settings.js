/**
 * Standard Waiting Room settings.
 */
module.exports = {


    EXECUTION_MODE: 'WAIT_FOR_N_PLAYERS',
    
    // How many clients must connect before groups are formed.
    POOL_SIZE: 4,

    // The size of each group.
    GROUP_SIZE: 2,

    // Maximum waiting time.
    MAX_WAIT_TIME: 600000,

    // Treatment assigned to groups.
    // If left undefined, a random treatment will be selected.
    // Use "treatment_rotate" for rotating the treatmenrs.
    CHOSEN_TREATMENT: 'treatment_rotate'
};
