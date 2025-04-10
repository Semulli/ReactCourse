import Header from "@/Components/Header";
import UserCards from "@/Components/Cards";

export default async function Home() {

    const response = await fetch(" https://jsonplaceholder.typicode.com/users")

    const result = await response.json()

    console.log(result)

    return (

        <main>
            <Header/>
            <div className="flex gap-5 mx-6 mt-10 flex-wrap justify-center items-center">
                {result?.slice(0, 5).map((user) => (
                    <UserCards key={user.id} users={user} />
                ))}
            </div>

        </main>
    )
}
