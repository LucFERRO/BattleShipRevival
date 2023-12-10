const { db } = require('@vercel/postgres');
const { players, jobs } = require('./placeholder-data.js')

async function seedPlayers(client) {
  try {
    // Create the "players" table if it doesn't exist
    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS players (
        id INT NOT NULL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        job_id INT NOT NULL,
        FOREIGN KEY (job_id) REFERENCES jobs(id),
        lv INT NOT NULL
      );
    `;

    console.log(`Created "players" table`);

    // Insert data into the "players" table
    const insertedPlayers = await Promise.all(
      players.map(async (player) => {
        return client.sql`
        INSERT INTO players (id, name, job_id, lv)
        VALUES (${player.id}, ${player.name}, ${player.job_id}, ${player.lv})
        ON CONFLICT (id) DO NOTHING;
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
        id INT NOT NULL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
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
        INSERT INTO jobs (id, name, health_growth, strength_growth, crit_bonus)
        VALUES (${job.id}, ${job.name}, ${job.health_growth}, ${job.strength_growth}, ${job.crit_bonus})
        ON CONFLICT (id) DO NOTHING;
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
