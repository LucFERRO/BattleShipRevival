const players = [
  {
    id: 1,
    name: 'Zul',
    job_id: 2,
    lv: 5
  },
  {
    id: 2,
    name: 'Silver',
    job_id: 1,
    lv: 3
  },
  {
    id: 3,
    name: 'Annot',
    job_id: 1,
    lv: 6
  },
  {
    id: 4,
    name: 'Hefty',
    job_id: 3,
    lv: 4
  },
  {
    id: 5,
    name: 'DJ',
    job_id: 3,
    lv: 4
  },
  {
    id: 6,
    name: 'Grog',
    job_id: 3,
    lv: 4
  },
];

const jobs = [
  {
    id: 1,
    name: 'Captain',
    health_growth: 15,
    strength_growth: 5,
    crit_bonus: 20
  },
  {
    id: 2,
    name: 'Gunner',
    health_growth: 10,
    strength_growth: 3,
    crit_bonus: 50
  },
  {
    id: 3,
    name: 'Peon',
    health_growth: 5,
    strength_growth: 2,
    crit_bonus: -20
  }
];

module.exports = {
  players,
  jobs
}