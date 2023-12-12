import { sql } from "@vercel/postgres";

export async function fetchPlayers() {
    try {
        const data = await sql`SELECT * FROM players`
        return data.rows
    } catch (err) {
        console.error('Database Error:', err);
        throw new Error('Failed to fetch data.');
    }
}

export async function fetchJobs() {
    try {
        const data = await sql`SELECT * FROM jobs`
        return data.rows
    } catch (err) {
        console.error('Database Error:', err);
        throw new Error('Failed to fetch data.');
    }
}