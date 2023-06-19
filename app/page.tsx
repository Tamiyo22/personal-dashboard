"use client";
import Sidebar from "@/components/Sidebar";
import Feed from "@/components/Feed";
import Widgets from "@/components/Widgets";





export default function Home({randomUsersResults}) {
 
  return (
    <div>
    <main className="flex min-h-screen mx-auto">
    {/* Sidebar */}
    <Sidebar />

       
        {/* feed */}
        <Feed />


         {/* widgets */}
         <Widgets randomUsersResults= {randomUsersResults} />
          

         {/* Modal */}

         </main>
         </div>

   
  );
}
{/* for future use */}
export async function getServerSideProps() {
  
  // Who to follow section

  let randomUsersResults = [];

  try {
    const res = await fetch(
      "https://randomuser.me/api/?results=5&inc=name,login,picture"
    );

    randomUsersResults = await res.json();
  } catch (e) {
    randomUsersResults = [];
  }


  return {
    props: {
      randomUsersResults,
    },
  };
}
