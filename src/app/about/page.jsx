"use client"
import { useRouter } from "next/navigation";

// export const metadata = {
//   title: "Acerca de",
// }
const AboutPage = () => {
  const router = useRouter();
  return (
    <section>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora facere
        voluptatum dolorum itaque distinctio possimus adipisci, reiciendis et
        qui autem mollitia in harum, delectus magnam ea doloremque molestias
        suscipit cupiditate veritatis hic incidunt, aut eligendi porro!
        Similique perspiciatis qui cumque fugiat pariatur est nisi consequatur
        quibusdam quis voluptas. Velit minus omnis harum laborum ratione
        obcaecati aspernatur dolorum soluta odio adipisci quos asperiores eius,
        nostrum magnam, quod repellendus doloremque nemo delectus inventore ex
        recusandae placeat ullam ab incidunt! Illo perferendis maxime placeat
        rerum officiis, quisquam asperiores esse enim molestias harum dolorum,
        veniam laudantium dolor. Error explicabo iure voluptatem pariatur
        inventore vitae.
      </p>
      <button className="bg-sky-400 px-3 py-2 rounded-md text-white"
      onClick={() => router.push('/')}
      >
        Click
      </button>
    </section>
  );
};

export default AboutPage;
