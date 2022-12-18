import { useSession, signIn, signOut } from "next-auth/react";

// export default function Component() {
//   const { data: session } = useSession();
//   console.log("session---> ", session);
//   if (session) {
//     return (
//       <>
//         Signed email as {session.user.email} <br />
//         Signed name as {session.user.name} <br />
//         <button onClick={() => signOut()}>Sign out</button>
//       </>
//     );
//   }
//   return (
//     <>
//       Not signed in <br />
//       <button onClick={() => signIn()}>Sign in</button>
//     </>
//   );
// }

export default function Home() {
  return (
    <div>
      <h1>Next Js App</h1>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit
        voluptatibus commodi quia ullam itaque perferendis repellendus nobis
        fugiat officiis. A dolore eveniet optio, sit excepturi numquam labore.
        Et nesciunt vel laudantium inventore, suscipit, illo nisi ipsa cumque
        rerum quae dolorem.
      </p>
    </div>
  );
}
