'use client'

export default function Try() {

    // const { rows } = await sql`SELECT * from USERS`;
  
    const testAPI = async () => {
  
      try{
  
        const response = await fetch('/api/test', {
          method: 'GET',
        })
        
        if (response) {
          const data = await response.json()
          console.log(data)
        }
        
      } catch(err) {
        console.log(err)
      }
    }
  
    return (
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
  
        <button onClick={() => testAPI()}>Test API </button>
  
        {/* <div>{rows.map((row) => (<div> {row.email} </div>))} </div> */}
  
      </main>
    )
  }
  