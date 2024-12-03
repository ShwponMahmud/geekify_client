// "use client"
import HomePage from "../components/HomePageComponents/HomePage/HomePage";
// import { useDispatch } from "react-redux";
// import { AppDispatch } from "../rtk-state/store";
// import { getServices } from "../rtk-state/reducers/bookingSlice";

export default function Home() {
  // const dispatch = useDispatch<AppDispatch>();
  // dispatch(getServices());

  return (
    <div className="mx-auto">
      <HomePage />
    </div>
  );
}
