import { Dashboard } from "../components/dashbord/Dashbord";
import { Record } from "../components/record/Reacord";

export default function Page() {
  return (
    <div className="bg-white">
      <Dashboard />
      <Record/>
    </div>
  );
}
