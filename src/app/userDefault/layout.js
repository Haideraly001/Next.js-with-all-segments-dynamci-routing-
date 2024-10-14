export function generateMetadata() {
  return {
    title: "User Page",
  };
}

export default function Layout({ children }) {
  return (
    <>
      {children}
    </>
  );
}
