// Import the `SectionTitle` and `ActivityCard` components from their respective paths
import SectionTitle from "../../Common/SectionTitle";
import ActivityCard from "./ActivityCard";
// Define the type of the `title` prop
type title = {
  title: string;
};
// Create a functional component named `HolidayActivity`
const HolidayActivity = ({ title }: title) => {
  return (
    // Return the JSX structure for rendering the holiday activity section
    <section id="howitworks" className="w-full pt-20">
      <div className="w-5/6 lg:w-[70%] mx-auto">
        <div>
          {/* Render the `SectionTitle` component with the provided `title` */}
          <SectionTitle title={title} />
        </div>
        <div className="flex justify-between mt-10 flex-wrap">
          {/* Render multiple `ActivityCard` components with different images and titles */}
          <ActivityCard
            width="sm"
            image="/images/activities/Sport.png"
            title="Sports and Activities"
          />
          <ActivityCard
            width="sm"
            image="/images/activities/Health.png"
            title="Wellness and Health"
          />
          <ActivityCard
            width="sm"
            image="/images/activities/Extreme.png"
            title="Extreme Sports and Expeditions"
          />
          <ActivityCard
            width="sm"
            image="/images/activities/Games.png"
            title="Games"
          />
          <ActivityCard
            width="lg"
            image="/images/activities/Culture.png"
            title="Culture and Education"
          />
          <ActivityCard
            width="lg"
            image="/images/activities/Enjoyment.png"
            title="Enjoyment and Relaxation"
          />
          <ActivityCard
            width="sm"
            image="/images/activities/Travelling.png"
            title="Travelling"
          />
        </div>
      </div>
    </section>
  );
};
export default HolidayActivity;
