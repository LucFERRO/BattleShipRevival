const players = [
  {
    player_id: 1,
    player_name: 'Zul',
    job_id: 2,
    lv: 5
  },
  {
    player_id: 2,
    player_name: 'Silver',
    job_id: 1,
    lv: 3
  },
  {
    player_id: 3,
    player_name: 'Annot',
    job_id: 1,
    lv: 6
  },
  {
    player_id: 4,
    player_name: 'Hefty',
    job_id: 3,
    lv: 4
  },
  {
    player_id: 5,
    player_name: 'DJ',
    job_id: 3,
    lv: 4
  },
  {
    player_id: 6,
    player_name: 'Grog',
    job_id: 3,
    lv: 4
  },
];

const jobs = [
  {
    job_id: 1,
    job_name: 'Captain',
    health_growth: 15,
    strength_growth: 5,
    crit_bonus: 20
  },
  {
    job_id: 2,
    job_name: 'Gunner',
    health_growth: 10,
    strength_growth: 3,
    crit_bonus: 50
  },
  {
    job_id: 3,
    job_name: 'Peon',
    health_growth: 5,
    strength_growth: 2,
    crit_bonus: -20
  }
];

module.exports = {
  players,
  jobs
}