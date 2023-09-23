import { Outlet } from "react-router-dom";
import Layout from "./Layout";

export default function Root() {
  return (
    <>
      <Layout />
      <Outlet />
    </>
  );
}
