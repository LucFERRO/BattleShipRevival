const { db } = require('@vercel/postgres');
const { players, jobs } = require('./placeholder-data.js')

async function seedPlayers(client) {
  try {
    // Create the "players" table if it doesn't exist
    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS players (
        player_id INT NOT NULL PRIMARY KEY,
        player_name VARCHAR(255) NOT NULL,
        job_id INT NOT NULL,
        FOREIGN KEY (job_id) REFERENCES jobs(job_id),
        lv INT NOT NULL
      );
    `;

    console.log(`Created "players" table`);

    // Insert data into the "players" table
    const insertedPlayers = await Promise.all(
      players.map(async (player) => {
        return client.sql`
        INSERT INTO players (player_id, player_name, job_id, lv)
        VALUES (${player.player_id}, ${player.player_name}, ${player.job_id}, ${player.lv})
        ON CONFLICT (player_id) DO NOTHING;
      `;
      }),
    );

    console.log(`Seeded ${insertedPlayers.length} players`);

    return {
      createTable,
      players: insertedPlayers,
    };
  } catch (error) {
    console.error('Error seeding players:', error);
    throw error;
  }
}

async function seedJobs(client) {
  try {
    // Create the "jobs" table if it doesn't exist
    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS jobs (
        job_id INT NOT NULL PRIMARY KEY,
        job_name VARCHAR(255) NOT NULL,
        health_growth INT NOT NULL,
        strength_growth INT NOT NULL,
        crit_bonus INT NOT NULL
      );
    `;

    console.log(`Created "jobs" table`);

    // Insert data into the "jobs" table
    const insertedJobs = await Promise.all(
      jobs.map(async (job) => {
        return client.sql`
        INSERT INTO jobs (job_id, job_name, health_growth, strength_growth, crit_bonus)
        VALUES (${job.job_id}, ${job.job_name}, ${job.health_growth}, ${job.strength_growth}, ${job.crit_bonus})
        ON CONFLICT (job_id) DO NOTHING;
      `;
      }),
    );

    console.log(`Seeded ${insertedJobs.length} jobs`);

    return {
      createTable,
      jobs: insertedJobs,
    };
  } catch (error) {
    console.error('Error seeding jobs:', error);
    throw error;
  }
}

async function main() {
  const client = await db.connect();

  await seedJobs(client);
  await seedPlayers(client)

  await client.end();
}

main().catch((err) => {
  console.error(
    'An error occurred while attempting to seed the database:',
    err,
  );
});
