import Header from "./header/header";
import Homepage from "./homepage/page";
import AdminHeader from "./adminHeader/adminHeader";
import AdminBoard from "./adminBoard/page";
import SingleRequest from "./requests/singleRequest";

export default function Home() {
  return (
    <>
      <AdminHeader />
      {/* <AdminBoard /> */}
      <SingleRequest />
    </>
  )
}
